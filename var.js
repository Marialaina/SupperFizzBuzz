const quantity = null;
const name = null;
const bestTvShow = "Parks and Rec";
const age = 25; 
const city = "Denver";

const age2 = 4;
const city2 = "Edgewater";
const niceCity = true;


// console.log(bestTvShow);
// console.log(age);
// console.log(city);

// console.log(age2);
// console.log(city2);
// console.log(niceCity);

/* Using Data Types together */
// console.log(`${age2} ${city2}`);

/* WORKING WITH OPERATORS */

// console.log(12 / 3);

// console.log(12 / 5);

// console.log('Hello' + 'world' + '!');

// console.log(4 == 4);

// const age3 = 25;

// console.log(age3 > 21 && age3 < 65);

/* CONDITIONALS */

// const hoursofSleep = 7;

// if (hoursofSleep < 6) {
//     console.log('I feel fatigued');
// } else {
//     console.log('I have energy!');
// }

// let nextLocation = "My moms house";

// if (nextLocation === "My moms house") {
//     console.log(`I'm hungry`);
// } else if (nextLocation === "chick fil a") {
//     console.log('can i get a number 4');
// } else {
//     console.log (`I'll just cook something at home`);
// }

// const favoriteAnimal = 'dog';

// if (favoriteAnimal === 'dog') {
//     console.log(` my favorite animal is a ${favoriteAnimal} and his name is Charlie`);
// } else {
//     console.log('my favorite animal is a cat and her name is misa');
// }

// let a = 'a text string';
// let b = 9;
// let c = 3 * 5;
// let d = 'this' + 'and' + 'this';
// let e = true;
// let isNotGood4 = 10;
// const names = ['Charlie', 'Mari', 'Misa'];

// let newVar = 1000;

// let theta = 'This is a sentence';

// const string = `Don't know if I'm doing this right`;

// const isItRight = true;

// const rating = 10;

// console.log(`${string}... Is it right? ${isItRight}. You get a ${rating}!!!`);

const favoriteAnimal  = ['dog', 'panda', 'adrian']

const random  = ['Hey', 4 , 'hello', 5 , "hi", 3]

const names = ['gabe', 'mari','dom', 'aria', 'mom' , 'adrian', 'charlie', 'misa']

// console.log(names[2]);
// console.log(names[5 - 1]);

//removing the last object with something new
names.splice(7, 1 ,'vegtables');
// console.log(names);

names.splice(5, 1 , 4);
// console.log(names);

// console.log(names.length);
names.push('eucalyptus');
// console.log(names);



// console.log(12 + 53);
// console.log('string' + 10);
// console.log(13 + 4 * 6);
// console.log((13 + 4) * 6);
// console.log(-1 + 3);
// console.log(5.3333 / 2);
// console.log(0 / 2);
// console.log(2 / 0);
// console.log(5.3333 / 2);
// console.log(2 % 2);

let incrementMe = 50;
++incrementMe
++incrementMe

// console.log(incrementMe);

let decrementMe = 50;
--decrementMe
--decrementMe

// console.log(decrementMe);

// console.log(5 !== 5);

// console.log(2 !== '2');

// console.log(!true);
// console.log(!false);

// console.log("All the words" === "All the words");

// console.log("All the words" === "All the words!");

// console.log(2 === "2");
// console.log("true" === true);

// console.log(!true);
// console.log(!false);

// console.log('dog' < 'dog');
// console.log('dog' <= 'dog');

// var isFalse = false;

// if (isFalse) {
//     console.log('did it get here?');
// }

const func = () => {
    console.log("wow, it worked!");
}
// func();

const num = (num) => {
    newNum = num * 100;
    console.log(newNum);
}

// num(2);

const name2 = (name) => {
    console.log(`what is your name ${name}. k thank you.`);
}

// name2('marialaina');

const numbers = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if(num2 > num1 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

// numbers(900, 6, 7);

/*
If it's evenly divisible by 3, 5, and 7 print SuperFizzBuzz
If it's evenly divisible by 3 and 7 print SuperFizz
If it's evenly divisible by 5 and 7 print SuperBuzz
If it's evenly divisible by 3 and 5 print FizzBuzz
If it's evenly divisible by 3, print Fizz
If it's evenly divisible by 5, print Buzz
If it's evenly divisible by 7, print Super
Otherwise print just the number
*/

for (i = 0; i <= 1000; i++){
     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
         console.log('SuperFizzBuzz');
     } else if (i % 3 === 0 && i % 7 === 0) {
         console.log(`SuperFizz`);
     } else if (i % 5 === 0 && i % 7 === 0) {
         console.log(`SuperBuzz`);
     } else if (i % 3 === 0 && i % 5 === 0 ) {
         console.log(`FizzBuzz`)
     } else if (i % 3 === 0) {
         console.log(`Fizz`);
     } else if (i % 5 === 0) {
         console.log(`Buzz`);
     } else if (i % 7 === 0 ) {
         console.log(`Super`)
     } else {
         console.log(i);
     }

}

//   director = {
//     firstName: 'david',
//     lastName : 'lynch'
// };
// console.log(director);

