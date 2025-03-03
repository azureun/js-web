var pic = document.querySelector('#pic');

// addEventListener(이벤트 유형, 함수, 캡처 여부) 
// 이벤트 유형 : 처리할 이벤트 유형 지정. on 붙이지 않고 이벤트 이름만 사용. ex) click, mouseover
// 함수 : 이벤트 발생 시 실행할 명령어 나열 or 따로 만든 함수 실행.
// 캡처 여부 : true이면 캡처링, false이면 버블링. 기본값은 false
// - 캡처링 : DOM의 부모 노드에서 자식 노드로 이벤트가 전달.
// - 버블링 : dom의 자식 노드에서 부모 노드로 이벤트가 전달.
pic.addEventListener("mouseover", changePic, false);  // mouseover 이벤트 발생하면 changePic 함수 실행
pic.addEventListener("mouseover", changeStyle, false);// mouseover 이벤트 발생하면 changeStyle 함수 실행
pic.addEventListener("mouseout", originPic, false); // mouseout 이벤트 발생하면 originPic 함수 실행
pic.addEventListener("mouseout", originStyle, false); // mouseout 이벤트 발생하면 originStyle 함수 실행
    
// 아래처럼 onmouseover 나 onmouseout 에 두 가지 이상의 함수를 지정하면 이벤트당 하나의 함수만 실행됩니다. 
// pic.onmouseover = changePic;
// pic.onmouseover = changeStyle;
// pic.onmouseout = originPic;
// pic.onmouseout = originStyle;

function changePic() {			
  pic.src = "images/boy.png";
}
function originPic() {
  pic.src = "images/girl.png";
}
function changeStyle() {
  pic.style.border = "1px solid #222";
}
function originStyle() {
  pic.style.border = "none";
}