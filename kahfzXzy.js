
require('./setting')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessage, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia, WAMessageStubType } = require('@adiwajshing/baileys-md')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const moment = require('moment-timezone')
const os = require('os')
const yts = require( 'yt-search')

const { virtex } = require('./virtekk/virtex')
const { virtex2 } = require('./virtekk/virtex2')
const { virtex3 } = require('./virtekk/virtex3')
const { virtex4 } = require('./virtekk/virtex4')
const { virtex5 } = require('./virtekk/virtex5')
const { virtex6 } = require('./virtekk/virtex6')
const { virtex7 } = require('./virtekk/virtex7')
const { virtex8 } = require('./virtekk/virtex8')
const { virtex9 } = require('./virtekk/virtex9')
const { ngazap } = require('./virtekk/ngazap')
const { bugHole } = require('./virtekk/inipirus')
const { typeXrim } = require('./virtekk/virushantu')
const { virtag } = require('./virtekk/virtag')
const { vipi } = require('./virtekk/virtod')
const { emoji2 } = require('./virtekk/emoji2')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const ttdownloader = require('./lib/ttdown')
const { tiktokDownloader, instaDownloader, facebookDownloader, zippyDownloader, mediafireDownloader } = require('./lib/downloader')
const { yta, ytv, servers } = require('./lib/y2mate')
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime, hentaiImage, styletext, emojipedia, iplookup, ipweather, gore } = require('./lib/scraper')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const fake = '𝙲𝙰𝚃𝚉𝚈 𝙱𝙾𝚃 𝙼𝙳 → 𝙸𝚕𝚑𝚊𝚖 𝚜𝚔𝚑𝚢𝚣𝚒'
const fake1 = '𝙲𝙰𝚃𝚉𝚈 𝙱𝙾𝚃 𝙼𝙳 → 𝙸𝚕𝚑𝚊𝚖 𝚜𝚔𝚑𝚢𝚣𝚒'
const fake2 = 'NiJadwal Sholat '
ownerNumber = ["68770621@s.whatsapp.net"]
modelmenu = 'gif'
apikeyy = 'sQMpXbHimbTkxGC'
let thumb = fs.readFileSync("./Fotoh/bokep.jpg")

module.exports = kahfz = async (kahfz, m, chatUpdate) => {
    try {
        //var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : ''
        //Body lu ada yg kurang gw tambahin
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
		const type = Object.keys(m.message)[0] 
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const isCreator = [kahfz.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == kahfz.user.id ? true : false
        const text = args.join(" ")
        const q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    
	const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'//'Pagi🌄'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'//'Pagi 🌅'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'//'Siang 🌞'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'//'Soree ☀️'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat 🌠'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Malam 🌌'
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat Malam!'
}
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

	     
	    // Group
        const groupMetadata = m.isGroup ? await kahfz.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	    const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const groupMembers = m.isGroup ? groupMetadata.participants : ''
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
       kahfz.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: kahfz.authState.creds.me.id,upload: kahfz.waUploadToServer})
            }
			
			
	
			
            
        const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return kahfz.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return kahfz.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return kahfz.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return kahfz.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return kahfz.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
        const reply = (teks) => {
            kahfz.sendMessage(from, teks, text, {quoted:m})
        }

		const troli = {
                         "key": {
                         "remoteJid": "status@broadcast", 
                         "participant": '0@s.whatsapp.net'
                    }, 
                         "message": {
                         "orderMessage": {
                         "itemCount": 99999, 
                         "status": 200, 
                         
                         "surface": 200, 
                         "message": `𝙲𝙰𝚃𝚉𝚈 𝙱𝙾𝚃 𝙼𝙳`, 
                         "orderTitle": '𝙸𝚕𝚑𝚊𝚖 𝚜𝚔𝚑𝚢𝚣𝚒 ', 
                         "sellerJid": '0@s.whatsapp.net'
                    } 
                          } 
                              } 
							  
							  
							  const peksaya = {
                         "key": {
                         "remoteJid": "6288222079999-1633244783@g.us", 
                         "participant": '6285793887010@s.whatsapp.net'
                    }, 
                         "message": {
                         "orderMessage": {
                         "itemCount": 2021, 
                         "status": 200, 
                         
                         "surface": 200, 
                         "message": ` I 𝙲𝙰𝚃𝚉𝚈 𝙱𝙾𝚃 𝙼𝙳 ${pushname}! `, 
                         "orderTitle": 'i 𝙲𝙰𝚃𝚉𝚈 𝙱𝙾𝚃 𝙼𝙳!', 
                         "sellerJid": '687710621@s.whatsapp.net'
                    } 
                          } 
                              } 
							  
		    kahfz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
            let mime = (message).mimetype || ''
            let messageType = mime.split('/')[0]
            let extension = mime.split('/')[1]
            trueFileName = attachExtension ? (filename + '.' + extension) : filename
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
            }
            // save to file
            await fs.writeFileSync(trueFileName, buffer)
            return trueFileName
           }
        const sendButton5 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "𝙶𝙸𝚃𝙷𝚄𝙱",
              "url": "https://github.com/@Ilhamskhyi"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝙲𝙰𝚃𝚉𝚈",
              "id": `${prefix}ping`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝙶𝙴𝚃 𝙱𝙾𝚃",
              "id": `${prefix}sewa`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝙾𝚆𝙽𝙴𝚁",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
kahfz.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

const sendButton1 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "𝙷𝙾𝚂𝚃𝙸𝙽𝙶",
              "url": "https://replit.com/@Ilhamskhyi"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝙳𝙾𝙽𝙰𝚂𝙸",
              "id": `${prefix}donasi`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝚁𝚄𝙻𝙴𝚂",
              "id": `${prefix}rules`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝙼𝙴𝙽𝚄",
              "id": `${prefix}allmenu`
            }
          }
        ]
      }
    }
  }, {})
kahfz.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
const sendButton2 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "𝙷𝙾𝚂𝚃𝙸𝙽𝙶",
              "url": "https://replit.com/@Ilhamskhyi"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝙳𝙾𝙽𝙰𝚂𝙸",
              "id": `${prefix}donasi`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝙼𝙴𝙽𝚄",
              "id": `${prefix}allmenu`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Sholat !!!",
              "id": `${prefix}sholat`
            }
          }
        ]
      }
    }
  }, {})
kahfz.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
const sendButton3 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
{
            "urlButton": {
              "displayText": "𝙷𝙾𝚂𝚃𝙸𝙽𝙶",
              "url": "https://replit.com/@Ilhamskhyi"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝙳𝙾𝙽𝙰𝚂𝙸",
              "id": `${prefix}donasi`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝙼𝙴𝙽𝚄",
              "id": `${prefix}allmenu`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Next AsmaulHusna",
              "id": `${prefix}asmaulhusna`
            }
          }
        ]
      }
    }
  }, {})
kahfz.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

const sendButton4 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐬𝐢",
              "url": "https://wa.me/687710621"
            }
          },
          {
                                       callButton: {
                                            displayText: '𝙿𝙷𝙾𝙽𝙴 𝙽𝚄𝙼𝙱𝙴𝚁',
                                            phoneNumber: '687773710155s.whatsapp.net'
                                        }
                                    }, 
                                   
							
          {
            "quickReplyButton": {
              "displayText": "𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁",
              "id": `${prefix}owner`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "𝙼𝙴𝙽𝚄",
              "id": `${prefix}menu`,
            }
          }
        ]
      }
    }
  }, {})
kahfz.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
const sendButton6 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          
          {
                                       callButton: {
                                            displayText: '𝙿𝙷𝙾𝙽𝙴 𝙽𝚄𝙼𝙱𝙴𝚁',
                                            phoneNumber: '687773710155s.whatsapp.net'
                                        }
                                    }, 
                                   
							
          
          {
            "quickReplyButton": {
              "displayText": "𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁",
              "id": `${prefix} owner`,
            }
          },
        ]
      }
    }
  }, {})
kahfz.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

anuy = ` ${pushname}, 𝙲𝙰𝚃𝚉𝚈 𝙱𝙾𝚃 𝙼𝙳
𝑻𝑰𝑴𝑬𝑹
 _*${ucapanWaktu}*_
𝑾𝑰𝑩  : _${wib}_
𝑾𝑰𝑻 : _${wit}_
𝑾𝑰𝑻𝑨 : _${wita}_

𝑵𝑨𝑴𝑬 : ${pushname}
𝑵𝑼𝑴𝑩𝑬𝑹 : ${m.sender}
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ 
 *❍─ GROUP MENU ─❍*
 
❒➥${prefix}linkgroup
❒➥ ${prefix}ephemeral [option]
❒➥${prefix}setpp
❒➥${prefix}hidetag (teks)
❒➥${prefix}group [option]
❒➥${prefix}add (tag)
❒➥${prefix}kick (tag)
❒➥${prefix}promote (tag)
❒➥${prefix}demote (tag)

 *❍─ DOWNLOAD MENU ─❍*

❒➥${prefix}ytmp3 _[linkyt]_
❒➥${prefix}ytmp4 _[linkyt]_
❒➥${prefix}play _[nama lagu]_
❒➥${prefix}tiktoknowm _[url]_
❒➥${prefix}tiktokwm _[url]_
❒➥${prefix}tiktokmp3 _[url]_
❒➥${prefix}instagram _[url]_
❒➥${prefix}twitter _[url]_
❒➥${prefix}twittermp3 _[url]_
❒➥${prefix}facebook _[url]_
❒➥${prefix}pinterestdl _[url]_

 *❍─ SEARCH MENU ─❍*

❒➥${prefix}pinterest [query]
❒➥${prefix}wallpaper [query]
❒➥${prefix}wikimedia [query]
❒➥${prefix}ytsearch [query]

 *❍─ RANDOM TEXT ─❍*
❒➥ ${prefix}quotesanime

 *❍─ RANDOM VIDEO ─❍*
❒➥${prefix}porno
❒➥${prefix}hentai

 *❍─ RANDOM IMAGE ─❍*
❒➥${prefix}loli
❒➥${prefix}neko
❒➥${prefix}waifu
❒➥${prefix}shinobu
❒➥${prefix}megumin
❒➥${prefix}bully
❒➥${prefix}cuddle
❒➥${prefix}cry
❒➥${prefix}hug
❒➥${prefix}awoo
❒➥${prefix}kiss
❒➥${prefix}lick
❒➥${prefix}pat
❒➥${prefix}bonk
❒➥${prefix}smug
❒➥${prefix}blush
❒➥${prefix}yeet
❒➥${prefix}smile
❒➥${prefix}wave
❒➥${prefix}highfive
❒➥${prefix}handhold
❒➥${prefix}nom
❒➥${prefix}bite
❒➥${prefix}glomp
❒➥${prefix}slap
❒➥${prefix}kill
❒➥${prefix}happy
❒➥${prefix}wink
❒➥${prefix}poke
❒➥${prefix}dance
❒➥${prefix}cringe
❒➥${prefix}hilih (query)

 *❍─ E-PHOTO³⁶⁰ ─❍*
❒➥${prefix}blackpink _<text>_
❒➥${prefix}pornhub _<text>_
❒➥${prefix}neon _<text>_
❒➥${prefix}tunder _<text>_

 *❍─ ATTACK ─❍*
❒➥${prefix}sendvirtex
❒➥${prefix}virtex1
❒➥${prefix}virtex2
❒➥${prefix}virtex3

 *❍─ MAIN MENU ─❍*
❒➥${prefix}ping
❒➥${prefix}owner
❒➥${prefix}menu
❒➥${prefix}delete
❒➥${prefix}donasi
❒➥${prefix}sticker
❒➥${prefix}sgif
❒➥${prefix}tomp4
❒➥${prefix}tourl

 *❍─ OWNER MENU ─❍*
❒➥${prefix}chat [option]
❒➥${prefix}public
❒➥${prefix}broadcast _[text]_
❒➥${prefix}self
❒➥${prefix}setmenu
❒➥${prefix}setppbot

 *❍─ ISLAM MENU ─❍*
❒➥${prefix}jadwalsholat _[daerah]_
❒➥${prefix}kisahnabi _[nama nabi]_

 *❍─ SCHOOL MENU ─❍*
❒➥${prefix}faktaunik
❒➥${prefix}nulis _[text?]_
❒➥${prefix}brainly _[query]_
`
kuontol = 
`
date:*${tanggal(new Date())}*

Ucapan: *${ucapanWaktu}*

hi ${pushname}, 𝙲𝙰𝚃𝚉𝚈 𝙱𝙾𝚃 𝙼𝙳
`
rulesnya = ` 𝐑𝐔𝐋𝐄𝐒 
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ 
➤ 𝐓𝐨𝐥𝐨𝐧𝐠 𝐆𝐮𝐧𝐚𝐤𝐚𝐧, 𝐃𝐞𝐥𝐚𝐲 𝐉𝐚𝐧𝐠𝐚𝐧 𝐒𝐩𝐚𝐦 𝐒𝐚𝐚𝐭 𝐌𝐞𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐁𝐨𝐭, 𝐌𝐞𝐧𝐭𝐚𝐧𝐠 𝐌𝐞𝐧𝐭𝐚𝐧𝐠 𝐆𝐫𝐚𝐭𝐢𝐬 𝐃𝐢𝐛𝐨𝐫𝐨𝐧𝐠 𝐬𝐞𝐦𝐮𝐚.

➤ 𝐂𝐚𝐥𝐥/𝐕𝐂 𝐁𝐨𝐭 𝐀𝐮𝐭𝐨 𝐁𝐥𝐨𝐜𝐤.

➤ 𝐉𝐚𝐧𝐠𝐚𝐧 𝐂𝐚𝐥𝐥/𝐕𝐂 𝐁𝐨𝐭 𝐊𝐚𝐥𝐚𝐮 𝐓𝐢𝐝𝐚𝐤 𝐚𝐤𝐭𝐢𝐟.

➤ 𝐉𝐚𝐧𝐠𝐚𝐧 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭. 𝐒𝐚𝐧𝐤𝐬𝐢, 𝐖𝐀𝐑𝐍/𝐒𝐎𝐅𝐓 𝐁𝐋𝐎𝐂𝐊
     
➤ 𝐉𝐚𝐧𝐠𝐚𝐧 𝐭𝐞𝐥𝐞𝐩𝐨𝐧 𝐛𝐨𝐭. 𝐒𝐚𝐧𝐤𝐬𝐢, 𝐒𝐎𝐅𝐓 𝐁𝐋𝐎𝐂𝐊
      
➤ 𝐉𝐚𝐧𝐠𝐚𝐧 𝐦𝐞𝐧𝐠𝐞𝐤𝐬𝐩𝐥𝐨𝐢𝐭𝐚𝐬𝐢 𝐛𝐨𝐭. 𝐒𝐚𝐧𝐤𝐬𝐢, 𝐏𝐄𝐑𝐌𝐀𝐍𝐄𝐍𝐓 𝐁𝐋𝐎𝐂𝐊

➤ 𝐁𝐨𝐭 𝐭𝐢𝐝𝐚𝐤 𝐚𝐤𝐭𝐢𝐟 𝟐𝟒 𝐣𝐚𝐦, 𝐣𝐚𝐝𝐢 𝐭𝐞𝐫𝐠𝐚𝐧𝐭𝐮𝐧𝐠 𝐤𝐚𝐥𝐚𝐮 𝐨𝐰𝐧𝐞𝐫𝐧𝐲𝐚 𝐥𝐚𝐠𝐢 𝐚𝐝𝐚 𝐰𝐚𝐤𝐭𝐮 𝐛𝐨𝐭𝐧𝐲𝐚 𝐣𝐮𝐠𝐚 𝐨𝐧.

➤ 𝐊𝐚𝐦𝐢 𝐭𝐢𝐝𝐚𝐤 𝐦𝐞𝐧𝐲𝐢𝐦𝐩𝐚𝐧 𝐠𝐚𝐦𝐛𝐚𝐫, 𝐯𝐢𝐝𝐞𝐨, 𝐟𝐢𝐥𝐞, 𝐚𝐮𝐝𝐢𝐨, 𝐝𝐚𝐧 𝐝𝐨𝐤𝐮𝐦𝐞𝐧 𝐲𝐚𝐧𝐠 𝐚𝐧𝐝𝐚 𝐤𝐢𝐫𝐢𝐦

➤ 𝐊𝐚𝐦𝐢 𝐭𝐢𝐝𝐚𝐤 𝐚𝐤𝐚𝐧 𝐩𝐞𝐫𝐧𝐚𝐡 𝐦𝐞𝐦𝐢𝐧𝐭𝐚 𝐚𝐧𝐝𝐚 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐦𝐛𝐞𝐫𝐢𝐤𝐚𝐧 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐬𝐢 𝐩𝐫𝐢𝐛𝐚𝐝𝐢

➤ 𝐉𝐢𝐤𝐚 𝐦𝐞𝐧𝐞𝐦𝐮𝐤𝐚𝐧 𝐁𝐮𝐠/𝐄𝐫𝐫𝐨𝐫 𝐬𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐥𝐚𝐧𝐠𝐬𝐮𝐧𝐠 𝐥𝐚𝐩𝐨𝐫 𝐤𝐞 𝐎𝐰𝐧𝐞𝐫 𝐛𝐨𝐭

➤ 𝐀𝐩𝐚𝐩𝐮𝐧 𝐲𝐚𝐧𝐠 𝐚𝐧𝐝𝐚 𝐩𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐩𝐚𝐝𝐚 𝐛𝐨𝐭 𝐢𝐧𝐢, 𝐊𝐀𝐌𝐈 𝐓𝐈𝐃𝐀𝐊 𝐀𝐊𝐀𝐍 𝐁𝐄𝐑𝐓𝐀𝐍𝐆𝐆𝐔𝐍𝐆 𝐉𝐀𝐖𝐀𝐁!

➤ 𝐊𝐨𝐧𝐬𝐞𝐤𝐮𝐞𝐧𝐬𝐢 𝐁𝐢𝐥𝐚 𝐌𝐞𝐥𝐚𝐧𝐠𝐠𝐚𝐫 𝐑𝐮𝐥𝐞𝐬, 𝐁𝐨𝐭 𝐀𝐤𝐚𝐧 𝐌𝐞𝐦𝐛𝐥𝐨𝐤𝐢𝐫 𝐊𝐚𝐦𝐮 𝐀𝐭𝐚𝐮 𝐌𝐞𝐧𝐠𝐞𝐥𝐮𝐚𝐫𝐤𝐚𝐧 𝐊𝐚𝐦𝐮 𝐃𝐚𝐫𝐢 𝐆𝐫𝐮𝐩.
`
sewa = ` 𝑺𝑬𝑾𝑨 𝑩𝑶𝑻 
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ 
𝑼𝑵𝑻𝑼𝑲 𝑴𝑵𝒀𝑬𝑾𝑨 𝑩𝑶𝑻 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷 → 𝑪𝑨𝑻𝒁𝒀 𝑩𝑶𝑻 𝑴𝑫
𝑺𝑰𝑳𝑨𝑯𝑲𝑨𝑵 𝑲𝑳𝑰𝑲 𝑩𝑼𝑻𝑻𝑶𝑵 𝑼𝑵𝑻𝑼𝑲 𝑵𝑬𝑿𝑻 𝑲𝑬 𝑶𝑾𝑵𝑬𝑹

1 𝑴𝑰𝑵𝑮𝑮𝑼 : 15,0000
1 𝑩𝑼𝑳𝑨𝑵 : 20,000
𝑷𝑬𝑹𝑴𝑨𝑵𝑬𝑵 : 25,0000

𝑱𝑨𝑫𝑰 𝑩𝑶𝑻 
1 𝑴𝑰𝑵𝑮𝑮𝑼 : 25,0000
1 𝑩𝑼𝑳𝑨𝑵 : 50,000
𝑷𝑬𝑹𝑴𝑨𝑵𝑬𝑵 : 10,0000`
        // Public & Self
        if (!kahfz.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        switch(command) {
       case 'allmenu':
       case 'menuall':

       if (modelmenu == 'gif') {
       await sendButton5(from, anuy, fake, await kahfz.createMessage(from, {video: {url: "./Vidio/KahfzXzy.mp4", caption: anuy}, gifPlayback: true, gifAttribution: "GIPHY"}))
       } 

       else if (modelmenu == 'image') 

       {
       await sendButton5(from, anuy, fake, await kahfz.createMessage(from, {image: {url: "./fotoh/bokep.jpg", caption: anuy}}))
       }
       break
	  case 'menu':
       case 'menu':

       if (modelmenu == 'gif') {
       await sendButton1(from, kuontol, fake1, await kahfz.createMessage(from, {video: {url: "./Vidio/bokep.mp4", caption: kuontol}, gifPlayback: true, gifAttribution: "GIPHY"}))
       } 

       else if (modelmenu == 'image') 

       {
       await sendButton1(from, kuontol, fake1, await kahfz.createMessage(from, {image: {url: "./fotoh/bokep.jpg", caption: kuontol}}))
       }
       break
case 'rules':
       case 'peraturan':
       {
       await sendButton6(from, rulesnya, fake, await kahfz.createMessage(from, {image: {url: "https://telegra.ph/file/355cdf8439845a86ce2cc.png", caption: rulesnya}}))
       }
       break
case 'sewa':
       case 'sewabot':
       {
       await sendButton6(from, sewa, fake, await kahfz.createMessage(from, {image: {url: "./fotoh/ham.jpg", caption: sewa}}))
       }
       break
case 'nulis':
case 'tulis':
if (args.length < 1) return m.reply('Yang mau di tulis apaan?')
  teks = args.join(' ')
m.reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return m.reply(res.data.error)
  buff1 = Buffer.from(res.data.result.split(',')[1], 'base64')
kahfz.sendMessage(m.chat, { image: buff1,caption: '©ilham skhyzi' }, { quoted: m}).catch(e => {
  return m.reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
kahfz.sendMessage(m.chat, { text: '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah })
break
case 'sendvirtex':
m.reply(`${ngazap(prefix)}`)
m.reply(`${emoji2(prefix)}`)
m.reply(`${virtex(prefix)}`)
m.reply(`${virtex2(prefix)}`)
m.reply(`${virtex3(prefix)}`)
m.reply(`${virtex4(prefix)}`)
m.reply(`${virtex5(prefix)}`)
m.reply(`${virtex6(prefix)}`)
m.reply(`${virtex7(prefix)}`)
m.reply(`${virtex8(prefix)}`)
m.reply(`${virtex9(prefix)}`)
m.reply(`${virtag(prefix)}`)
break
case 'virtex2':
m.reply(`${vipi(prefix)}`)
break
case 'virtex3':
m.reply(`${bugHole(prefix)}`)
break
case 'virtexkorak':
m.reply(`${korak(prefix)}`)
break
case 'virushantu':
m.reply(`${typeXrim(prefix)}`)
break
case 'virush':
m.reply(`${typeXrim(prefix)}`)
break
case 'revoke': case 'resetlink': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		kahfz.groupRevokeInvite(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await kahfz.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await kahfz.updateProfilePicture(m.chat, { url: media }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await kahfz.updateProfilePicture(hisoka.user.id, { url: media }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
		    await fs.unlinkSync(media)
                }
            }
            break
case 'translate': case 'tr': {
                if (!text) throw 'Masukkan Query Bahasa'
                let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
                translate(teks, { to: args[0] }).then((res) => {
                    kahfz.sendText(m.chat, `⭔ Input : ${quoted.text}\n\n⭔ Output : ${res.text}`, m)
                })
            }
            break
	 case 'ytmp3': case 'ytaudio': {
		m.reply(mess.wait)
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`
                let result = await yta(isUrl(text)[0])
                let { dl_link, thumb, title, filesizeF, filesize } = result
                if (Number(filesize) >= 40000) return m.reply('File Melebihi Batas'+util.format(result))
                kahfz.sendImage(m.chat, thumb, `⭔ Title : ${title}\n⭔ File Size : ${filesizeF}\n⭔ Url : ${text}\n⭔ Ext : MP3`, m)
                kahfz.sendMessage(m.chat, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            	m.reply(mess.wait)
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`
                let result = await ytv(isUrl(text)[0])
                let { dl_link, thumb, title, filesizeF, filesize } = result
                if (Number(filesize) >= 100000) return m.reply('File Melebihi Batas'+util.format(result))
                kahfz.sendMessage(m.chat, { video: { url: dl_link }, caption: `⭔ Title : ${title}\n⭔ File Size : ${filesizeF}\n⭔ Url : ${text}\n⭔ Ext : MP4` }, { quoted: m })
            }
            break
case 'github': case 'gitdl': case 'gitclone': {
	m.reply(mess.wait)
                if (!text) throw `Example : ${prefix + command} https://github.com/GUYLUBREE/botkahfz`
                let gitRegex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
		if (!gitRegex.test(args[0])) return m.reply('link salah!')
                let [, user, repo] = args[0].match(gitRegex) || []
    		repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
		let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                kahfz.sendMedia(m.chat, url, filename, m)
            }
            break
	   case 'mediafire':{
		   if (!q) return m.reply('masukan link mediafire!')
			   if (!isUrl) return
		   dl = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/mediafire?url=${q}&apikey=sQMpXbHimbTkxGC`)
		   ep = `Tunggu sebentar...\n\nFile Name : ${dl.result.nama}\nJenis file : .${dl.result.mime}\nSize : ${dl.result.size}`
		   kahfz.sendMessage(m.chat, {text: ep}, {quoted: m})
		   sendFileFromUrl(m.chat, dl.result.link, m)
		   break
	   }
	  
	  case 'kbbi':
	  if (!q) return m.reply(`Masukan query! Contoh : ${prefix + command} pohon`)
		  bi = await fetchJson(`https://human-apixyz.herokuapp.com/api/info/kbbi?kata=${q}&apikey=AnggaKey`)
	  biba = `KBBI RESULT\n\nLema : ${bi.result.lema}\nArti : ${bi.result.arti}`
	  kahfz.sendMessage(m.chat, {text: biba}, {quoted: m})
	  break
case 'infogempa':              
                var get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=AditAnjay`)
               var get_result = get_result.result
               var ini_txt = `Lokasi : ${get_result.lokasi}\n`
                ini_txt += `Waktu : ${get_result.waktu}\n`
                ini_txt += `Potensi : ${get_result.potensi}\n`
                ini_txt += `Magnitude : ${get_result.magnitude}\n`
                ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                ini_txt += `Koordinat : ${get_result.koordinat}`
                var get_buffer = await getBuffer(get_result.map)
                kahfzxy.sendMessage(from, { caption: ini_txt, image: get_buffer , templateButtons: buttonsDefault5, footer: 'Info Gempa 🌋', mentions: [sender] })
                break
case 'alquran':
if (args.length < 1) return m.reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
  urls = (`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=apikey beli sendiri`)
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
  arab = x.arab
  nomor = x.ayat
  latin = x.latin
  indo = x.indonesia
  ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
m.reply(ini_txt)
break
case 'jadwaltv':
                    if (args.length == 0) return m.reply(`Contoh: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/channel?apikey=apikey beli sendiri`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                   m.reply(ini_txt)
                    break
	      case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footerText: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                kahfz.sendMessage(m.chat, buttonMessage, { quoted: troli })
            }
            break
case 'yts': case 'ytsearch': {
	m.reply(mess.wait)
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                for (let i of search.all) {
                    teks += `⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Channel : ${i.author.url}\n\n─────────────────\n\n`
                }
                kahfz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'bcgc': case 'bc': case 'broadcast': {
                if (!isCreator) throw mess.owner
                let getGroups = await kahfz.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                cc = await smsg(kahfz, text ? m : m.quoted ? await m.quoted.fakeObj : false || m)
                cck = text ? text : cc.text
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    await kahfz.copyNForward(i, kahfz.cMod(m.chat, cc, /bc|broadcast|bcgc/i.test(cck) ? cck : `ᴄᴀᴛᴢʏ - ʙᴏᴛ ᴍᴅ ʙʀᴏᴀᴅᴄᴀꜱᴛ \n\n ${cck}`), true).catch(_ => _)
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
case 'doaniat':

              if (args.length == 0) return m.reply(`Example: ${prefix + command} shubuh`)

              query = args.join(" ")

              asw = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${query}?apikey=apikey beli sendiri`)

              ngontol = await getBuffer(asw.result)  

              teksnyaa = `NIAT SHOLAT ${query}\n${asw.result}[ *NIAT SHOLAT BY CATZY - BOT* ]` 

              kahfzz.sendMessage(from,{text: teksnyaa}, { quoted: troli})  

              break
case 'h':
                if (!isGroup) return m.reply(mess.group)
                kahfz.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break
case 'brainly':
m.reply(mess.wait)
brainly(args.join(" ")).then(res => {
  hmm = '────────────\n'
  for (let Y of res.data) {
 hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
  }
  m.reply(hmm)
  console.log(res)
})
break
case 'tiktokmp3': case 'tiktokaudio': {
	m.reply(mess.wait)
                if (!text) throw `Example : ${prefix + command} https://vt.tiktok.com/ZSeAsTBQ9/`
                let anu = await tiktokDownloader(isUrl(text)[0])
                let teks = `
► VIDEO

⭔ *ID :* ${anu.id}
⭔ *Username :* ${anu.username}
⭔ *Nickname :* ${anu.nickname}
⭔ *Upload At :* ${anu.tanggal_buat}
⭔ *Resolusi :* ${anu.resolusi}
⭔ *Verify :* ${anu.verify}
⭔ *Like :* ${anu.statistic.diggCount}
⭔ *Share :* ${anu.statistic.shareCount}
⭔ *Comment :* ${anu.statistic.commentCount}
⭔ *Viewers :* ${anu.statistic.playCount}
⭔ *Private :* ${anu.video_private}
⭔ *Duet :* ${anu.duetEnabled}
⭔ *Stitch :* ${anu.stitchEnabled}
⭔ *Caption :* ${anu.desk}

♫ AUDIO

⭔ *ID :* ${anu.music.id}
⭔ *Title :* ${anu.music.title}
⭔ *Author :* ${anu.music.authorName}
⭔ *Original :* ${anu.music.original}
⭔ *Duration :* ${anu.music.duration}
⭔ *Album :* ${anu.music.album}
⭔ *Schedule Time :* ${anu.music.scheduleSearchTime}
                `
                let buttons = [
                    {buttonId: `sendbuffer ${anu.wm}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `sendbuffer ${anu.nowm}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: teks,
                    footer: '𝙸𝚕𝚑𝚊𝚖 𝚜𝚔𝚑𝚢𝚣𝚒 ',
                    buttons: buttons,
                    headerType: 4
                }
                kahfz.sendMessage(m.chat, buttonMessage, { quoted: m })
		await sleep(2000)
		kahfz.sendMessage(m.chat, { document: { url: anu.music.playUrl }, mimetype: 'audio/mpeg', fileName: `${anu.music.title}.mp3` }, { quoted: m })
            }
            break
	   case 'jadwalsholat': 
if (args.length == 0) return m.reply(`Example: ${prefix + command} Yogyakarta`)
  daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=apikey beli sendiri`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.maghrib}\n`
ini_txt += `Isya : ${get_result.isya}`
await sendButton2(from, ini_txt, fake1, await kahfz.createMessage(from, {image: {url: "https://telegra.ph/file/9ef301c0e305098a5582e.png", caption: ini_txt}}))
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=apikey beli sendiri`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
await sendButton3(from, ini_txt, fake1, await kahfz.createMessage(from, {image: {url: "https://telegra.ph/file/c65f781c2f401ff936491.png", caption: ini_txt}}))
break
case 'infogempa':              
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=apikey beli sendiri`)
                get_result = get_result.result
                ini_txt = `Lokasi : ${get_result.lokasi}\n`
                ini_txt += `Waktu : ${get_result.waktu}\n`
                ini_txt += `Potensi : ${get_result.potensi}\n`
                ini_txt += `Magnitude : ${get_result.magnitude}\n`
                ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                ini_txt += `Koordinat : ${get_result.koordinat}`
                get_buffer = await getBuffer(get_result.map)
                kahfz.sendMessage(m.chat, { image: get_result,caption: ini_txt }, { quoted: m})
                break
case 'darkjokes':
data = fs.readFileSync('./lib/darkjokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
but = [
{ buttonId: 'darkjokes', buttonText: { displayText: 'NEXT 𖥂' }, type: 1 }
]
sendButImage(from, `AWOKWOK DARK COK`, `${fake}`, hasil, but)
break
case 'kisahnabi':
if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
  query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=apikey beli sendiri`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
await sendButton4(from, ini_txt, fake1, await kahfz.createMessage(from, {image: {url: "https://telegra.ph/file/5e24046bff78fa0d84b0d.png", caption: ini_txt}}))
break 
/*case 'alquranaudio':
if (args.length == 0) return m.reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
  surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=apikey beli sendiri`)
kahfz.sendMessage(m.chat, { document: ini_buffer }, fileName: `audio.mp3` }, { quoted: m })
break*/
case 'sholat':
m.reply(`ya udah sholat sana ajg pacaran mulu sholat di tinggalin`)
break
          case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let result1 = await yta(anu.url)
                let result2 = await ytv(anu.url)
                if (Number(result1.filesize) >= 40000) return hisoka.sendImage(m.chat, result1.thumb, `
⭔ Title : ${result1.title}
⭔ Ext : Search
⭔ File Size : ${result1.filesizeF}
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Media Url : ${result1.dl_link}

Untuk Durasi Lebih Disajikan Dalam Bentuk Link
`, m)
                let buttons = [
                    {buttonId: `sendbuffer ${result1.dl_link}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `sendbuffer ${result2.dl_link}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result1.thumb },
                    caption: `
⭔ Title : ${result1.title}
⭔ Ext : Search
⭔ File Size : ${result1.filesizeF}
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: '𝙸𝚕𝚑𝚊𝚖 𝚜𝚔𝚑𝚢𝚣𝚒 ',
                    buttons: buttons,
                    headerType: 4
                }
                let msge = await kahfz.sendMessage(m.chat, buttonMessage, { quoted: m })
                await sleep(15000)
                kahfz.sendMessage(m.chat, { delete: { remoteJid: msge.key.remoteJid, fromMe: true, id: msge.key.id, participant: msge.participant } })
            }
            break
	   case 'playall':{
		   if (!q) return m.reply('Masukan Judul')
			   
		  yt = await fetchJson(`https://human-apixyz.herokuapp.com/api/yt/playmp3?query=${q}&apikey=AnggaKey`)
		  djasjus = `*PLAY MUSIC*\nTitle : ${yt.title}\nviews : ${yt.views}\nQuality : \n\n_Mohon tunggu.. kurang lebih 1 menit_`
		  kahfz.sendMessage(m.chat, {text: djasjus}, {quoted: m})
		  sendFileFromUrl(m.chat, yt.url, m)
		  break
	   }

                            case 'setmenu':
                            if (!q) return m.reply(`Masukan opts :\n⭔gif\n⭔image`)
                            if (q == "gif") {
                            modelmenu = "gif"
                            m.reply("Done change menu to "+q)
                            } 

                            else if (q == "image") {
                          modelmenu = "image"
                            m.reply("Done change menu to "+q)
                            } 

                            else {
                            m.reply(`Masukan opts :\n⭔gif\n⭔image`)
                            }
                            break
            
         
  case 'blackpink': case 'neon': case 'thunder': {
 m.reply (mess.wait)
 if (args.length == 0) return m.reply(`Example: ${prefix + command} LoL Human`)
ini_txt = args.join(" ")
 bufffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=apikey beli sendiri&text=${ini_txt}`)
                 kahfz.sendMessage(m.chat, { image: bufffer,caption: '©𝙸𝚕𝚑𝚊𝚖 𝚜𝚔𝚑𝚢𝚣𝚒 ' }, { quoted: m})
                 }
 break
	    case 'sc': {
                m.reply('Script : https://github.com/Ilhamskhyzi\n\n Dont Forget follow')
            }
            break
                    case 'faq':
              const buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1},
  {buttonId: '${prefix}faq22', buttonText: {displayText: 'Apa itu Bot?'}, type: 1},
  {buttonId: '${prefix}faq33', buttonText: {displayText: 'Terinspirasi dari mana?'}, type: 1}
]

const buttonMessage = {
    text: "no faq available now.",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}
kahfz.sendMessage(from, buttonMessage)
               break
			   case 'faq22':
			   m.reply('Ini adalah Bot !! Gunakam Untuk Keperluan Sendiri !! ')
			   break
	   case 'faq33':
			   m.reply('Saya terinspirasi membuat bot whatsapp dari Bot milik mastah skhyzi, saya belajar ke dia waktu itu dan sekarang saya sudah bisa merakit/recode sendiri, Terimakasih Stah!!')
			   break

			   
			   
    
                   case 'sticker': case 's': case 'stickergif': case 'sgif': {
		if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
		m.reply(mess.wait)
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await kahfz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
		    let media = await quoted.download()
		    let encmedia = await kahfz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else {
            	    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
        	}
	    }
	    break

  case 'igdl': case 'ig': case 'instagram': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/instagram2', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.data[0] },
                    caption: `Download From ${text}`,
                    footerText: fake,
                    buttons: buttons,
                    headerType: 5
                }
                kahfz.sendMessage(from, buttonMessage, { quoted: troli })
                }
            break
	    case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kahfz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kahfz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kahfz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kahfz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	    case 'tourl': {
                m.reply(mess.wait)
                let media = await kahfz.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
			
			case 'latestnews':{
				
					f = await fetchText(`https://wanz-apik.herokuapp.com/api/news/kumparan?type=Berita&apikey=WanzBotz`)
					kahfz.sendMessage(m.chat, {text: f.result}, {quoted: troli})
					m.reply('Saya lagi malas.')
					break
			}
			
            case 'chat': {
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    kahfz.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    kahfz.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    kahfz.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    kahfz.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    kahfz.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    kahfz.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    kahfz.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await kahfz.groupInviteCode(m.chat)
                kahfz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'credits': case 'tqt': {
             let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;ilham skhyzi.;;;'
                    + 'FN:ilham - skhyzi\n' // full name
                    + 'ORG:OwnerKontol;\n' // the organization of the contact
                    + 'item1.TEL;type=CELL;type=VOICE;waid=687710621:+687710621\n' // WhatsApp ID + phone number
                    + 'item1.X-ABLabel:OwnerKontol\n'
                    + 'item2.EMAIL;type=INTERNET: skhyzi@gmail.com\n'
                    + 'item2.X-ABLabel:Email\n'
                    + 'item3.URL:https://replit.com/@Ilhamskhyi\n'
                    + 'item3.X-ABLabel:Instagram\n'
                    + 'item4.ADR:;;Indonesia;;;;\n'
                    + 'item4.X-ABLabel:Region\n'
                    + 'item5.X-ABLabel:Creator\n'
                    + 'END:VCARD'
                kahfz.sendMessage(m.chat, { contacts: { displayName: 'ilham - skhyzi.', contacts: [{ vcardd }] } }, { quoted: m })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                kahfz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
			
            break
			
			case 'hilih': {
				if (!q) return reply ('masukan query')
					dijasjus = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/hilih?kata=${q}&apikey=WanzBotz`)
				kahfz.sendMessage(m.chat, {text: dijasjus.result.result}, {quoted: m})
				break
			}
			
			
				   
			 
	    case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await kahfz.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    kahfz.sendMessage(m.chat, { image: buffer }, { quoted: troli})
                    fs.unlinkSync(ran)
                })
            }
            break
			case 'take': case 'colong': case 'swm': case 'stickerwm': case 'wm': case 'exif': {
                if (!quoted) throw `Reply Media dengan caption ${prefix + command} Punya|Dika`
                let { writeExif } = require('./lib/exif')
                let media = {}
                media.mimetype = mime
                media.data = await m.getMsgBuffer(quoted)
                let encmedia = await writeExif(media, { packname: text.split("|")[0] ? text.split("|")[0] : global.packname, author: text.split("|")[1] ? text.split("|")[1] : global.author })
                kahfz.sendMessage(m.chat, { sticker: { url: encmedia } }, { quoted: m })
                await fs.unlinkSync(encmedia)
            }
            break
case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await kahfz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
			case 'gore': case 'randomgore': case 'horror': {
	        let anu = await gore()
		let buttons = [
                    {buttonId: `gore`, buttonText: {displayText: 'Next Video'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.video2 || anu.video1 },
                    caption: `⭔ Title : ${anu.title}\n⭔ Tag : ${anu.tag}\n⭔ Upload : ${anu.upload}\n⭔ Author : ${anu.author}\n⭔ Comment : ${anu.comment}\n⭔ Vote : ${anu.vote}\n⭔ View : ${anu.view}\n⭔ Source : ${anu.source}\n⭔ MediaUrl : ${anu.video1}`,
                    footer: 'Hisoka Morrow',
                    buttons: buttons,
                    headerType: 5
                }
                kahfz.sendMessage(m.chat, buttonMessage, { quoted: m })
	    }
	    break
case 'yaoi': case 'yuri': case 'oneesan': case 'milf': case 'paizuri': case 'boobs': case 'pussy': case 'tentacle': case 'trap': case 'futanari': {
		let anu = await hentaiImage(command)
		let result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: `⭔ Title : ${command}\n⭔ Media Url : ${result}`,
	 	    footer: 'ilham - skhzyi',
                    buttons: buttons,
                    headerType: 4
                }
                kahfz.sendMessage(m.chat, buttonMessage, { quoted: m })
	    }
	    break
			
			
			
			
			case 'gimg':{
				if (!q) return m.reply('masukan query!')
					m.reply(`searching google img for ${q}`)
					G = await fetchJson(`https://api.dapuhy.ga/api/search/googleimage?query=${q}&apikey=${apikeyy}`)
				kahfz.sendMessage(m.chat, { image: { url: G.image }, caption: `Hasil Dari ${q}` }, {quoted: m})
				.catch((err) => {
                    for (let x of ownerNumber) {
                        reply(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                   m.reply(`Maaf, tidak ada hasil google untuk ${q}`)
			})
				break
				
			}
            case 'pinterest': {
                m.reply(mess.wait)
                anu = await pinterest(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                kahfz.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: troli })
            }
            break
            case 'wallpaper': {
                m.reply(mess.wait)
                anu = await wallpaper(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                kahfz.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image}` }, { quoted: troli })
            }
            break
			case 'donasi': 
			
var templatetun = proto.Message.fromObject({
                       templateMessage: proto.TemplateMessage.fromObject({
hydratedTemplate: {
hydratedContentText: `𝘿𝙊𝙉𝘼𝙎𝙄 𝙑𝙄𝘼 •

➥ 𝙂𝙊𝙋𝘼𝙔
➥ 𝙊𝙑𝙊
➥ 𝘿𝘼𝙉𝘼
➥ 𝙋𝘼𝙔𝙋𝘼𝙇
➥ 𝘽𝘼𝙉𝙆
➥ 𝙋𝙃𝙊𝙉𝙀𝙉𝙐𝙈𝘽𝙀𝙍
❍ 𝙉𝙀𝙓𝙏 → 𝙆𝙇𝙄𝙆 𝘽𝙐𝙏𝙏𝙊𝙉 ↓`,
                                                      
                                    hydratedButtons: [{
                                        urlButton: {
                                            displayText: '𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐬𝐢',
                                            url: 'https://wa.me/68770621'
                                        }
                                    }, {
                                        callButton: {
                                            displayText: '𝙿𝙷𝙾𝙽𝙴 𝙽𝚄𝙼𝙱𝙴𝚁',
                                            phoneNumber: '687773710155s.whatsapp.net'
                                        }
                                    }, {
									"quickReplyButton": {
										"displayText": '𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁',
										"id": "#owner"
									},
									"index": 2
								},
								{
									"quickReplyButton": {
										"displayText": undefined,
										"id": "#tos"
									},
									"index": 3
								},
								{
									"quickReplyButton": {
										"displayText": undefined,
										"id": "NAN"
									}
                     }]
                                }
                            })
                        })
                        case 'Asslamualikum':

var p = generateWAMessageFromContent(from, templatetun, {})
                        await kahfz.relayMessage(from, p.message, { messageId: p.key.id });                                                
break

case 'tiktoknowm': {
                if (!text) m.reply(`Masukan Link !!`)
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footerText: fake,
                    buttons: buttons,
                    headerType: 5
                }
                kahfz.sendMessage(from, buttonMessage, { quoted: troli })
            }
            break
			 case 'lirik':
				   if (!q) return reply('masukan nama lagu!')
					   m.reply('mencari lirik...')
				   var Lirik = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/liriklagu?query=${q}&apikey=sQMpXbHimbTkxGC`)
kahfz.sendMessage(from, {text: Lirik.result}, {quoted: m})
break
            case 'wikimedia': {
                m.reply(mess.wait)
                anu = wikimedia(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                kahfz.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` }, { quoted: troli })
            }
            break
            case 'porno': case 'porn': case 'bokep': {
 m.reply('Bokeppp tross')
			}
            break
            case 'hentai': {
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                kahfz.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: troli })
		  }
            break
            case 'quotesanime': case 'quoteanime': {
                m.reply(mess.wait)
                anu = await quotesAnime()
                result = anu[Math.floor(Math.random(), anu.length)]
                kahfz.sendMessage(m.chat, { text: `~_${result.quotes}\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}` })
            }
            break
            case 'public': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                kahfz.public = true
                m.reply('_𝐒𝐮𝐜𝐜𝐞𝐬 𝐂𝐡𝐚𝐧𝐠𝐞 𝐓𝐨 𝐏𝐮𝐛𝐥𝐢𝐜 - 𝐌𝐨𝐝𝐞 ')
            }
            break
            case 'self': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                kahfz.public = false
                m.reply('_𝐒𝐮𝐜𝐜𝐞𝐬 𝐂𝐡𝐚𝐧𝐠𝐞 𝐓𝐨 𝐬𝐞𝐥𝐟 - 𝐌𝐨𝐝𝐞 ')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;catzy;;;'
                    + 'FN:catzy\n' // full name
                    + 'ORG:ilham - skhyzi;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=687710621:+687710621\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                kahfz.sendMessage(m.chat, { contacts: { displayName: 'owner catzy - bot md', contacts: [{ vcard }] } }, { quoted: troli })
            }
            break
			case 'kick': {
				 if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await kahfz.groupParticipantsUpdate(m.chat, [users], 'remove')
				m.reply(`Sukses kick ${users}`)
				}
				break
			case 'add': {
				 if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await kahfz.groupParticipantsUpdate(m.chat, [users], 'add')
				m.reply(`sukses add ${users}`)
				
				}
				break
			case 'promote': {
				  if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await kahfz.groupParticipantsUpdate(m.chat, [users], 'promote')
				m.reply('sukses promote!')
				}
				break
			case 'demote': {
				 if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await kahfz.groupParticipantsUpdate(m.chat, [users], 'demote')
				m.reply('sukses demote!')
				}
				break
				
            case 'eval': {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
			case 'malingpp': {
         if (!m.quoted) return m.reply('Balas target yg ingin di maling pp nya!')
        anu = await kahfz.profilePictureUrl(m.quoted.sender, 'image')
        kahfz.sendMessage(from, { image: { url: anu, caption: 'Maling pp', quoted: troli}})
       }
break
			
           case 'loli': 
           case 'neko': 
              await m.reply(('Loading..'))
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              await sendFileFromUrl(from,loli.url,`Ni ${pushname} ${command} nya`,m)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command} Error: \n\n` + err)
                    }
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi'())
                })
		break
          case 'waifu': 
          case 'shinobu': 
          case 'megumin': 
          case 'bully': 
          case 'cuddle': 
          case 'cry': 
          case 'hug': 
          case 'awoo': 
          case 'kiss': 
          case 'lick': 
          case 'pat': 
          case 'smug': 
          case 'bonk': 
          case 'yeet': 
          case 'blush': 
          case 'smile': 
          case 'wave': 
          case 'highfive': 
          case 'handhold': 
          case 'nom': 
          case 'bite': 
          case 'glomp': 
          case 'slap': 
          case 'kill': 
          case 'happy': 
          case 'wink': 
          case 'poke': 
          case 'dance': 
          case 'cringe': 
              await m.reply('Loading..')
              let waifu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
                await sendFileFromUrl(from,waifu.url,`Done`,m)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${prefix+command} Error: \n\n` + err)
                    }
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi')
                })
		break
                            
                  
case '?': {
	boy = `tes`
var templatetun = proto.Message.fromObject({
                       templateMessage: proto.TemplateMessage.fromObject({
                               hydratedTemplate: {
                                 hydratedContentText: boy,

                                    hydratedButtons: [{
                                        urlButton: {
                                            displayText: 'Info Selengkapnya',
                                            url: 'https://wa.me/687710621'
                                        }
                                    }, {
                                        callButton: {
                                            displayText: 'phone number',
                                            phoneNumber: '687773710155s.whatsapp.net'
                                        }
                                    }, {
									"quickReplyButton": {
										"displayText": 'Chat Owner',
										"id": "#owner"
									},
									"index": 2
								},
								{
									"quickReplyButton": {
										"displayText": undefined,
										"id": "#tos"
									},
									"index": 3
								},
								{
									"quickReplyButton": {
										"displayText": undefined,
										"id": "NAN"
									}
                     }]
                                }
                            })
                        })
kahfz.sendMessage(from, { caption: kuontol, location: { jpegThumbnail: fs.readFileSync('./Fotoh/bokep.jpg') }, templateButtons: templatetun})
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator && !m.key.fromMe) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator && !m.key.fromMe) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator && !m.key.fromMe) return
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
      if (budy.includes('Kahfz')) {  
kahfz.sendMessage(m.chat, {text: 'Hmmm....'}, {quoted: peksaya})
	  }	  

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
