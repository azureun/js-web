var cup = document.querySelector('#cup');    //id="view"인 요소 가져옴.
var smallPics = document.querySelectorAll(".small");    

for(i=0; i<smallPics.length; i++) {
    smallPics[i].addEventListener("click", function() { //view를 눌렀을 때 실행할 함수 선언
        //document.querySelector('#detail').style.display = "block";  //detail 요소의 display 속성 > block 설정

    })
}