console.log("========== ARRAY ...01 ==========");

let numbers = [12, 5, 8, 130, 44, 20, 7];

map
numbers.map(x => {
    console.log(x * 2);
});

forEach
numbers.forEach(x => {
    console.log(`value is ${x}`);
});

// filter
let greaterThan10 = numbers.filter(x => x > 10);
console.log("greater than 10:", greaterThan10);

// some
let hasGreaterThan100 = numbers.some(x => x > 100);
console.log("any > 100:", hasGreaterThan100);

// every
let allPositive = numbers.every(x => x > 0);
console.log("all positive:", allPositive);

// reduce
let totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`sum of array is ${totalSum}`);

// sort
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log("sorted:", sortedNumbers);



console.log("========== PART 2 CAR DESTRUCTURING ==========");

let cars = ["Tesla", "BMW", "Civic", "Honda", "Corolla", "TX", "TZ"];

let [car1, car2, car3, ...remainingCars] = cars;

console.log("first car:", car1);
console.log("third car:", car3);
console.log("remaining cars:", remainingCars);



console.log("========== PART 3 OBJECT PRACTICE ==========");

let employee = {
    name: "Ali",
    age: 28,
    salary: 50000,
    address: {
        city: "Lahore",
        zip: 54000
    }
};

console.log(employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);
console.log(employee.address.city);

// destructuring
let { name, salary } = employee;

console.log("destructured name:", name);
console.log("destructured salary:", salary);



console.log("========== PART 4 PEOPLE ARRAY ==========");

let people = [
    {
        name: "A",
        age: 20,
        getInfo: function () {
            return `Name: ${this.name} | Age: ${this.age}`;
        }
    },
    {
        name: "B",
        age: 25,
        getInfo: function () {
            return `Name: ${this.name} | Age: ${this.age}`;
        }
    },
    {
        name: "C",
        age: 30,
        getInfo: function () {
            return `Name: ${this.name} | Age: ${this.age}`;
        }
    }
];

people.forEach(person => {
    console.log(person.getInfo());
});



console.log("========== PART 5 STUDENT MARKSHEET ==========");

let students = [
    {
        name: "Sydain",
        marks: { math: 85, english: 90, science: 80 },
        generateMarksheet: function () {
            let total = this.marks.math + this.marks.english + this.marks.science;
            let max = 300;
            let percentage = (total / max) * 100;

            return `Name: ${this.name} | Total: ${max} | Obtained: ${total} | Percentage: ${percentage.toFixed(2)}%`;
        }
    },
    {
        name: "Muntazr",
        marks: { math: 90, english: 85, science: 80 },
        generateMarksheet: function () {
            let total = this.marks.math + this.marks.english + this.marks.science;
            let max = 300;
            let percentage = (total / max) * 100;

            return `Name: ${this.name} | Total: ${max} | Obtained: ${total} | Percentage: ${percentage.toFixed(2)}%`;
        }
    },
    {
        name: "Mutaba",
        marks: { math: 90, english: 85, science: 80 },
        generateMarksheet: function () {
            let total = this.marks.math + this.marks.english + this.marks.science;
            let max = 300;
            let percentage = (total / max) * 100;

            return `Name: ${this.name} | Total: ${max} | Obtained: ${total} | Percentage: ${percentage.toFixed(2)}%`;
        }
    }
];

students.forEach(student => {
    console.log(student.generateMarksheet());
});



console.log("========== CLASS AVERAGE ==========");

let classTotalPercentage = students.reduce((acc, student) => {
    let total = student.marks.math + student.marks.english + student.marks.science;
    let percentage = (total / 300) * 100;
    return acc + percentage;
}, 0);

let classAverage = classTotalPercentage / students.length;

console.log(`Class Average Percentage: ${classAverage.toFixed(2)}%`);