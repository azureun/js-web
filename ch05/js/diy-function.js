//1. 매개변수 있는 함수 선언하고 실행하기
function add(a, b){
    return a + b;
}

var num1 = parseInt(prompt("첫번째 수 입력 : "));
var num2 = parseInt(prompt("두번째 수 입력 : "));
var result = add(num1, num2);
document.write("<p>" + num1 + "+" + num2 + " = " + result + "</p>");
