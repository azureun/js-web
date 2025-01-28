// 지역 변수 & 전역 변수
/*
var myVar = 100;    //전역 변수 선언
test();
test2();
function test() {
    var myVar = 50; //지역 변수 선언
    document.write("myVar is " + myVar + "<br>");
}

function test2() {
    myVar = 550;     //전역 변수 선언
    document.write("myVar is " + myVar + "<br>");
}
*/

// 익명 함수 & 즉시 실행 함수
/*
//익명 함수
var add = function(a, b) {  //익명함수 - 함수 선언 후, add 변수에 할당.
    return a + b;
}
var sum = add(10, 20);      //익명 함수 실행 후, 결과값을 변수 sum에 저장
console.log(sum);           //sum 변수 확인

//즉시 실행 함수 : 함수 선언 소스 전체를 괄호로 묶는다.
var result = (function() {
    return 10 + 20;
}());
console.log(result);

var result2 = (function(a, b){  //매개 변수 추가
    return a + b;
}(10, 20));             //인수 추가
console.log(result2);
*/


