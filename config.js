const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923166187002";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_03_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2LFxuICAgICAgICA0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExLFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICA5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZHZwblVrdTZBdTdpb1BINUpqTDFJTFNLS0x5UGRJMEkvcGt5QVdMZkg3WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM0JYcm1NSjZTMFdLMlRsTGdPUTE0UVwiLFxuICBcInBob25lSWRcIjogXCIzYzYxYTU1Yy1hNjg5LTRmZmQtYjgyNi02OWZiNzhjMmVlNDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgMjEwLFxuICAgICAgNzMsXG4gICAgICAzMyxcbiAgICAgIDE4NCxcbiAgICAgIDIyOCxcbiAgICAgIDEyMSxcbiAgICAgIDU0LFxuICAgICAgMjAzLFxuICAgICAgMTM5LFxuICAgICAgMTY3LFxuICAgICAgMTI0LFxuICAgICAgMjAyLFxuICAgICAgMTY1LFxuICAgICAgMjIwLFxuICAgICAgODAsXG4gICAgICAxMTQsXG4gICAgICA0LFxuICAgICAgMTg1LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA4OSxcbiAgICAgIDIxNCxcbiAgICAgIDEzNSxcbiAgICAgIDE2OSxcbiAgICAgIDE4NCxcbiAgICAgIDIwOCxcbiAgICAgIDIxNSxcbiAgICAgIDg5LFxuICAgICAgMjEzLFxuICAgICAgMjE4LFxuICAgICAgNDMsXG4gICAgICAxMDEsXG4gICAgICA4MixcbiAgICAgIDE1MCxcbiAgICAgIDExOSxcbiAgICAgIDg0LFxuICAgICAgMTc2LFxuICAgICAgMixcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBNzZCNlNFUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTY2MTg3MDAyOjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDE1MzI5Njg1OTE1Nzk6ODJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUcydjZzQ0VJMjZsYnNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZZzRyNVVuZk43aTRzbk5RS2greVAyVE5xdk05WndCMjJ5MHZsN3d5Snc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlEyRm9DOUZoaGZjajlXUnhkek1yRjV1eE9sK2VTUXBDVlkyckdrVjhqZUsyNUY5T2FjRjNPOFFmd0QzcFJwVy8rWHEyZWFZbGRBc3BPRnRuZmMzS0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtvbWtKaE13elhJMmxOSkw1MU41bXFzVUkrTHV5OTNyMWdCN3lKUGdPM0hJR2tDcHpzdEc0eFU0NFROb0VTRDhZaDFkT20vSEtWTXg5RExqL1dKcUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE2NjE4NzAwMjo4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ2OTYyMTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOcGpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5wai5qc29uIjogIntcImtleURhdGFcIjpcIkhmbDA3UFVEeThDb2V1dzlsMGN0L3RUZkU3eTlEaHNYRHVGd3ByQ3ZBV2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjI4MDg3NTUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ2MzI2NTY3NzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
