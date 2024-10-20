//FUNCTIONS

//USER-DEFINED FUNCTIONS
//IN-BUILT FUNCTIONS

console.log("hello"); //log() is a inbuilt function


console.log("abc".toUpperCase());

//non-parameterized

function myfunc(){
    console.log("tried to perform function");
}

myfunc();



// parameterized with return

function np(input){
    let val= input**3;
    return val;
}
 
let input = prompt("enter the number:");
let result= np(input);
console.log(result);



//two  parameter passed

function ns(num1, num2){

    //here val is a local variable.
    let val= num1**num2;
    return val;
    //any code line written after return will not run.

}

let num1 = prompt("enter the number:");
let num2 = prompt("enter the number:");
let rest= ns(num1, num2);
console.log(rest);


//ARROW FUNCTIONS  (part of modern javascript)  


const funcname = (a,b) => {
    console.log("sum is " , (3+4));
};

funcname(3,4);   //arrow functions are prefered for smalll code functions



function str(str1){
    let count=0;
    for(let val of str1){
        if(val=='a'||val=='e'||val=='i'||val=='o'||val=='u'){
            count++;
        }
    
    }
    console.log("no. of vowels are " , count);
}

let str1= "aparna";
str(str1);


const strr= (str2)=> {
    let count=0;
    for(let val of str2){
        if(val=='a'||val=='e'||val=='i'||val=='o'||val=='u'){
            count++;
        }
        
    }
    console.log("no. of vowels are " , count);
}

let str2= "pandey";
strr(str2);