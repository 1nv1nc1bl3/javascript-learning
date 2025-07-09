let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');
// console.log(40 + 8 + 23 - 10);

// let firstName = 'Alkis';
// console.log(firstName);

// let age = 30;
// age = 31;

// const birthYear = 1991;

/* ************************************ */

/* BMI EXERCISE */
// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

// const BMIMark = Math.round(markMass / (markHeight * markHeight));
// const BMIJohn = Math.round(johnMass / (johnHeight * johnHeight));
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark);
// console.log(BMIJohn);
// console.log(markHigherBMI);

/* ************************************ */

/* TEMPLATE LITERALS */
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
// const age = year - birthYear;

// const jonas =
//     "I'm " +
//     firstName +
//     ', a ' +
//     (year - birthYear) +
//     ' years old ' +
//     job +
//     '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${age} years old ${job}!`;
// console.log(jonasNew);

/* ************************************ */

/* IF/ELSE */
// const age = 15;
// let word;
// // const isOldEnough = age >= 18;
// const remainYears = 18 - age;
// if (remainYears === 1) {
//     word = 'year';
// } else {
//     word = 'years';
// }

// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     console.log(`Sarah has to wait for ${18 - age} ${word}.`);
// }

/* ************************************ */

/* GLOBAL VARIABLES */
// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

/* ************************************ */

/* TYPE CONVERSION */
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas')); // NaN = not a number / invalid number

// console.log(typeof NaN); // NaN is a number

// console.log(String(23), 23);

/* ************************************ */

/* TYPE COERSION */
// // number is converted to string (plus operator)
// console.log('I am ' + 23 + ' years old');

// // strings are converted to numbers (minus operator)
// console.log('23' - '10' - 3);

// // strings are converted to numbers (multiplier operator)
// console.log('23' * '2');

// // strings are converted to numbers (division operator)
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

/* ************************************ */

/* TRUTHY & FALSY */
// 5 falsy values: 0, ' ', undefined, null, NaN
// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Jonas')); // true
// console.log(Boolean({})); // true
// console.log(Boolean('')); // false

// const money = 0; // when 'money' is 0 (falsy value), it is converted to FALSE
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     // so this block of code is executed
//     console.log('You should get a job!');
// }

// let height; // 'height' is undefined (falsy value)
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     // so this block of code is executed
//     console.log('Height is UNDEFINED');
// }

/* ************************************ */

/* EQUALITY OPERATORS */
// === when both sides are exactly the same (strict equality operator)
// const age = 18;
// if (age === 18) {
//     console.log('You just became an adult (strict)');
// }
// // == (loose equality operator)
// const text = '18';
// if (age == text) console.log('You just became an adult (loose)');

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//     console.log('7 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7');
// }

/* ************************************ */

/* BOOLEAN LOGIC */
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

/* ************************************ */

/* SWITCH STATEMENT */
// const day = prompt('What day is it?');

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day!');
// }

/* ************************************ */

/* STATEMENTS & EXPRESSIONS */
// Statements don't produce a value. All they do is declare variables, or perform some actions. Whatever ends with a semi-colon is a statement.
// Expressions produce values

/* ************************************ */

/* TERNARY */
// const age = 17;
// // age >= 18
// //     ? console.log('I like to drink wine 🍷')
// //     : console.log('I like to drink water 💦');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💦';
// console.log(`I like to drink ${drink}`);

const bill = Number(prompt('How much is the bill?'));
let tip = bill >= 50 && bill <= 300 ? Number(bill * 0.15) : Number(bill * 0.2);
let total = Number(bill + tip);
console.log(
    `The bill was ${bill}, the tip was ${tip} and the total value ${total}`
);
