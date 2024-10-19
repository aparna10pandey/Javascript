//LOGICAL OPERATOR

//&&
//||
//!

a = 6;
 b = 5;

console.log("a && b = " , a && b); //in case we simply do this without any condition then it would result the value of b .which is no right side checking that both are non zero no.

let cond1 = a < b;
let cond2 = a === 6;
console.log("cond1 && cond2 = ", cond1 && cond2);

cond1 = a > b;
cond2 = a === 6;
console.log("cond1 && cond2 = ", cond1 && cond2);

cond1 = a < b;
cond2 = a === 6;
console.log("cond1 || cond2 = ", cond1 || cond2);

cond1 = a < b;
cond2 = a === 6;
console.log("!(cond1 && cond2) = ", !(cond1 && cond2));