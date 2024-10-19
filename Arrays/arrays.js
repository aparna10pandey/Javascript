//ARRAYS

let arr= [1,2,3,4,];
console.log(arr);

let arr2= [1,2,"aparna" , 4.5 , false];
console.log(arr2);
//array is itself a object.


//looping over array

for(let i=0;i<5;i++){
    console.log(arr2[i]);
}

//we can also use method length for the same

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//for-of

for(let val of arr2){
    console.log(`arr[${val}]`);
}

let marks= [23,45,78,96,34,23];
let sum=0;
for(let j=0; j<arr.length;j++){
    sum= sum+marks[j];
}
console.log(`average of all marks ${sum/marks.length}`);




let prize= [250,645,300,900,50];
for(let f=0;f<prize.length;f++){
    prize[f]= prize[f]-(prize[f]*0.1);
}
console.log(prize);

//ARRAYS METHODS

//PUSH
//POP
//toString

prize.push(879)
console.log(prize);

prize.pop();
console.log(prize);


console.log(prize.toString());


//concat()
//unshift() , add ellement at index 0
//shift() , delete element of index 0
prize= [250,645,300,900,50];
marks= [23,45,78,96,34,23];

console.log(prize.concat(marks));

marks.unshift(100000000)
console.log(marks);

marks.shift();
console.log(marks);

//slice() , returns a piece of the array
//splice() , change original arr(add, remove , replace);


console.log(marks.slice(2,4));
prize.splice(1,2,100,200);
console.log(prize);