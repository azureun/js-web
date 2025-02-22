//07-1
/*
var myArray = new Array();  //Array 객체의 인스턴스를 만든다.

var numbers1 = ["one","two","three","four"]; //리터럴을 사용한 배열
var numbers2 = new Array("one","two","three","four");   //Array 객체를 사용한 배열

// 배열에서 for문 사용하기
var seasons = ["봄", "여름","가을","겨울"]
console.log(seasons.length);

for (var i = 0; i<seasons.length; i++) {
    console.log(seasons[i]);
}*/

//07-2
//concat() : 둘 이상의 배열을 합치는 함수
var nums = ["1", "2", "3"]
var chars = ["a", "b", "c", "d"]
console.log(nums.concat(chars));    //nums 배열에 chars 배열을 합침
console.log(chars.concat(nums));    //chars 배열에 nums 배열을 합침

//join() : 배열의 요소를 연결하는 함수
console.log(nums.join()); //구분 기호 없이 연결 > "1,2,3"
console.log(nums.join('-')); //구분 기호 -를 사용해 연결

//push(), unshift() : 새로운 요소를 "추가"하는 함수
//push() : 배열 끝에 추가
console.log(nums.push("4", "5"));   //nums 배열 맨 끝에 "4", "5" 요소 추가 후, 배열 요소 개수 반환
console.log(nums);  //전체 확인
//unshift() : 배열 처음에 추가
console.log(nums.unshift("0"));     //nums 배열 맨 앞에 "0" 요소 추가 후, 배열 요소 개수 반환
console.log(nums);  //전체 확인

//pop(), shift() : 배열에서 요소를 "삭제"하는 함수
//pop() : 배열 끝 요소 삭제
var study = ["html", "css", "javascript"]
console.log(study.pop());
console.log(study);
//shift() : 배열 처음 요소 삭제
var js = ["es6+", "node", "react", "angular", "vue"]
console.log(js.shift());
console.log(js);

//splice() : 원하는 위치의 요소를 "삭제/추가" 함수
```