//Test 1

let colors = ["red", "blue", "green", "yellow"];
console.log(colors[1]);

//Test 2
let age = 19;
console.log("My age is " + age);

//Test 3
let num = 30;

if(num > 10 && num < 50){
    console.log("The number is within range");
} else {
    console.log("The number is out of range");
}

//Test 4
let char = 'a';

if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
    console.log("The letter is a vowel");
} else {
    console.log("The letter is a consonant");
}

//Test 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = numbers[0];
let min = numbers[0];

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
    if(numbers[i] < min){
        min = numbers[i];
    }
}

console.log("Maximum: ", max);
console.log("Minimum: ", min);