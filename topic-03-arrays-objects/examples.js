x = [1,2,3]

const [first, second, third] = [1,2,3,4]

console.log(first, second, third)

// head and tail extractions

const [head,...tail] = [1,2,3,4,5]

console.log(head,tail)

original = { x:1, y:2 }

console.log(original)

copy = {...original, z:4}

console.log(copy)

// concatenation using spread operations
const a = [1,2]
const b = [3,4]
const combined = [...a,...b]
console.log(combined)

// Array methods: map, filter, reduce

const numbers = [1,2,3,4,5,6,7]

const double = numbers.map(function(n) {return n*2})

console.log(double)

const even = numbers.filter(function(n) { return n%2 == 0 })

console.log(even)

// chaining operators is possible

let evendoubled = numbers.filter(function(n) { return n%2 == 0 }).map(function(n) {return n*2})

console.log(evendoubled)

evendoubled = numbers.filter((n) => (n%2 == 0)).map(function(n) {return n*2})

console.log(evendoubled)

function doubler(n) {
    return n+n;
}

evendoubled = numbers.filter((n) => (n%2 == 0)).map(doubler)

console.log(evendoubled)

function add(x,y) {
    return x+y
}

function mult(x,y) {
    return x*y
}

added = numbers.reduce(add)

console.log(added)

// forEach iterates over elements

numbers.forEach( function(n) {
    console.log("the number is ",n)
})

// chaining can look organized: 

const result = numbers
  .filter(function(n) { return n % 2 !== 0; })
  .map(function(n) { return n * n; });

const result1 = numbers
  .filter(function(n) { return n % 2 !== 0; })
const result2 = result1
  .map(function(n) { return n * n; });

console.log(result); // [1, 9, 25]
