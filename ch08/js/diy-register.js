function newRegister(){
    //여기부터
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    var nameList = document.querySelector("#nameList");
    nameList.appendChild(newP);
    userName.value = "";
    // 여기까지 
    // <div id="nameList">
    //  <p>도레미<span class="del">X</span></p>
    // </div>에 해당함.

    var removeBttns = document.querySelectorAll(".del");

    for(var i=0;i<removeBttns.length; i++){
        removeBttns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}