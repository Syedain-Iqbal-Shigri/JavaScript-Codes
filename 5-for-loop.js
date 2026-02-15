// for loop
for(i=0; i<=10; i++) {
    console.log(i);
    }

    console.log("============================================");
//reverse for loop
for(i=10; i>=1; i--) {
    console.log(i);
    i=i-1;
}

console.log("============================================");
// even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("============================================");
// odd numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  } 
} 

console.log("============================================");
// continue statement
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log("============================================");
console.log("break statement");
 
for (let i = 1; i <= 10; i++) {
  if (i === 5) 
    break;
  }   