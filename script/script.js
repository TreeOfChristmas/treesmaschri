$(document)
.on('click', '#tree, .close', popToggle)
const image = document.getElementById('tree');
const letter = document.querySelector('.')

image.addEventListener('click', e =>{
    const userInput = prompt("편지내용을 입력하세요")

    if(userInput !== null) {
        alert(userInput)
    }
})


function popToggle(){
    $('.paper_bg').toggle()
}