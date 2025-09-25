y = 4
x = function(z,y) {return y-z}

x = function(data) {return stddev(data)} // importing library things is ok

n = 3+4

data=[2,3,4]

// not functional
x = function(data) {data[0] = 4}

// functional 
x = function(data) {
    copy = [...data]
    copy[0] = 4
    return copy
}

function repeat(n, operation) {
    for (let i = 0; i < n; i++) {
        operation();
    }
}

function sayHi() {
    console.log("Hi!")
}

repeat(5,sayHi)

// function double(x) {
//   return x * 2; // Pure function
// }

// function hypotenuse(a_side, b_side) {
//   return Math.sqrt(a_side * a_side + b_side * b_side); // Pure function
// }

// function addRandom(x) {
//   return x + Math.random(); // Not pure: result varies due to randomness, not external variable state
// }

function lower(t, n) {
    return t.filter(function(item) {return (item < n);})
}

function upper(t, n) {
    return t.filter(function(item) {return (item > n);})
}

function equal(t, n) {
    return t.filter(function(item) {return (item === n);})
}

console.log(lower([1,2,3,4,5],3))
console.log(upper([1,2,3,4,5],3))
console.log(equal([1,2,3,4,5],3))

x = [1] 
y = [2]
z = [3]

console.log([...x,...y,...z])

data = [4,2,7,5,8,3,4,5,1,9,6,3,5,2]
console.log(upper(data,data[0]))

function sort(data) {
    if (data.length === 0) {
        return []
    }
    let lower_data = sort(lower(data,data[0]))
    let equal_data = equal(data,data[0])
    let upper_data = sort(upper(data,data[0]))
    data = [...lower_data, ...equal_data, ...upper_data]
    return data
}

console.log(sort(data))