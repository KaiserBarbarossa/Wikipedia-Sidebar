// supported wikipedias: {ar, de, en, es, fr, it, arz, nl, ja, pl, ru, ceb, sv, uk, vi, ja, war, zh}.m.wikipedia.org

const lang = ['ar', 'de', 'en', 'es', 'fr', 'it', 'arz', 'nl', 'ja', 'pl', 'ru',
    'ceb', 'sv', 'uk', 'vi', 'ja', 'war', 'zh'];

let select = '';
for (let i in lang) {
    if (navigator.language == lang[i]) {
        window.location = 'https://' + lang[i] + '.m.wikipedia.org'
        select = lang[i]
    }
}
if (select = '') {
	window.location = "nowiki.html"
}
