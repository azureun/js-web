var openBtn = document.querySelector('#open');
var closeBtn = document.querySelector('#close');

var coverImage = document.querySelector("#cover");

openBtn.addEventListener("click", showDetail);
closeBtn.addEventListener("click", hideDetail);

coverImage.onclick = function(){        //이미지를 눌렀을 때 알림창 표시
    alert('눌렀습니다.');
}
coverImage.onmouseover = function(){    //이미지 위로 마우스 올리면 5px의 하늘색 테두리가 그려진다.
    coverImage.style.border = "5px skyblue solid";
}
coverImage.onmouseout = function(){
    coverImage.style.border = "";       //마우스를 치우면 테두리가 사라진다.
}

function showDetail() {
    document.querySelector('#desc').style.display = "block";	// 상세 설명 부분을 화면에 표시
    document.querySelector('#open').style.display = "none";   // '상세 설명 보기' 단추를 화면에서 감춤
};

function hideDetail() {
    document.querySelector('#desc').style.display = "none";	   // 상세 설명 부분을 화면에서 감춤
    document.querySelector('#open').style.display = "block";	 // '상세 설명 보기' 단추를 화면에 표시
};