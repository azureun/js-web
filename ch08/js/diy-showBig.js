var bigPic = document.querySelector("#cup");  // 큰 이미지 가져옴
var smallPics = document.querySelectorAll(".small");  // 작은 이미지들을 노드 리스트로 가져옴

for(var i = 0; i < smallPics.length; i++) {
	smallPics[i].addEventListener("click", chagePic);   // 노드를 클릭하면 changePic 함수 실행
}

function chagePic() {
    var newPic = this.src;   // click 이벤트가 발생한 대상의 src 속성 값 가져옴
    bigPic.setAttribute("src", newPic);  // newPic 값을 큰 이미지의 src 속성에 할당.

}	

var isOpen = false;
var view = document.querySelector("#view");    // #view 요소를 가져옴
view.addEventListener("click", function showDetail() {
    if(isOpen == false) {       // 상세 정보가 감춰져 있다면
        document.querySelector("#detail").style.display = "block";  // 상세 정보 화면에 표시
        view.innerHTML = "상세 설명 닫기";  // 링크 내용 수정
        isOpen = true;  // 표시 상태 true
    }
    else {
        document.querySelector("#detail").style.display = "none";   // 상세 정보 화면에서 감춤
        view.innerHTML = "상세 설명 보기";
        isOpen = false; // 감춘 상태 false
    }
});

