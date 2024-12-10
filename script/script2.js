$(document)
.on('click', '.add, .cancel, .confirm', popToggle)

function popToggle(){
    $('.add_bg').toggle()
}

let selectedImage = null; // 선택된 이미지를 저장할 변수

// 이미지 선택 시 실행되는 함수
function selectImage(imageElement) {
    // 모든 이미지에서 선택된 상태를 제거
    const allImages = document.querySelectorAll('.ornaments');
    allImages.forEach(img => img.classList.remove('selected'));

    // 선택된 이미지에 'selected' 클래스 추가
    imageElement.classList.add('selected');

    // 선택된 이미지의 src를 저장
    selectedImage = imageElement.src;
}

// confirm 버튼을 클릭했을 때 실행되는 함수
function confirm() {
    if (selectedImage) {
        // 새로운 .exchanges 요소 생성
        const newExchange = document.createElement('div');
        newExchange.classList.add('exchanges');
        
        // 새로운 .ornament 요소 생성
        const newOrnament = document.createElement('div');
        newOrnament.classList.add('ornament');
        
        // 새로운 img 태그 생성
        const newImage = document.createElement('img');
        newImage.src = selectedImage; // 선택된 이미지의 src로 설정
        
        // 이미지 태그를 .ornament 안에 추가
        newOrnament.appendChild(newImage);
        
        // 새로운 텍스트 요소들 추가 (상대, OOO, 빨간 양말, 교환신청 버튼)
        const newChangeTarget = document.createElement('div');
        newChangeTarget.classList.add('change_target');

        const target = document.createElement('p');
        target.classList.add('target');
        target.textContent = '상대';
        
        const targetName = document.createElement('p');
        targetName.classList.add('target_name');
        targetName.textContent = 'OOO';

        const changeThing = document.createElement('p');
        changeThing.classList.add('change_thing');
        changeThing.textContent = '빨간 양말이랑 눈사람이랑 교환할 사람 구함';

        // 새로운 교환신청 버튼
        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change_btn');
        changeBtn.textContent = '교환신청';

        // 요소들을 새로운 .exchanges에 추가
        newChangeTarget.appendChild(target);
        newChangeTarget.appendChild(targetName);
        newChangeTarget.appendChild(changeThing);
        newExchange.appendChild(newOrnament);
        newExchange.appendChild(newChangeTarget);
        newExchange.appendChild(changeBtn);

        // .exchange 클래스가 있는 부모 요소에 새로운 .exchanges 추가
        document.querySelector('.exchange').appendChild(newExchange);
        
        // 선택된 이미지를 초기화 (필요한 경우)
        selectedImage = null;

        // 모든 이미지에서 'selected' 클래스 제거
        const allImages = document.querySelectorAll('.ornaments');
        allImages.forEach(img => img.classList.remove('selected'));
    } else {
        alert('먼저 이미지를 선택해주세요!');
    }
}
