//forEach loop in array


//arr.forEach(callbackfunction)
//callbackFunction: it is a function to execute for each element in the array

///which means we can pass function as parameter 

//a callback function is a function passed as  an arguement to another function


let arr= [1,2,3,4];
arr.forEach(function printvalue(val)
{
    console.log(val);
})

arr.forEach((val, idx , arr)=>
{
    console.log(val , idx , arr);
})


//parameters of callback function ---- value , idx ,item(array itself)

//higher order function or methods are forEach loop , can pass function as parameter and can also return it.

//method 1

arr.forEach(function square(val){
    console.log(val**2);
})

//method 2 

let calsq= (val)=>{
    console.log(val*val);
};
arr.forEach(calsq);

// MAP method

//creates a new array with the results of some operation. the value its callback returns are used to form a new array

// arr.map(callbackfnx(value, index, array));


let newarr= arr.map((val)=>{
    return val;
})
console.log(newarr);

//FILTER method

//creates a new array of elements that give true for a condition/filter. 



let newArr= arr.filter((val)=>{
    return val%2==0;
})
console.log(newArr);

//REDUCE method

//performs some  operations & reducces the to a single value. itt returns that single value.
const initial =0;
const sum1= arr.reduce((accumulator , currentvalue)=> accumulator +currentvalue, initial);
console.log(sum1); //taking the inital value is not mandatory


const ssum1= arr.reduce((prev, curr)=> {return prev>curr? prev:curr}
);
console.log(ssum1); ///returns the largest

const ssuum1= arr.reduce((prev, curr)=> {return prev < curr? prev:curr}
);
console.log(ssuum1);





//ques 1
let marks = [98, 90,87 , 45, 91, ,67];
let maxscores= marks.filter((val)=>{
    return(val>=90);
})

console.log(maxscores);


//ques 2
let n = prompt("enter a number: ");
let arr1=[];
for(let i=1;i<=n;i++){
    arr1[i-1]=i;
}
console.log(arr1);

let sum3= arr1.reduce((prev, curr)=>{
    return prev+curr;
})
console.log(sum3);


let mul= arr1.reduce((prev, curr)=>{
    return prev*curr;
})
console.log(mul);
