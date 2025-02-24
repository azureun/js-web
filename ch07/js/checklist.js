var itemList = [];
var addBtn = document.querySelector("#add");
addBtn.addEventListener('click', addList);
//addBtn.onclick = addList;와 동일

function addList(){
    var item = document.querySelector("#item").value;   //텍스트 필드 내용 가져옴.
    if (item != null) {
        itemList.push(item);    //itemList 배열 끝에 item 변수값 저장. > push() 사용!
        document.querySelector('#item').value = ""; //id="item"인 요소의 값을 지움
        document.querySelector('#item').focus();    //텍스트 필드에 focus() 적용
    }
    showList();     //목록을 표시하는 showList() 함수 실행
}   

function showList() {
    var list = "<ul>";  //목록을 저장하는 <ul> 태그 저장
    for(var i=0; i<itemList.length; i++) {    //입력한 itemList 길이만큼 반복
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + "> ❌ </sapn></li>"; //각 요소를 <li>로 묶음.
        //+ i + 이부분은 연결된 숫자 i를 문자열로 변환함.
    }
    list += "</ul>";

    document.querySelector('#itemList').innerHTML = list;   //리스트 변수값 표시

    //삭제 동작

    //여기서는 querySelectorAll을 해야함.
    var remove = document.querySelectorAll(".close");  //삭제 버튼❌을 변수로 저장. 배열 형태가 됨.
    for(var i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList);    //요소를 클릭하면 removeList() 실행.
    }
}

function removeList(){
    //console.log(this);  //this 값을 콘솔에 표시
    var id = this.getAttribute("id");   //this(눌려진 삭제 버튼)의 id 값을 가져와 id 변수에 저장
    itemList.splice(id, 1);     //itemList 배열에서 인덱스 값이 id인 요소 1개 삭제 > splice() 사용!
    showList();
}

