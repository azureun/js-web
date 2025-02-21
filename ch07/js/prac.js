var myArray = new Array();  //Array 객체의 인스턴스를 만든다.

var numbers1 = ["one","two","three","four"]; //리터럴을 사용한 배열
var numbers2 = new Array("one","two","three","four");   //Array 객체를 사용한 배열

// 배열에서 for문 사용하기
var seasons = ["봄", "여름","가을","겨울"]
console.log(seasons.length);

for (var i = 0; i<seasons.length; i++) {
    console.log(seasons[i]);
}