//6자리 코드 랜덤 생성
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

// 페이지 로드 시 랜덤 문자열 생성 및 출력
const randomString = generateRandomString(6);
document.getElementById('randomString').textContent = randomString;



//6자리 코드 고정
// function generateRandomString(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters[randomIndex];
//     }

//     return result;
// }

// function getRandomString() {
//     // 로컬 스토리지에서 문자열 가져오기
//     let randomString = localStorage.getItem('randomString');

//     // 문자열이 없으면 새로 생성하고 저장
//     if (!randomString) {
//         randomString = generateRandomString(6);
//         localStorage.setItem('randomString', randomString);
//     }

//     return randomString;
// }

// // 페이지 로드 시 랜덤 문자열 출력
// const randomString = getRandomString();
// document.getElementById('randomString').textContent = randomString;

