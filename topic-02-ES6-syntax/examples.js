// Template literals

const name = "Sam";
const greeting = `Hello, ${1+2}!!`;

console.log(greeting)

// functions as variable objects

function sayHi() {
    console.log("hi")
}

sayHi()

const sayHello = function() {
    console.log("hello")
}

sayHello()

function greeter(greeter1, greeter2) {
    greeter1();
    greeter2()
}

x = sayHi;

greeter(x, sayHello);

greetme = function() {
    greeter(x, sayHello);
}

greeter(greetme, greetme);

// traditional

function add(a,b) {
    return a+b;
}

// arrow function

const add2 = function(x,y) { return x+y}
const add3 = (x,y) => x+y;


const dog = {
    name:"Fido",
    speak() { 
        console.log(this)
        console.log(this.name)
    }
}

dog.speak()

const add4 = function(x,y) { console.log(this); return x+y}
console.log(add4(1,2))

function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
  }, 1000);
}

// ARROW FUNCTIONS DO NOT CREATE A NEW ENCLOSING OBJECT

// Broken version
function Timer() {
  this.seconds = 0;
  setInterval(function() {
    this.seconds++; // WRONG: 'this' does not refer to the Timer object
  }, 1000);
}

// timer = Timer()

// do something... 

// x = timer.seconds

function Timer() {
  this.seconds = 0;
  const self = this;
  setInterval(function() {
    self.seconds++;
  }, 1000);
}


function make_greeter() {
    let season = "Halloween"
    return function() {
        return `Happy ${season}!`
    }
}

greeter = make_greeter()

greeter()


class MathTools {
    static double(x) {
        return x+x
    }

    square(x) {
        return x*x
    }
}

mt = MathTools()
mt.square(4) //--> 16

MathTools.double(4) //--> 8

// Default values

function make_greeter(season = "Day") {
    return function() {
        console.log(`Happy ${season}!`)
    }
}

greeter = make_greeter("Easter")

greeter = make_greeter()

greeter()

greeter = 1

  const x = 10;
  const obj = { x }; // shorthand for { x: x }
  console.log(obj); // { x: 10 }

const x = 10;
  const obj = { x: x };

  { a,b,c,d } vs {a:a,b:b,c:c,d:d}

const math={
    add: function(a,b) { return a+b }
}

