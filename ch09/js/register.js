var userId = document.querySelector("#user-id");    //[아이디] 필드를 가져와 변수에 저장
var pw1 = document.querySelector("#user-pw1");      //[비밀번호] 필드를 가져와 변수에 저장
var pw2 = document.querySelector("#user-pw2");      //[비밀번호 확인] 필드를 가져와 변수에 저장

//change 이벤트 : 텍스트 필드 안의 내용이 바뀔 때(ID 필드에 입력 마치고 그 필드 빠져나올 때) 발생하는 이벤트
userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId(){
    //userId 필드 내용의 길이가 4이하이거나 15 이상일 경우
    if(userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        userId.select();    //다시 입력하도록 입력된 정보 드래그 함.
    }
}

function checkPw(){
    // pw1 필드 길이가 8자리 이하일 경우
    if(pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = ""; // [비밀번호] 필드 지우고
        pw1.focus();    // 다시 입력하도록 커서를 포커싱 함.
    }
}

function comparePw(){
    if(pw1.value != pw2.value) {    //pw1 내용과 같지 않으면
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw2.value = ""; //[비밀번호 확인] 필드 지우고
        pw2.focus();    // 다시 입력하도록 커서를 포커싱 함.
    }
}