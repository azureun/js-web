var show = document.querySelector("#show");
var detail = document.querySelector("#detail");
var isOpen = false; // 초기값 설정

show.addEventListener("click", function(){
    if(isOpen == false) {   // if(!isOpen도 가능.)
        detail.style.display = "block";
        show.innerHTML = "Hide";    //Show 버튼을 Hide 버튼으로 변경
        isOpen = true;
    } else {
        detail.style.display = "none";
        show.innerHTML = "Show";    //Hide 버튼을 Show 버튼으로 변경
        isOpen = false;
    }
});