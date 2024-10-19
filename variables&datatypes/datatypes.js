 //DATATYPES


 //PRIMITIVE DATATYPES->
 //1 Number
 //2 String
 //3 Boolean
 //4 Undefined
 //5 Null
 //6 BigInt 
 //7 Symbol

//NON-PRIMITVE DATATYPES
//1 Object (a collection of values in form of (key: value ))->
//2 Arrays
//3 Functions

 //to check the datatype we can use typeof keyword for it

 a=24;
 console.log(typeof(a));

 let name= "mins";
 console.log(typeof(name));
 let x;
 console.log(typeof(x));

 let y = false;
 console.log(typeof(y));

 let z= null;
 console.log(typeof(z)); //this would result object (null depicts absence of object);

 let t= BigInt(3457359385);
 console.log(t);
 console.log(typeof(t));

let w = Symbol("👍");
console.log(w);
console.log(typeof(w));



//OBJECT
const student={
    fullname: "aparna",
    age: 19,
    cgpa: 9.2,
    isPass: true,
};
console.log(student);


//two ways of accesing particuular data of a object
student.fullname;
student["cgpa"];
//to update value of any key of the object do
student["isPass"]= false;
console.log(student.isPass);

//PRACTICE 1
//object creation of a pen for sell
const pen={
    title: "ball pen",
    rating: 4,
    offer: 5,
    prize: 270,

};

let profile ={
    username:[ "mins_dey", 45, "system"],
    follower: 234,
    following: 231,
    description: "btech student from sharda university",
    occupation: "student",
    posts: 134,
};
console.log(profile.username[1]); //we can store an array as value of a key.