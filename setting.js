/*Base By Collab HisokaXFazd 
subrek chaneel Gua Anjng 
Lolkey = Beli (free? Pc wa 2 orang saja)
api dappa = login di web api nya
api zenz = login di web api nya
*/
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
	lol: 'https://api.lolhuman.xyz',
	dappa: 'https://api.dapuhy.ga',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
	'https://api.lolhuman.xyz': 'NGONTOLLAHKAUDEK',
	'https://api.dapuhy.ga': 'DappaAnjing',
}

// Other
global.owner = ['687710621']
global.packname = 'CATZY - BOT MD -687710621'
global.author = undefined
global.sessionName = 'CATZY - BOT MD'
global.prefa = ['','!','.','🎟️','🎟️','🎟️']
global.sp = '⭔'
global.mess = {
    admin: '𝑭𝒊𝒕𝒖𝒓 𝑲𝒉𝒖𝒔𝒖𝒔 𝑨𝒅𝒎𝒊𝒏 𝑮𝒓𝒐𝒖𝒑',
    wrongFormat: '𝑭𝒐𝒓𝒎𝒂𝒕 𝒔𝒂𝒍𝒂𝒉, 𝒄𝒐𝒃𝒂 𝒍𝒊𝒂𝒕 𝒍𝒂𝒈𝒊 𝒅𝒊 𝒎𝒆𝒏𝒖',
    botAdmin: '𝑩𝒐𝒕 𝑯𝒂𝒓𝒖𝒔 𝑴𝒆𝒏𝒋𝒂𝒅𝒊 𝑨𝒅𝒎𝒊𝒏 𝑻𝒆𝒓𝒍𝒆𝒃𝒊𝒉 𝑫𝒂𝒉𝒖𝒍𝒖!',
    owner: '𝑭𝒊𝒕𝒖𝒓 𝑲𝒉𝒖𝒔𝒖𝒔 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕',
    group: '𝑭𝒊𝒕𝒖𝒓 𝑫𝒊𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑯𝒂𝒏𝒚𝒂 𝑼𝒏𝒕𝒖𝒌 𝑮𝒓𝒐𝒖𝒑!',
    private: '𝑭𝒊𝒕𝒖𝒓 𝑫𝒊𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑯𝒂𝒏𝒚𝒂 𝑼𝒏𝒕𝒖𝒌 𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒉𝒂𝒕!',
	bot: '𝑭𝒊𝒕𝒖𝒓 𝑲𝒉𝒖𝒔𝒖𝒔 𝑷𝒆𝒏𝒈𝒈𝒖𝒏𝒂 𝑵𝒐𝒎𝒐𝒓 𝑩𝒐𝒕',
    wait: '𝑳𝒐𝒂𝒅𝒊𝒏𝒈...',
	lockCmd: '𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑫𝒊𝒂𝒌𝒕𝒊𝒇𝒌𝒂𝒏 𝑶𝒍𝒆𝒉 𝑶𝒘𝒏𝒆𝒓!...',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules kontol\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync('./Fotoh/bokep.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
