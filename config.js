const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
MONGODB: process.env.MONGODB || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
SUDO_NB: process.env.SUDO_NB || "ඔයාගෙ owner number එක දෙන්න",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "true"
};
