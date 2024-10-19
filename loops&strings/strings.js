//STRINGS

//CREATION OF STRINGS

let str = "the day started well.";

//STRING LENGTH

let len1= str.length;
console.log(len1);

// STRING INDICES
 
console.log(str[8]);

//TEMPLATE LITERALS

let sentence= `javascript is dynamically typed language.`;
console.log(sentence);

 a=9;
console.log(`the value of a is ${a}`); //STRING INTERPOLATION - TO CREATE A STRING BY DOING SUBSTITUTION OF PLACEHOLDERS


//ESCAPE CHARACTERS ARE COUNT AS SINGLE CHARACTER WHILE COUNTING LENGTH THOUGH IT OCCUPIES TWO SYMBOLS

//STRING METHODS

let line= "aparna pandey";
console.log(line.toUpperCase());
console.log(line.trim()) //removes white space of starting of string and endof string

console.log(line.slice(0,3));

let line2 = " is working.";
console.log(line.concat(line2));

console.log(line.replace("a", "z"));

console.log(line.charAt(3));



//example

let name= prompt("enter your name:");

console.log(`@${name}${ name.length}`)