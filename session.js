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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBjeG5TV2YzZmZMSGUrUHVTZjZvREpUbXVlMHREdWhmU280T3AzeFYxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSExNZWdVYzVReFRpSHJwVnBpNzdJMGpGS041R2JvZWl0ZlVLLytORDJDST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSU9GcUU4Rk9kUms3SWVNMmdnc01Oc3lOSlhtTmFrNDNTMXRzWWhwc1djPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNZjJJZnY1ZGpSY2F5Tzg4SW5qTFdTVk8xc1J1ZmFaTkdJYXlMdTJ4ZkZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFISlhUS09aY2t3K1ZVK1U5MEwxY1BYT1NQZ2NZS3dFeFRMYklhT0ZQbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndUeHhnWkc0dDhBOWxETktVWHNuVUpmSnRITGhSYlF2SEdUczVnb2NyM2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1B1ZG56YnVrQW9MbXYrZXFhRTNNU1VTck90ZTAya3g5ZE5NNnl0NVczVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGtTQldDeUxhRXluV0lGQ2ozOWYrTjRydG1scTllVThFeHVqQ1Flb054MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ5S1oyN0QxTmtFNmFRU245NXArSDFuMUpLTkl4QkxMRUZ2SFlaU1Q0VDh1UEZud0lnS25Sd0lTd2Q2aXppMklZdW1FZDNaaW9zTzhNVEErR1BBVGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6IlJQbGlFdmZKQ2JGK1l6Y0dwT2JUblBTR0JGT2NaRUgxdExhT3BzUXhFYWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjFabGJjZGZDVHZxeTdyRVR5LW1Dd0EiLCJwaG9uZUlkIjoiZTkyZjM4NTUtNzAzYi00MWVkLTg5MjItZmQ1ZDljNWIyNDFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InowQUl5am9ZZWVQSC9pTG9pMlRCbmlrcFBydz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnMVlMMG5TUUk1R25ENlI0WVFMVTNBMVJkaWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN05UU0dWWEgiLCJtZSI6eyJpZCI6Ijk0NzYzNzE1MTE0OjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDQzNDIyNDYyNzMyMzQ6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2VWo3d0dFTDNpME1VR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZ5cnRIVVkxZ1h1d1NGZFMzMDBod0Z6ZFc3V3RheWVwVHJwWE1vL0hpVDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Inh6YWJXUnJaRlhvMXZtcTJ4aVpmR0ZvRmNOQkRVMzUvbXQ5S3BIR2NHL05kN3RQZkYzcXgzZ2dVaXV2MUErYVpMWmlOMUF1ZXNmeGgwalVidW5uekJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxQ3JtV2VLZ0hBb1ljdzhnbkNKUFZZTTBLRHRBVVNUN2VvYWN1L3ZFbFo5c3NjK1ZiQTBDWURkU1RhZytEMnF1M083YlMvRVk3YjdpZnpTWkJ5Vi9pdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYzNzE1MTE0OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmNxN1IxR05ZRjdzRWhYVXQ5TkljQmMzVnUxcldzbnFVNjZWektQeDRrOSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NjM5NTYzLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVOVCJ9",
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
