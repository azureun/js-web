function openPop() {
  // 팝업 창에 열 html 파일 popup.html을 너비와 높이를 400px로 지정.
  var newWin = window.open("popup.html", " ", "width=400, height=400");
  if(newWin == null) {  //팝업이 차단되어 있다면 if문 실행
    alert("팝업이 차단되어 있습니다. 팝업 차단을 해제하고 새로고침해 주세요.");
  }
}

window.onload = openPop;  //openPop() 함수는 문서 열자마자 실행하므로 onload 이벤트 처리기로 실행.

