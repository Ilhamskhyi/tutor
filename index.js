
require('./setting')
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, proto } = require("@adiwajshing/baileys-md")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const fs = require('fs')
const chalk = require('chalk')
const fetch = require('node-fetch')
const FileType = require('file-type')
const { smsg, isUrl, generateMessageTag } = require('./lib/myfunc')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')


async function startkahfz() {
    const kahfz = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['𝙸𝚕𝚑𝚊𝚖 𝚜𝚔𝚑𝚢𝚣𝚒'],
        auth: state
    })

    kahfz.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!kahfz.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(kahfz, mek)
        require("./kahfzXzy")(kahfz, m, chatUpdate)
        } catch (err) {
            console.log(err)
        }
    })

    kahfz.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await kahfz.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await kahfz.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await kahfz.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
        let Ttes = `@${num.split("@")[0]} Leaving To ${metadata.subject}`
let Tod = `Welcome To ${metadata.subject} @${num.split("@")[0]}`
                if (anu.action == 'add') {
                let message = await prepareWAMessageMedia({ image: {url: ppuser }}, { upload: kahfz.waUploadToServer })
                const template = generateWAMessageFromContent(anu.id, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: Tod,
                            hydratedFooterText: '𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝙼𝚎𝚜𝚜𝚊𝚐𝚎 𝙱𝚢 𝚒𝚕𝚑𝚊𝚖 - 𝚜𝚔𝚑𝚢𝚣𝚒',
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝙶𝙸𝚃𝙷𝚄𝙱',
                                    url: 'https://github.com/Ilhamskhyzi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑭𝑨𝑺𝑻 𝑩𝑶𝑻',
                                    id: 'ping'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'WELCOME BADUT KOTA',
                                    id: 'Welcome'
                                }
                            }]
                        }
                    }
                }), { userJid: anu.id })
                kahfz.relayMessage(anu.id, template.message, { messageId: template.key.id })

                } else if (anu.action == 'remove') {
                                                let message = await prepareWAMessageMedia({ image: {url: ppuser }}, { upload: kahfz.waUploadToServer })
                const template = generateWAMessageFromContent(anu.id, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: Ttes,
                            hydratedFooterText: '𝚋𝚢𝚎 𝚍𝚘𝚐 𝙼𝚎𝚜𝚜𝚊𝚐𝚎 𝙱𝚢 𝚒𝚕𝚑𝚊𝚖 - 𝚜𝚔𝚑𝚢𝚣𝚒',
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝙶𝙸𝚃𝙷𝚄𝙱',
                                    url: 'https://github.com/Ilhamskhyzi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝑭𝑨𝑺𝑻 𝑩𝑶𝑻',
                                    id: 'ping'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝐛𝐲𝐞 𝐝𝐨𝐠',
                                }
                            }]
                        }
                    }
                }), { userJid: anu.id })
                kahfz.relayMessage(anu.id, template.message, { messageId: template.key.id })
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
       
	
    // Setting
    kahfz.public = true
    kahfz.modelmenu = "gif"

    kahfz.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startkahfz() : console.log('Koneksi Terputus...')
        }
        console.log('Koneksi Terhubung...', update)
    })

    kahfz.ev.on('creds.update', saveState)

    // Add Other

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    kahfz.sendText = (jid, text, quoted = '', options) => kahfz.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    kahfz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await kahfz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    kahfz.sendVideo = async (jid, path, gif = false, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await kahfz.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    kahfz.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await kahfz.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    kahfz.sendTextWithMentions = async (jid, text, quoted, options = {}) => kahfz.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
	 
	  kahfz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await kahfz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    kahfz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await kahfz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	 
	 
	 
	 
	 
	 
    kahfz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let mime = (message.msg || message).mimetype || ''
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
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    kahfz.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await kahfz.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

kahfz.cMod = (jid, message, text = '', sender = kahfz.user.id, options = {}) => {
        let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === kahfz.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }
    /**
     * 
     * @param {*} path 
     * @returns 
     */
    kahfz.getFile = async (path) => {
        let res
		let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
		if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
		let type = await FileType.fromBuffer(data) || {
			mime: 'application/octet-stream',
			ext: '.bin'
		}

		return {
			res,
			...type,
			data
		}
    }

    return kahfz
}

startkahfz()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
