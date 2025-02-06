var now = new Date();
var firstDate = String(prompt("처음 만난 날짜를 입력하세요.(YYYY-MM-DD)"));

//며칠 만났는지 계산하기
var firstDay = new Date(firstDate); //처음 만난 날 설정
var toNow = now.getTime();         //오늘 날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime();  //처음 만난 날을 밀리초로 바꿈
var passedTime = toNow - toFirst;   //처음 만난 날과 오늘 사이의 차이 (밀리초)
var passedDay = Math.round(passedTime/(24*60*60*1000)); //밀리초 -> 일(day) 변환 후 반올림
document.querySelector('#accent').innerHTML = passedDay + "일";

//기념일 계산하기
calcDate(100);  //100일 기념일 계산해서 표시
calcDate(200);  //200일 기념일 계산해서 표시
calcDate(365);  //1년 기념일 계산해서 표시
calcDate(500);  //500일 기념일 계산해서 표시

function calcDate(days){
    var future = toFirst + days*(1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1; //getMonth는 0~11까지이므로 주의
    var date = someday.getDate();
    document.querySelector("#date" + days).innerText = year + "년" + month + "일" + date + "일";
}

