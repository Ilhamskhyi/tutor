const axios = require('axios')
const cheerio = require('cheerio')


function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    image: $(b).find('img').attr('data-src')
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

function porno() {
    return new Promise((resolve, reject) => {
        axios.get('https://tikporntok.com/?random=1')
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = {}
            hasil.title = $('article > h1').text()
            hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
            hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            hasil.desc = $('article > div.intro').text()
            hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
            hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
            hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
            hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
            hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
            hasil.tags = $('article > div.post-tags').text()
            hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            resolve(hasil)
        })
    })
}

function hentai() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}
function joox(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: "Benniismael",
                                    status: true,
                                    data: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}
function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

function hentaiImage(title) {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random * 10)
        axios.get(`https://rule34.world/${title}/page/${page}`)
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = []
            $('app-post-grid > app-grid > app-loading-block > div > div.box-grid.ng-star-inserted > app-post-preview').each(function (a, b) {
                hasil.push('https://rule34.world'+$(b).find('img').attr('src'))
            })
            resolve(hasil)
        })
    })
}

function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

function emojipedia(emoji) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: 'https://emojipedia.org/'+encodeURI(emoji),
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
            }
        })
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const emoji = [];
            const hasil = {};
            hasil.title = $('article').find('h1').text().trim()
            hasil.apple_name = $('section.applenames').find('p').text()
            hasil.unicode_name = $('section.unicodename').find('p').text()
            hasil.description = $('section.description').find('p').text().trim()
            $('section.vendor-list > ul > li').each(function (a, b) {
                emoji.push({
                    type: $(b).find('h2').text(),
                    image: $(b).find('img').attr('src')
                })
            })
            hasil.image = emoji
            resolve(hasil)
        })
    })
}

function iplookup(ip) {
    return new Promise((resolve, reject) => {
        axios.get('https://geolocation.com/en_US?ip='+ip).then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = {
                country: $('table > tbody > tr:nth-child(2) > td:nth-child(1)').text().split('Country')[1].trim(),
                region: $('table > tbody > tr:nth-child(2) > td:nth-child(2)').text().split('Region')[1].trim(),
                city: $('table > tbody > tr:nth-child(2) > td:nth-child(3)').text().split('City')[1].trim(),
                zip: $('table > tbody > tr:nth-child(3) > td:nth-child(1)').text().split('ZIP or Postal Code')[1].trim(),
                latitude: $('table > tbody > tr:nth-child(3) > td:nth-child(2)').text().split('Latitude')[1].trim(),
                longtitude: $('table > tbody > tr:nth-child(3) > td:nth-child(3)').text().split('Longitude')[1].trim(),
                isp: $('table > tbody > tr:nth-child(4) > td:nth-child(1)').text().split('ISP')[1].trim(),
                domain: $('table > tbody > tr:nth-child(4) > td:nth-child(2)').text().split('Domain Name')[1].split(' [')[0].trim(),
                usage_type: $('table > tbody > tr:nth-child(4) > td:nth-child(3)').text().split('Usage Type')[1].trim(),
                weather: $('table > tbody > tr:nth-child(5) > td:nth-child(1) > a').attr('href') || $('table > tbody > tr:nth-child(5) > td:nth-child(1)').text().split('Weather')[1].trim(),
                time_zone: $('table > tbody > tr:nth-child(5) > td:nth-child(2)').text().split('Time Zone')[1].trim(),
                local_time: $('table > tbody > tr:nth-child(5) > td:nth-child(3)').text().split('Local Time')[1].trim(),
                addres_type: $('table > tbody > tr:nth-child(6) > td:nth-child(1)').text().split('Address Type')[1].trim(),
                category: $('table > tbody > tr:nth-child(6) > td:nth-child(2)').text().split('Category')[1].trim(),
                proxy: $('table > tbody > tr:nth-child(7) > td:nth-child(1)').text().split('Proxy')[1].trim(),
                provider: $('table > tbody > tr:nth-child(7) > td:nth-child(2)').text().split('Proxy Provider')[1].trim()
            }
            resolve(hasil)
        })
    })
}

function ipweather(ip) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.weatherdatasource.com/'+ip)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = {
                location: $('div.row > div > div:nth-child(1) > div:nth-child(1) > h2').text().trim(),
                cuaca: {
                    awan: $('h5.weather-title').text(),
                    image: 'https://www.weatherdatasource.com'+$('#bg > div.row.justify-content-center.bg-weather > div.col-md-3.my-auto.align-items-center.text-center > img').attr('src'),
                    suhu_f: $('#bg > div.row.justify-content-center.bg-weather > div:nth-child(2) > span:nth-child(1)').text(),
                    suhu_c: $('#bg > div.row.justify-content-center.bg-weather > div:nth-child(2) > span:nth-child(2)').text()
                },
                time: $('div.row > div > div:nth-child(1) > div:nth-child(1) > p').text().trim(),
                wind_direction: $('#bg > div.row.text-center.mt-3 > div:nth-child(1) > p').text().split('Wind Direction: ')[1],
                wind_speed: $('#bg > div.row.text-center.mt-3 > div:nth-child(2) > p').text().split('Wind Speed: ')[1],
                sunrise: $('#bg > div.row.text-center.mt-3 > div:nth-child(3) > p > span').text().split('Sunrise: ')[1],
                sunset: $('#bg > div.row.text-center.mt-3 > div:nth-child(4) > p').text().split('Sunset: ')[1]
            }
            resolve(hasil)
        })
    })
}

function gore() {
    return new Promise((resolve, reject) => {
		const page = Math.floor(Math.random() * 228)
        axios.get('https://seegore.com/gore/page/'+page)
        .then((res) => {
            const $ = cheerio.load(res.data)
            const link = [];
            $('ul > li > article').each(function (a, b) {
                link.push({
                    title: $(b).find('div.content > header > h2').text(),
                    link: $(b).find('div.post-thumbnail > a').attr('href'),
                    thumb: $(b).find('div.post-thumbnail > a > div > img').attr('src'),
                    view: $(b).find('div.post-thumbnail > div.post-meta.bb-post-meta.post-meta-bg > span.post-meta-item.post-views').text(),
                    vote: $(b).find('div.post-thumbnail > div.post-meta.bb-post-meta.post-meta-bg > span.post-meta-item.post-votes').text(),
                    tag: $(b).find('div.content > header > div > div.bb-cat-links').text(),
                    comment: $(b).find('div.content > header > div > div.post-meta.bb-post-meta > a').text()
                })
            })
            const random = link[Math.floor(Math.random() * link.length)]
            axios.get(random.link)
            .then((resu) => {
                const $$ = cheerio.load(resu.data)
                const hasel = {}
                hasel.title = random.title
                hasel.source = random.link
                hasel.thumb = random.thumb
                hasel.tag = $$('div.site-main > div > header > div > div > p').text()
                hasel.upload = $$('div.site-main').find('span.auth-posted-on > time:nth-child(2)').text()
                hasel.author = $$('div.site-main').find('span.auth-name.mf-hide > a').text()
                hasel.comment = random.comment
                hasel.vote = random.vote
                hasel.view = $$('div.site-main').find('span.post-meta-item.post-views.s-post-views.size-lg > span.count').text()
                hasel.video1 = $$('div.site-main').find('video > source').attr('src')
                hasel.video2 = $$('div.site-main').find('video > a').attr('href')
                resolve(hasel)
            })
        })
    })
}

module.exports = { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime, hentaiImage, styletext, emojipedia, iplookup, ipweather, gore }
