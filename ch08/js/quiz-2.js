var check = document.querySelectorAll(".check");

for(var i=0;i<check.length;i++) {     
    check[i].addEventListener("click", function() {
        this.parentNode.style.color = "#ccc";
    });
}
