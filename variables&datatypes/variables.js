console.log("javascript practice started");

//variables- declaration

age= 25; //age is variable and 25 is its value;
console.log(age);
 console.log(age+2);

name= "Mins Dey";
price= 123.45;
console.log(name, price);

x=  null;   //null value;
console.log(x);

y= undefined; //undefined value;
console.log(y);


//boolean variable

isFollow= true;
console.log(isFollow);

ifNot= false;
console.log(ifNot);


//Javascript is a dynamically typed language. javascript detects the datatype during the runtime itself that which variable is storing what type of data.



//let, const & var KEYWORDS

var name= "MINS_DEY"; //variable can be redeclarative and updated. a global scope variable.
console.log(name);

let Fname= "MINSs DEY"; ///variable cannot be redeclarattive but can be updated. a block scope variable.
console.log(Fname);

const FULLname= "MINS DeEY"; //variable cannot be re-declared or updated. a block scope variable.
console.log(FULLname);
{
    let a=5;
    console.log(a);
}
//these are two blocks that are created by using parenthesis.
{
    let a=17829;
    console.log(a);
}