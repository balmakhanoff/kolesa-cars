let footerText = document.querySelector('.footer_text');

const time = new Date()

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}


footerText.innerHTML = ('Алматы: ' + time.toLocaleDateString('kk-KZ', options) + '<br />')