var openBtn = document.querySelector("#open");      //상세 설명 보기 버튼
var closeBtn = document.querySelector("#close");    //상세 설명 닫기 버튼

function showDetail() {         // 상세 설명 보기 클릭
    document.querySelector("#desc").style.display = "block";
    document.querySelector("#open").style.display = "none";
}
function hideDetail() {         // 상세 설명 닫기 클릭
    document.querySelector("#desc").style.display = "none";
    document.querySelector("#open").style.display = "block";
}

openBtn.addEventListener("click", showDetail);
closeBtn.addEventListener("click", hideDetail);
