README.md for GitHub

Here is a README.md that you can use for your GitHub repository. It includes a professional structure, detailed explanations, and instructions for users to set up and run the Telegram bot.

# Telegram Translation Bot

This **Telegram Bot** allows you to upload `.srt` subtitle files and automatically translates them to **Sinhala**. It also handles custom bad word filtering, ensuring that inappropriate words are replaced with Sinhala alternatives. 

You can use this bot for translating movie or TV show subtitles, as well as ensuring that the translated text is clean and free from offensive language.

![Bot Banner](https://example.com/your-image.png)  <!-- Replace with your image URL -->

## Features

- Translate `.srt` subtitle files to **Sinhala**.
- **Custom bad word mapping** with Sinhala replacements.
- **Automatic translation** of normal words using Google Translate API.
- Easy setup and deployment on **VPS**.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Bot Usage](#bot-usage)
- [Running the Bot on VPS](#running-the-bot-on-vps)
- [License](#license)

## Installation

### Prerequisites

Before you begin, ensure that you have the following installed on your system:

- **Node.js**: Install it from [Node.js official website](https://nodejs.org/).
- **Git**: If not already installed, install it from [Git official website](https://git-scm.com/).

### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/telegram-translation-bot.git
   cd telegram-translation-bot

	2.	Install dependencies:
This project requires several Node.js packages to work correctly. Run the following command to install them:

npm install


	3.	Configure the Bot:
Create a file named config.js in the root directory of the project and paste the following code:

// config.js
module.exports = {
  token: 'YOUR_BOT_TOKEN_HERE',  // Replace with your bot token
};


	4.	Update Word Mappings:
	•	Open the badword.js file to add your custom bad words and their Sinhala replacements:

module.exports = {
  "fuck": "හුත්ත",
  "slut": "වේසි",
  "bitch": "බැල්ලි",
  "dick": "පයිය",
  // Add more bad words here
};


	•	Open the normalword.js file to add normal words and their Sinhala translations:

module.exports = {
  "hello": "ආයුබෝවන්",
  "good": "හොඳ",
  "please": "කරුණාකර",
  // Add more normal words here
};



Bot Usage

Once everything is set up, you can start using the bot:
	1.	Run the bot:
In the project folder, run the following command:

node bot.js


	2.	How to use the bot:
	•	Open Telegram and search for your bot.
	•	Start the conversation by typing /start.
	•	Upload a .srt subtitle file.
	•	The bot will process the file and send back a translated .srt file in Sinhala.
The bot will automatically replace bad words based on your badword.js file and translate other text using Google Translate.

Running the Bot on VPS

You can run this bot on a VPS to keep it active 24/7. Here are the steps to do that:

Steps to Deploy on VPS
	1.	Set up a VPS:
	•	Choose a VPS provider like DigitalOcean, AWS, or Linode.
	•	Once you have the VPS, SSH into it:

ssh root@your_vps_ip


	2.	Install Node.js:
On the VPS, run the following commands to install Node.js:

sudo apt update
sudo apt install nodejs npm


	3.	Clone the repository on the VPS:
Navigate to your desired directory and clone the project:

git clone https://github.com/yourusername/telegram-translation-bot.git
cd telegram-translation-bot


	4.	Install the dependencies:
Install all required Node.js dependencies:

npm install


	5.	Create the config.js file:
Follow the same steps as in the local setup to add your bot’s token and configure the bot.
	6.	Run the bot:
Start the bot using the following command:

node bot.js

Your bot will now be running on your VPS, and you can interact with it from Telegram.

Running the Bot as a Background Process (Optional)

To keep the bot running even after logging out of the VPS, you can use pm2:
	1.	Install pm2:

sudo npm install pm2 -g


	2.	Start the bot with pm2:

pm2 start bot.js


	3.	Save pm2 process list:

pm2 save


	4.	Set pm2 to start on boot:

pm2 startup



Check the Bot Logs

To view the bot’s logs, use:

pm2 logs

License

This project is licensed under the MIT License - see the LICENSE file for details.

Contact

If you have any issues or need help, feel free to reach out to me via Telegram or open an issue here on GitHub.

Happy translating! 😊

---

### Key Points:
- **Replace the placeholder URLs** for images and repository links.
- Ensure that your **bot token** is correctly added to `config.js`.
- Add more details to the bot's features or steps if necessary.
  
Once this is ready, you can upload this `README.md` file to your **GitHub repository**, and users will be able to follow the instructions for setting up and running the bot.
