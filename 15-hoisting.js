console.log("===== HOISTING EXAMPLE =====");

console.log("\n1️⃣ VAR HOISTING");

console.log(a);   // variable exists but value not assigned yet
var a = 10;

console.log("value of a after assignment:", a);


console.log("\n2️⃣ LET HOISTING");

try {
    console.log(b);   // this will cause an error
} catch (err) {
    console.log("Error:", err.message);
}

let b = 20;
console.log("value of b after declaration:", b);


console.log("\n3️⃣ FUNCTION HOISTING");

sayHello();   // calling function before declaration

function sayHello() {
    console.log("Hello from hoisted function");
}


console.log("\n4️⃣ FUNCTION EXPRESSION (NOT HOISTED)");

try {
    greet();   // will fail
} catch (err) {
    console.log("Error:", err.message);
}

var greet = function () {
    console.log("Hello from function expression");
};

greet(); // works after declaration


console.log("\n===== END =====");

