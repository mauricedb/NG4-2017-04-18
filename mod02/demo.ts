class Calculator {
  add(x: number, y: number) {
    return x + y;
  }

  subtract(x: number, y: number) {
    return x - y;
  }
}

var calculator = new Calculator();

var x = <HTMLInputElement>document.getElementById("x");
var y = <HTMLInputElement>document.getElementById("y");
var result = document.getElementById("result");

document.getElementById("add").addEventListener("click", () => {
  var sum = calculator.add(+x.value, +y.value);
  result.innerText = sum.toString();
});

document.getElementById("subtract").addEventListener("click", () => {
  var difference = calculator.subtract(+x.value, +y.value);
  result.innerText = difference.toString();
});



class Cat {
  sleep() {

  }
  eat(){}
}


class Dog {
  sleep() {
    
  }

}


function gotosleep(cat: {sleep()}){
  cat.sleep();
}

gotosleep(new Cat())
gotosleep(new Dog())
