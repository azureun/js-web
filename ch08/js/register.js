function newRegister() {
    var newP = document.createElement("p");                 //1. 새 p 요소 만들기
    var userName = document.querySelector("#userName");     //텍스트 필드 내용 가져오기
    var newText = document.createTextNode(userName.value);  //2. 새 텍스트 노드 만들기
    newP.appendChild(newText);                              //3. 새로 만든 newText 요소를 새로 만들어 둔 부모 요소 노드인 newP에 추가

    //"nameList" 
    //<p>완두콩 <span class="del">X</span><p>
    var delBttn = document.createElement("span"); //1. 새 span 요소 만들기
    var delText = document.createTextNode("X");   //2. 새 텍스트 노드 만들기
    delBttn.setAttribute("class", "del");         //2. 요소에 속성이 있을 경우, 속성 노드를 만듦.
    delBttn.appendChild(delText);                 //3. 새로 만든 요소 노드를 부모 노드에 추가
    newP.appendChild(delBttn);

    var nameList = document.querySelector("#nameList");     //#nameList 가져옴
    nameList.appendChild(newP); //3. newP 노드를 #nameList 노드의 자식 노드로 연결
    userName.value = "";        // 다음 이름 입력하도록 텍스트 필드 비우기

    var removeBttns = document.querySelectorAll(".del");

    for (var i=0; i<removeBttns.length; i++) {    //removeBttns에 있는 요소 전체를 반복
        removeBttns[i].addEventListener("click", function() {   //i번째 버튼을 눌렀을 때
          if (this.parentNode.parentNode)         //현재 노드(this)의 부모 노드, 그 위 부모 노드가 있을 경우 (span > p > div#nameList)
            this.parentNode.parentNode.removeChild(this.parentNode);  //현재노드(this)의 조부모 노드를 찾아 부모노드(p노드) 삭제
        });
      }	
}
