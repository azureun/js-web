//#04-01

//나이 판단
/*
let age = prompt("만 나이를 입력하세요.");

if(age >= 18) {
    console.log("성인입니다.");
    document.write("성인입니다.");
}
else {
    console.log("미성년자 입니다.");
    document.write("미성년자 입니다.");    
}
*/

// 조건 연산자 ?와 :
/*
var score = 75;
(score>=60) ? alert("Pass") : alert("Fail");
*/

// truthy 값과 falsy값 확인하기
/*
var input = prompt("이름을 입력하시오.");
if(input) {         //truthy하다. true와 동일
    alert("이름을 입력했습니다 : " + input);
}
else {              //falsy하다. false와 동일
    alert("이름을 입력하지 않았습니다.");
}
*/

//04-03

//1~100까지 더하는 for문 작성

var res=0;
for(var i=1; i<=100; i++){
    res += i;
}
document.write("1~100까지 합은 "+ res + "입니다.<br>");
