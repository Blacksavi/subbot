const { Telegraf } = require("telegraf");
const fs = require("fs");
const translate = require("@vitalets/google-translate-api");
const path = require("path");
const { token } = require("./config"); // Bot token
const badwords = require("./badword");
const normalwords = require("./normalword");
const fetch = require("node-fetch");

const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply("👋 හෙලෝ! මට .srt file එකක් එවන්න, මම එය සිංහලට පරිවර්තනය කරලා දෙන්නම්! 🚀");
});

bot.on("document", async (ctx) => {
  const file = ctx.message.document;
  if (!file.file_name.endsWith(".srt")) {
    return ctx.reply("📂 කරුණාකර .srt file එකක් එවන්න! 🙏");
  }

  const fileLink = await ctx.telegram.getFileLink(file.file_id);
  const filePath = path.join(__dirname, "downloads", file.file_name);

  // Download File
  const response = await fetch(fileLink);
  const fileData = await response.text();
  fs.writeFileSync(filePath, fileData);

  ctx.reply("🔄 Translate කරන්න පටන්ගත්තා... ඉන්නෝ! 😎");

  const translatedData = await translateSRT(fileData);

  const translatedFilePath = path.join(__dirname, "downloads", "translated_" + file.file_name);
  fs.writeFileSync(translatedFilePath, translatedData);

  ctx.replyWithDocument({ source: translatedFilePath, filename: "translated_" + file.file_name });
});

// SRT File Translate Function
async function translateSRT(data) {
  const lines = data.split("\n");
  let translatedLines = ["1", "00:00:00,000 --> 00:00:05,000", "මෙය සවි විසින් කල උපසිරසි ගැන්විමක්\n"];

  for (let line of lines) {
    if (!line.match(/^\d+$/) && !line.includes("-->")) {
      let translatedText = badwords[line.trim()] || normalwords[line.trim()] || (await translate(line, { to: "si" })).text;
      translatedLines.push(translatedText);
    } else {
      translatedLines.push(line);
    }
  }

  return translatedLines.join("\n");
}

bot.launch();
console.log("🚀 Bot Started Successfully!");
