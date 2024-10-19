//CONDITIONAL STATEMENT

// if statement

let age= 25;

if(age>18){
    console.log("can drive the car");
}
age=3;
if(age<18){
    console.log("cannot drive");
}

let mode= "dark";
let color;

if(mode== "dark"){
    color= "black";

}
if(mode=="light"){
    color= "white";
}
console.log(color);


// if-else statement----------------------------------------------------


mode= "light";
color;

if(mode== "dark"){
    color= "black";

}
else{
    color= "white";
}
console.log(color);


// else-if statement-----------------------------------------------------------
age=45
if(age<18){
    console.log("junior");
}else if(age>60){
    console.log("senior");
}else{
    console.log("middle");
}


//TERNARY OPERATORS ------------------------------------------------------

// condition? true output:fasle output
age= 12;
let result= age>18? "adult":"notadult";

console.log(result);
age= 25;
age>18? console.log("adult"):console.log("notadult");

//switch statment is also a conditional statement


//ques1: get uuser to input a number using promt . check if the number is a multiple of 5 or not.

let number = prompt("enter the number: ");
if(number%5==0){
    console.log(number , " is multiple of 5.")
}else{
    console.log("it's not.")
}