let math=80;
let science=90;
let english=70;
let urdu=60;
let computer=95;
let totalMarks=500;
let obtainedMarks=math+science+english+urdu+computer;
let percentage=(obtainedMarks/totalMarks)*100;
console.log(percentage + " %");
if(percentage>=90 && percentage<=100){
    console.log("Grade A+");
}else if(percentage>=80 && percentage<=90){
    console.log("Grade A");
}else if(percentage>=70 && percentage<=80){
    console.log("Grade B");
}else if(percentage>=60 && percentage<=70){
    console.log("Grade C");
}else if(percentage>=50 && percentage<=60){
    console.log("Grade D");
}
else if(percentage>=40 && percentage<=50){
    console.log("Grade D");
}
else if(percentage>=1 && percentage<=39){
    console.log("Fail");
}
else{
    console.log("Technical issue please check the number");
}

