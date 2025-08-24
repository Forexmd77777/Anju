//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ01mRHBwc0ZIcElNbldUdTNhN1VaYm81NXVudzYzY0o5d3VEaC8vbXMxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGRLZmYzRUdrdUhCZUhEZlZDQytiWnhxYXl4c1hUSFM1L0VIRUplQ3NUND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQWZ5YTN2MlV1NFVtQllPa05LK3VvZ041emlMUUVTaERvQnlkbFQwN2w0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2MU9neldpbjc3ZmZYaklaVmF6YzlUeTNSUUxNNTBaOHdJY3Bqemo3UDFjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFCV3B1OUlyeldSb2w0YTM4TlV4b1FvSHI2eUphRTBLN1puY2FWZHdQRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZmYTU4TjlFTmdXbExsalZ3SzNOaC9IWEMrVjlhUlBkZ0YvRnZuNEFOelE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tiWFp6NDlleGQzZUo4YzVqZzQyYUhZWjRoSnp5S3EwK05kZnFQK1gxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGRjN3M4RzJjbVI2TExUbnVRWGRXTk51bithaWt4UzZhMTBGN0xzTWRTVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktuZExmSThzN3I5d3FnNjAwcFBiaUdUTUtZb3R6aUg5ZkNTTVVsYzdad3phUnpmLzVPeTdnTVJUZW5OQ2RUZjRUQzdjbld6L3JDTFZtZ0F5cVZCT2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJlYVI2eEM1ODFqUGFRUFV0a3I2YktyaXNQMjdGYkV0b0V3b0lUMUYxaUwwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQzMzQwMDk1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNDUxOUE3NjY4ODVENDVGRUZFQTgxMkE2NTY3NEU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwMzg5ODV9XSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlB5NkpKZUJGUU1lMkpGWGMtMmZOOGciLCJwaG9uZUlkIjoiMjMzNjdkNDAtMWU1MC00YTExLTg5MDctYjVjOGUzMDc3MWE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ4OUxGYjFkdnc3UlEyam5VcmJLYlE2ZEFxTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1eVhHNFZLaGZoR21aOEVuWHNwOHJuclplejA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVRZTTVUNU0iLCJtZSI6eyJpZCI6Ijk0NzQzMzQwMDk1OjYxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjEyODQ2MDk2OTQ1MjcwOjYxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTno0cVZNUXVJNnN4UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQmJMZWJDTTU5ejdVVWQzcXZHcENsMDB6RXBLN25RcnFqTGFkQ3UyRm1GND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM0d4VXB3V1BNM3Uzcm12Mld3dzM2cDh5SzNnaXdTdm5mS1ZFT0VhN2ZVTGd3alpEK3VHMHJpNDVmNWRRUnhvcWYzSXpLaTZ0WUpwT09pMXRqbTJxRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IjNMVXFJcjE0ei9HY1JwUzJ5ekVvcGlRUGNPVGJEa2JJaUhMY1lYM3pZNkFpc0MwWGxNOEpKSnhCTWNuS0R4bW1XVG1Oemh6bURZdWxGb0pZMDVZZ2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDMzNDAwOTU6NjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVd5M213ak9mYysxRkhkNnJ4cVFwZE5NeEtTdTUwSzZveTJuUXJ0aFpoZSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDM4OTgxLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV0cCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94743340095",
  PASSWORD: 
    process.env.PASSWORD || "Ihara11@#",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
