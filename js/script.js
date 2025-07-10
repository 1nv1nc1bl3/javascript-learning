'use strict';

/* STRICT MODE */
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

/* ************************** */
/* FUNCTIONS */
// Functions are values, so... they can be stored in variables
// function logger() {
//     console.log('My name is Jonas');
// }

// // calling  / running / invoking the function
// logger();

// function fruitProcessor(apples, oranges) /* parameters*/ {
//     //     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0); // arguments
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function declaration (they can be called BEFORE they are defined in the code)
// function calcAge1(birthYear) {
//     return 2053 - birthYear;
// }
// const age1 = calcAge1(1972);

// // function expression (expressions produce values)
// const calcAge2 = function (birthYear) {
//     return 2053 - birthYear;
// };
// const age2 = calcAge2(1972);

// console.log(age1, age2);

/* ************************** */
/* ARROW FUNCTIONS */

// Arrow function
// const calcAge3 = (birthYear) => 2025 - birthYear;
// const age3 = calcAge3(1972);
// console.log(age3);

// const yearsUntilRetire = (birthYear, firstName) => {
//     const year = new Date().getFullYear();
//     const age = year - birthYear;
//     const retirement = 65 - age;
//     const future = retirement + year;
//     return `The year is ${year}, so ${firstName} who was born in ${birthYear} retires in ${retirement} years in the year ${future}.`;
// };
// console.log(yearsUntilRetire(1972, 'Alkis'));

/* ************************** */
/* FUNCTIONS CALLING OTHER FUNCTIONS */
// function fruitCutter(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) /* parameters*/ {
//     const applePieces = fruitCutter(apples);
//     const orangePieces = fruitCutter(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

/* ************************** */
/* CODING Exercise Challenge #1 */
// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// // console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// };
// checkWinner(scoreDolphins, scoreKoalas);

/* **************************************************** */
/* ARRAYS */
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// const year = new Array(1991, 1984, 2008, 2020);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Pattinson', 20, 'teacher', friends];
// console.log(jonas);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age10 = calcAge(years[0]);
// const age11 = calcAge(years[1]);
// const age14 = calcAge(years[years.length - 1]);
// console.log(age10, age11, age14);

// const ages = [
//     calcAge(years[0]),
//     calcAge(years[1]),
//     calcAge(years[years.length - 1]),
// ];
// console.log(ages);

/* **************************************************** */
/* ARRAY METHODS */
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // Add elements
// friends.push('Jay'); // adds element at the end + stores array's length
// console.log(friends);

// friends.unshift('John'); // adds element at the start + stores array's length
// console.log(friends);

// // Remove elements
// friends.pop(); // removes last element + returns removed element
// console.log(friends);

// friends.shift(); // removes first element + returns removed element
// console.log(friends);

// console.log(friends.indexOf('Steven')); // shows index number of requested element
// console.log(friends.indexOf('Bob')); // if there isn't such an element it returns -1

// console.log(friends.includes('Steven')); // true: if there is
// console.log(friends.includes('Bob')); // false: if there isn't

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

// // Exercise 6: Chalenge #2
// const calcTip = function (bill) {
//     let tip =
//         bill >= 50 && bill <= 300 ? Number(bill * 0.15) : Number(bill * 0.2);
//     let total = Number(bill + tip);
//     return tip;
// };

// const bills = [125, 555, 44];

// const tips = [];
// const totals = [];

// tips.push(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// totals.push(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

// console.log(bills, tips, totals);

/* **************************************************** */
/* OBJECTS */
// const jonas = {
//     // firstName is a property of the Object
//     firstName: 'Jonas',
//     lastName: 'Shmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(jonas);

// console.log(jonas.lastName);

// // Challenge
// console.log(
//     `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

/* **************************************************** */
/* OBJECT METHODS */
const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //     calcAge: function (birthYear) {
    //         return 2037 - birthYear;
    //     },

    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    },

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
            this.job
        } and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
        return this.summary;
    },
};

// console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
