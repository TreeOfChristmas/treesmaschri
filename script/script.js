$(document)
.on('click', '.ornament, .close', popToggle)
const image = document.getElementById('tree');
const popup = document.querySelector('.ornament')
const scroll = document.querySelector('.container')

function popToggle(){
    $('.paper_bg').toggle()
}

popup.addEventListener('click', e => {
    scroll.scrollTop = 0
    lock.style.overflow = 'hidden';
})


function accessToGeo (position) {
    console.log(position)
}

function askForLocation () {
    navigator.geolocation.getCurrentPosition(accessToGeo)
}

askForLocation();


Kakao.init('f7d1c40b420e91c5d77a70b4d6badd09')
Kakao.isInitialized()

Kakao.Auth.authorize({
    redirectUri: 'http://localhost:5500/webapp/html/index.html',
    scope: 'profile_nickname'
  });