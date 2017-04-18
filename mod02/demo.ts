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
var result = document.getElementById("result") || {innerText:''};
const add = document.getElementById("add");
if (add) {
  add.addEventListener("click", () => {
    var sum = calculator.add(+x.value, +y.value);
    result.innerText = sum.toString();
  });
}

document.getElementById("subtract").addEventListener("click", () => {
  var difference = calculator.subtract(+x.value, +y.value);
  result.innerText = difference.toString();
});



class Cat {
  type: "cat";

  sleep() {

  }
  eat() { }
}

function eatStuff(options) {
  return function (construcor) {
    construcor.bla = options.value;
    return construcor;
  }
}

@function (c) { return c }
@eatStuff({ value: 1 })
class Dog {


  type: "dog";

  sleep() {

  }
  attack() {

  }
}


function gotosleep(cat: { sleep() }) {
  cat.sleep();
}

gotosleep(new Cat())
gotosleep(new Dog())
gotosleep(null)


type Pet = Cat | Dog;

function eat(pet: Pet) {

  switch (pet.type) {
    case "dog":

    // break;
    // case "cat":

  }

  if (pet instanceof Cat) {

  }


}




function getSomeData() {

  return new Promise((resolve, reject) => {
    setTimeout(() => reject(1000), 5000);
  })
}

// getSomeData()
//   .then(data => console.log(data));



async function printData() {
  try {
    var data = await getSomeData();
    console.log(data)
  } catch (e) {
    console.error(e)
  }
}


printData();

