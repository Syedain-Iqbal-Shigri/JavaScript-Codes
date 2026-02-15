
function calculator(num1, num2, operator) {

    switch (operator) {

        case "+":
            answer = num1 + num2;
            console.log("Addition");
            break;

        case "-":
            answer = num1 - num2;
            console.log("Subtraction");
            break;

        case "*":
            answer = num1 * num2;
            console.log("Multiplication");
            break;

        case "/":
            answer = num1 / num2;
            console.log("Division");
            break;

        default:
            console.log("Invalid Operator");
            return;
    }

    console.log("Num1 = " + num1);
    console.log("Num2 = " + num2);
    console.log("Operator = " + operator);
    console.log("Answer = " + answer);
}


console.log("===============|");
calculator(10, 5, "+");

console.log("===============|");
calculator(20, 4, "*");

console.log("===============|");
calculator(10, 5, "/")

console.log("===============|");
calculator(10, 15, "-")

console.log("===============|");