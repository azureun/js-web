var arr = [2, 4, 6, 8, 10];
showArray(arr); //[2, 4, 6, 8, 10]

var sum = 0;

for(var i=0;i<arr.length;i++){
    sum += arr[i];
}

function showArray(arr) {
    var str = "<table><tr>"
    for(var i=0;i<arr.length;i++) {
        str += "<td>" + arr[i] + "</td>";
    }
    str += "</tr></table>"
    document.write(str);    
}

arr.push(sum);  //sum 값 배열 마지막에 추가
showArray(arr); //[2, 4, 6, 8, 10, 30]