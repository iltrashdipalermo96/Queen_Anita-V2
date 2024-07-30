//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT; 3000
global.appUrl = process.env.APP_URL || "https://aesthetic-guglielma-trashino-51e855fc.koyeb.app/";
global.email = "iltrashdipalermo9090@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://iltrashdipalermo810:trashinobot123@trashbot.5hpmlba.mongodb.net/?retryWrites=true&w=majority&appName=trashbot";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "447455483336,393792529360,393515379863,393756157734,393518023924,393292862630,393509939666";
global.owner = process.env.OWNER_NUMBER || "447455483336";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JQM2xYc0RCVk5TSERFSURqd0ZlVzFua1hvSFBnQkVQcGZJd2JHeUlYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlJ0YURIQzErYTJXYkFKdDRjOStKdGZkMC9JS2p1cW1MOTMxT1o2YXZXOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT0IrdTRGNzZybGNCQjVHdWRMZzRHaTd4bkE1L2FLaks4c25JM3dxSzFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJcFpaOHdnQVl2WmtWdkpiN3JGd3p5Y0ZZamtPZGUvSXU5OHl2RFBOd0NRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPU3BGOGRicytyYWEwYWNYOExFaGNRYmZUcVB3L2x1TXNYbCtsOGVVVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9oMTZKNENtYUE3Q0NsRkNxbG4yOCtFRm5pQjlzd211NVNkRTFBakljUTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFFOENJNzRrREJSY3FUeTYyT3lKN0JRWEtiUC9xQjhGd1krdzBaaTQzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0V1aHI2VXNva0hqenpVeHFFTFRZQ1NPQ1hORUJNV0pidnY0L2w3MnYwaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVmUTZEZ0Q5bm9sNU5Ebnp2WmFrbnpqWmxQdnNMK1NaUkMraUtpVUN1S1c0amtqWFJwQkVKNEdTN2dSdjBSNnB0MlA0R0ZNbjlKY1RDVXVaWEZhbkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6Ik5JRjZyWXJMd0NjdEt2c3ZCbHJta3pXN29mUlFlNno3QlM1ZEE4MjY1U009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiODU1NzE4MzQxODI1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIwQTk1NjA3QTFERDk3MDAxQTg1NjY0OUE5NjNDNUIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE5ODA2NDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijg1NTcxODM0MTgyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0MkRGNzRBMERGQjZDRjE3N0ZERjg2RjI4OTQ0QkM2QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxOTgwNjQyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3TzdVREZXalJoaU9EUG9Ib0x6X0VRIiwicGhvbmVJZCI6IjU4ZTIzYmUwLTIxZjgtNDNiZi05ZDkyLTFmZGI5M2I4NzI0ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2YXZVUEFQYkw1NVAxZlFTR3VOU1JmS20xNHM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFJRWR6NUNLUVdvRW9qNUk5RFRBdzNnREwyVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wrcXhvRUJFTkt0amJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkUwY3dQLzI4dEp4bmJjUW9URC9xODRiaFdkWFp0RHRHL2h0VmYrQlQvbjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlU3Y25aT0wrOFZET0h6Y3lPZG1WRzFxSmpPRitiQlcxVkFUMzFCQkc5TXU5NnBoc0xYcGNqbWNOWXZCa3dScHJEc09ZTEhqMitDZzUydVhNRGU1cEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwd2dGWGszZDc0OFpuY0lxUE5jUDNPWUlGTmozSjE3cWpSdjlWcURBWlRxTkVtUkErT2o1VjJDeHJWTnZ5ZFQzM25SOElmeWliVk5RTTJlUkpIUlBEUT09In0sIm1lIjp7ImlkIjoiODU1NzE4MzQxODI1OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2WmfCdlpfwnZaG8J2WmPCdlo0iLCJsaWQiOiI3OTgyNjczMTk1NDI3NToxQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI4NTU3MTgzNDE4MjU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSTkhNRC85dkxTY1oyM0VLRXcvNnZPRzRWblYyYlE3UnY0YlZYL2dVLzU5In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQXdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE5ODA2MzksImxhc3RQcm9wSGFzaCI6IjJSdXROMCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1MyIn0"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`TRASHBOT-V2™`",
  author: process.env.PACK_AUTHER || "TRASHBOT-V2",
  packname: process.env.PACK_NAME || "TRASHBOT",
  botname: process.env.BOT_NAME || "TRASHBOT-V2",
  ownername: process.env.OWNER_NAME || "iltrashdipalermo",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "6vn20v7z8qemgmxc61d1tmvqc9h4zxbwllan7dqyg35wjgrdmoki2m2g6v3uw7l2",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
