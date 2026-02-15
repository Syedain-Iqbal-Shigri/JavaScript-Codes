for (let i = 1; i <= 5; i++) {
  let s = "";

  for (let j = 1; j <= i; j++) {
    s += "*";
  }

  console.log(s);
}

console.log("=======================================");
for (let i = 5; i >= 1; i--) {
  let s = "";

  for (let j = 1; j <= i; j++) {
    s += "*";
  }

  console.log(s);
}

console.log("=======================================");
for (let i = 1; i <= 5; i++) {
  let s = "";

  for (let j = 1; j <= 5; j++) {
    s += "*";
  }

  console.log(s);
}


console.log("=======================================");
for (let i = 1; i <= 5; i++) {
  let s = "";

  for (let j = 1; j <= i; j++) {
    s += j;
  }

  console.log(s);
}


console.log("=======================================");
for (let i = 5; i >= 1; i--) {
  let s = "";

  for (let j = 1; j <= i; j++) {
    s += j;
  }

  console.log(s);
}

console.log("=======================================");
for (let i = 1; i <= 5; i++) {
  let s = "";

  for (let j = 1; j <= 5 - i; j++) {
    s += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    s += "*";
  }

  console.log(s);
}

console.log("=======================================");
for (let i = 0; i <= 10; i++) {
  let s = "";

  for (let j = 0; j <= 20; j++) {

    let x = i - 5;
    let y = (j - 10) / 2;   // width correction

    if (x * x + y * y <= 25) {
      s += "*";
    } else {
      s += " ";
    }

  }

  console.log(s);
}
