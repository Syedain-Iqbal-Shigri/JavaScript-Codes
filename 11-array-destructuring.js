const colors = ["red", "green", "blue"];

// Unpacking values into variables
const [first, second, third] = colors;

console.log(first);  // "red"
console.log(second); // "green"

console.log("======================");
const fruits = ["Apple", "Banana", "Cherry", "Date"];

// Skip "Banana" and "Cherry"
const [best, , , last] = fruits;

console.log(best); // "Apple"
console.log(last); // "Date"

console.log("======================");
const numbers = [1, 2, 3, 4, 5];
const [one, two, ...others] = numbers;

console.log(one);    // 1
console.log(others); // [3, 4, 5]

console.log("======================");
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10


console.log("======================");
const user = ["John"];
const [name, role = "Guest"] = user;

console.log(role); // "Guest" (since user[1] didn't exist)


console.log("======================");
const nested = [1, [2, 3], 4];
    const [ab, [bc, cd], de] = nested;

    console.log(bc); // 2
console.log(cd); // 3


