$(document)
.on('click', '.adornment, .close, #success', popToggle)
const image = document.getElementById('tree');
const popup = document.querySelector('.adornment')
const scroll = document.querySelector('.container')
let selectedImageSrc = "";
let currentIndex = 0;

function popToggle(){
    $('.paper_bg').toggle()
}

function accessToGeo (position) {
    console.log(position)
}

function askForLocation () {
    navigator.geolocation.getCurrentPosition(accessToGeo)
}

askForLocation();


Kakao.init('f7d1c40b420e91c5d77a70b4d6badd09')
document.querySelector('#kakaoLogin').onclick = function() {
    Kakao.Auth.login({
        scope: 'profile_nickname',
        success: function(authObj) {
            console.log('로그인 성공:', authObj)
            const accesToken = authObj.access_token

            Kakao.API.request({
                url: '/v2/user/me',
                success: function(response) {
                    console.log('사용자 정보:', response)

                    const profileImage = response.properties.profile_image

                    const loginImg = document.getElementById('kakaoLogin')
                    loginImg.style.display = 'none'

                    const profileImg = document.getElementById('profile-image')
                    profileImg.style.display = 'block'
                    profileImg.src = profileImage
                },
                fail: function(error) {
                    console.error('API 호출 실패:', error)
                }
            })
        },
        fail: function(error){
            console.error('로그인 실패:', error)
        }

    })
}

  // 이미지를 넣을 위치를 추적

// 이미지를 선택하는 함수
function selectImage(imgElement) {
    selectedImageSrc = imgElement.src;  // 선택된 이미지의 src 저장

    // 모든 장식 이미지에 테두리 제거
    const ornaments = document.querySelectorAll('.ornaments');
    ornaments.forEach((ornament) => {
        ornament.style.border = "2px solid transparent";  // 기본 테두리
    });

    // 선택된 이미지에 테두리 추가
    imgElement.style.border = "2px solid #333";
}

// 이미지를 순차적으로 표시하는 함수
function displayImage() {
    if (!selectedImageSrc) {
        alert("먼저 이미지를 선택하세요!");  // 이미지 선택하지 않았을 경우
        return;
    }

    // 이미지를 삽입할 공간인 .img_container를 찾고, 그 안의 .ornament 요소들 찾기
    const imageContainer = document.querySelector('.img_container');
    const boxes = imageContainer.querySelectorAll(".ornament");

    // 아직 이미지가 들어가지 않은 빈 박스를 찾고, 이미지 추가
    if (currentIndex < boxes.length) {
        const box = boxes[currentIndex];  // 현재 인덱스의 박스 선택
        const imgElement = document.createElement("img");  // img 요소 생성
        imgElement.src = selectedImageSrc;  // 선택된 이미지의 src 설정
        imgElement.style.width = "100%";  // 박스 크기에 맞춰 크기 조정
        imgElement.style.height = "100%";
        box.appendChild(imgElement);  // 박스 안에 이미지 추가

        currentIndex++;  // 다음 박스를 위해 인덱스 증가
    } else {
        alert('이미지 박스가 가득 찼습니다.');  // 더 이상 넣을 공간이 없을 때
    }
}

// "다음" 버튼 클릭 시 텍스트 부분을 표시하고 장식 선택 부분을 숨기는 함수
function showTextSection() {
    // .ornament_adornment 부분 숨기기
    document.querySelector(".ornament_adornment").style.display = "none";

    // .text 부분 보이기
    document.querySelector(".want_to_say").style.display = "block";
}

function returnDefault() {
    document.querySelector(".ornament_adornment").style.display = "block"
    document.querySelector(".want_to_say").style.display = "none"
}