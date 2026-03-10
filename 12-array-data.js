console.log("=============people================");

let person1 = {
    name: "syedain",
    fathername: "miqbal",
    class: "2nd year",
    student: "pscs"
};

let person2 = {
    name: "ali",
    fathername: "zeeshan",
    class: "2nd year",
    student: "army public school"
};

let person3 = {
    name: "muhammad",
    fathername: "hussain",
    class: "2nd year",
    student: "degree college"
};

// Array of objects
let people = [person1, person2, person3];

// map function
people.map(function(person) {
    console.log(person.fathername);
});