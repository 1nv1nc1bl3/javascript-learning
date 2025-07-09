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

function calcAge1(birthYear) {
    return 2053 - birthYear;
}
const age1 = calcAge1(1972);

// function expression (expressions produce values)

const calcAge2 = function (birthYear) {
    return 2053 - birthYear;
};
const age2 = calcAge2(1972);

console.log(age1, age2);

/* ************************** */

/* ************************** */

/* ************************** */
