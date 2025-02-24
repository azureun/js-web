var itemList = [];      //1. 여행에 필요한 준비물 저장할 배열 선언
var addBtn = document.querySelector('#add'); //3. [add] 버튼의 click 이벤트와 addList() 함수를 실행 연결
addBtn.addEventListener('click', addList);

function addList() {    //2. 빈 배열에 내용 추가할 함수
    var item = document.querySelector('#item').value;   //html id로 값 불러오기
    if (item != null) {
        itemList.push(item);    //입력 받은 값을 item의 가장 뒤에 추가
        document.querySelector('#item').value = "";
        document.querySelector('#item').focus();
    }
    showList();
}

//4. itemList 보여줄 showList() 함수
function showList() {
    //itemList 값을 html에 적용하기
    var list = "<ul>";                  //4-1. html 태그 문자열 저장할 변수 list
    for(var i=0; i<itemList.length; i++) {     //4-2. for문으로 itemList 배열 요소 차례로 가져온 후 <li>~</li> 태그로 묶어 list에 저장 
        list += "<li>" + itemList[i] + "<span class='close' id" + i + "> ❎ </span></li>";
    }
    list += '</ul>';
    document.querySelector('#itemList').innerHTML = list;

    //5-1. showList()에서 각 항목을 표시하는 소스에 x버튼 함께 표시
    var remove = document.querySelectorAll(".close");   //<span class='close' 삭제하는 클래스 이름 참고
    for(var i=0;i<remove.length;i++) {
        remove[i].addEventListener("click", removeList); //5-2. 삭제버튼 click 이벤트와 removeList() 함수 실행 연결
    }
}

//5. 준비한 항목을 화면에서 삭제하는 removeList() 함수
function removeList() {
    var id = this.getAttribute("id");   //5-3. 이벤트가 발생한 삭제 버튼의 id 값 알아내고
    itemList.splice(id, 1);             //5-4. 해당 위치(id)의 itemList 요소 1개 삭제
    showList();                         //5-5. 변경된 배열을 화면에 표시
}