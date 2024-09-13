const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👻 GHOST*MD Whatsapp Bot*

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: ɢʜᴏꜱᴛ-ᴍᴅ
*| ɴᴜᴍʙᴇʀ*: 94741140620
*| ʏᴏᴜᴛᴜʙᴇ*: https://www.youtube.com/@SlNethuMax
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*: https://whatsapp.com/channel/0029VamXNQbCHDydUEjl8p0G

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/397000a07a1deb7fad9c2.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
