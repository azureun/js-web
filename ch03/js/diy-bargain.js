function showPrice(){
    const originPrice = document.getElementById("oPrice").value;
    const rate = document.getElementById("rate").value;
        
    if(originPrice && rate) {
        let savedPrice = originPrice * (rate/100);
        let resultPrice = originPrice - savedPrice;
        document.getElementById("showResult").innerHTML=
        "상품의 원가는 " + originPrice + "원이고, 할인율은 " + rate + "%입니다.<br>" + 
        savedPrice + "원을 절약한 " + resultPrice + "원에 살 수 있습니다.<br>";
    } else {
        alert("원가와 할인율 값을 입력하세요!");
        return;
    }
}