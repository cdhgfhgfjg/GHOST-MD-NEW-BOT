const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `👋 𝙷𝚎𝚕𝚕𝚘 ${pushname} 𝙸'𝚖 𝚊𝚕𝚒𝚟𝚎 𝚗𝚘𝚠

*I'm GHOST-MD Whatsapp Bot Create By CYBER-GHOST 🍂✨*

| *Bot Name* : GHOST-MD
| *Owner*: GHOST
| *Version*: 1.0.0
| *Memory*: 38.09MB/7930MB

I am nethu md whatsapp bot. How can I help you.
To get the menu, type as menu. If you need to know something about the bot,
type as owner and direct the question to me. Good day.

*ꜱʟ°᭄🇱🇰™️𝙶𝙷𝙾𝚂𝚃-𝚃𝙴𝙰𝙼*

 *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ*`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
