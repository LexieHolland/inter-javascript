console.log("hello")

function testScope() {
    const z = 1234;
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

testScope();

console.log("---")

function makeDoubler() {
    return function(x) {
        return x + x
    }
}

myDoubler = makeDoubler()

console.log(myDoubler(4))

function makeIncrementer(k) {
    let n = k                //<== forms the "closure"
    return function(x) {
        return x + n
    }
}

function makeIncrementer2(k) {
    return function(x) {
        return x + k
    }
}

myIncrementer = makeIncrementer2(5)

console.log(myIncrementer(4))

function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());

function x(){
    myDoubler = makeIncrementer(4) // <<== steps on global variable
    console.log("whatever")
}


// utils.js: 

// function add(x,y) {
//     return x + y
// }

// main.js:

// // ? import util.js

// z = add(3,4)


// <html>
//     <body>
//         <script src="utils.js"></script>
//         <script src="main.js"></script>
//     </body>
// </html>

// // main.js

// const { add } = require("./utils.js")
// const utils = require("./utils.js")

//-------- NEW WAY --------

//utils.js:

export function add(x,y) {
    return x+y
}

//main.js

import { add } from "./utils.js";

console.log(add(3,4))


// package.json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A simple Node.js project using ES modules",
  "type": "module",
  "main": "main.js",
  "scripts": {
    "start": "node main.js"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "dependencies": {}
}

// <html>
//     <body>
//         <script type="module" src="main.js"></script>
//     </body>
// </html>
