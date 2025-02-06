var r = prompt("원의 반지름은? (cm)");

function Circle(radius) {
    this.radius = radius;
    this.round = function(){
        return Math.floor(this.radius * 2 * Math.PI);   //2*PI*r
    }
    this.area = function(){
        return Math.floor(Math.pow(this.radius, 2) * Math.PI);  //PI*(r^2)
    }
};

var circle1 = new Circle(r);
document.write("반지름이 " + r + "cm일 때<br>");
document.write("원의 둘레 : 약 " + circle1.round() + "cm<br>");
document.write("원의 넓이 : 약 " + circle1.area() + "cm<sup>2</sup>");