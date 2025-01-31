//Put
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//👉 Put Your Session Id 🐣 👈කියන එක කපලා අයින් කරලා ඔයාගේ Session id එක දාන්න.
SESSION_ID: process.env.SESSION_ID || "Put Your Session Id 🐣",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "𝐘𝐨𝐮𝐫 𝐒𝐭𝐚𝐭𝐮𝐬 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜𝐥𝐲 𝐒𝐞𝐞𝐧𝐬 𝐁𝐲 𝐋𝐚𝐤𝐚-𝐌𝐝 🧚‍♀️🐣💗",


//=================================================



PREFIX: process.env.PREFIX || '.' ,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94781121579' : process.env.OWNER_NUMBER,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
