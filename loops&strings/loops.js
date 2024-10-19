///LOOPS

//FOR LOOP

for(let i=0;i<3;i++){
    if(i%2==0){
    console.log(i , " it is multiple of 2");}
    else{
        console.log(i , "it is not multiple of  2.");
    }
}
// for(let j =1;j>=0;j++){         //   INFINITE LOOP
//     console.og("j = " , j);
// } 



//WHILE LOOP
let n =5
while(n>0){
    console.log(1+n);
    n--;
}

//DO-WHILE LOOP
console.log("implementation od do-while loop");
let k =0;
do{
    console.log(k*2);
    k++;
}while(k<5);


// FOR-OF LOOP    (used for strings and arrays)
let a= "aparna";
 n=1;
for(let val of a){
    console.log(val +n);
    n++;
}

// FOR-IN LOOPS (used for objects)

let obj= {
    name: "aparna",
    age: 18,
    place: "delhi",
};

for(let val in obj){
    console.log(val , obj[val]);
}

// let num= 5;
// let input= prompt("guess the number: ");
// while(input!=num){
//     input= prompt("you entered wrong number, guess again ");

// }

// alert("congo! you won the game.");