var bicPic = document.querySelector("#cup");    // 큰 이미지 가져옴
var smallPics = document.querySelectorAll(".small");    // 작은 이미지들을 "노드 리스트"로 가져옴

for(var i=0; i<smallPics.length; i++) {     // 노드 리스트의 각 요소에 접근
    smallPics[i].addEventListener("click", changePic);   // 노드를 클릭하면 changePic 함수 실행
}

function changePic() {
    var newPic = this.src;  // click 이벤트 발생한 대상의 src 속성 값 가져옴
    bicPic.setAttribute("src", newPic); // newPic 값을 큰 이미지의 src 속성에 할당.
    // 윗 줄을 cup.src = newPic; 로 사용 가능.
}

// // setAttribute() 함수 대신 속성 사용하기
// for (var i=0; i<smallPics.length; i++) {
//     smallPics[i].onclick = function(event) {
//         bicPic.src=this.src;
//     }
// }

