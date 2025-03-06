var myRect = document.querySelector("#rect");

myRect.addEventListener("mouseover", function() { 	// 도형에서 마우스가 올라가면 실행
	myRect.style.backgroundColor = "skyblue";	// myRect 요소 배경색 하늘색으로 변경
	myRect.style.borderRadius = "50%";			// myRect 요소 테두 둥글게 처리
});

myRect.addEventListener("mouseout", function() {	// 도형에서 마우스가 떨어지면 실행
	myRect.style.backgroundColor = "";	// myRect 요소 배경색 지우기
	myRect.style.borderRadiaus = "";	// myRect 요소 테두리 둥글게 처리 안 함함
});

