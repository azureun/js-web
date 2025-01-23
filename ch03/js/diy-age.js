
function calc() {
    let birth, year, age;      //1. 나이 계산에 사용할 변수 선언

    //2. 팝업 창에서 올해 연도 값과과 태어난 연도 값 받고, 변수에 할당
    year = prompt("올해 연도를 입력하세요");
    birth = prompt("태어난 연도를 입력하세요"); 

    //3. 올해 연도 - 태어난 연도 + 1
    age = year - birth + 1;

    //4. 팝업 창에 현재 나이 띄우기
    alert("현재 나이는 " + age + "입니다.");
    //5. html 부분도 바꿔주기
    document.getElementById("result").innerHTML = "현재 나이 : " + age;
}