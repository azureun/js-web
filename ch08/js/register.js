function newRegister() {
    var newP = document.createElement("p"); //1. 새 p 요소 만들기
    var userName = document.querySelector("#userName");     //텍스트 필드 내용 가져오기
    var newText = document.createTextNode(userName.value); //2-2. 새 텍스트 노드 만들기
    newP.appendChild(newText);  //newText노드를 newP노드의 자식 노드로 연결

    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    var nameList = document.querySelector("#nameList");     //#nameList 가져옴
    nameList.appendChild(newP); //3. newP 노드를 #nameList 노드의 자식 노드로 연결
    userName.value = "";    // 다음 이름 입력하도록 텍스트 필드 비우기

    var removeBttns = document.querySelectorAll(".del");

    for (var i=0; i<removeBttns.length; i++) {  
        removeBttns[i].addEventListener("click", function() {   
          if (this.parentNode.parentNode)   
            this.parentNode.parentNode.removeChild(this.parentNode);   
        });
      }	
}
