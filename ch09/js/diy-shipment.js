
var check = document.querySelector("#shippingInfo");    // 체크 박스의 id는 shippingInfo

check.addEventListener("click", function(){
    if(check.checked == true) { //체크 박스 눌렀다면
        document.querySelector("#shippingName").value = document.querySelector("#billingName").value;   //주문 정보(이름)을 배송 정보(이름)에 복사
        document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;     //주문 정보(전번)을 배송 정보(전번)에 복사
        document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value;   //주문 정보(주소)을 배송 정보(주소)에 복사
    } else {                    //체크가 해제된다면 배송 정보 필드 지움
        document.querySelector("#shippingName").value = ""; 
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});