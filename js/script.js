'use strict';

/* STRICT MODE */
// 'use strict';

// PROBLEM 1:
// "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [];

// // 1) Understanding the problem
// // - What is temp amplitude? Answer: difference between highest and lowest temp
// // - How to compute max and min temperatures?
// // - What's a sensor error? And what to do?

// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max (amplitude) and return it

// function calcTempAmplitude(temps) {
//     let maxValue = temps[0];
//     let minValue = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const currValue = temps[i];
//         if (typeof currValue !== 'number') continue;
//         if (currValue > maxValue) {
//             maxValue = currValue;
//         }
//         if (currValue < minValue) {
//             minValue = currValue;
//         }
//     }
//     const amplitude = maxValue - minValue;
//     console.log(minValue, maxValue);
//     console.log(amplitude);
// }
// // calcTempAmplitude([3, 7, 4, 2, 23]);
// calcTempAmplitude(temperatures);

// // PROBLEM 2:
// // Function should now receive 2 arrays of temperatures

// // 1) Understanding the problem
// // - With 2 arrays should we implement functionality twice? NO! Just merge 2 arrays

// // 2) Breaking up into sub-problems
// // - Merge 2 arrays

// function calcTempAmplitudeNew(t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);
//     let maxValue = temps[0];
//     let minValue = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const currValue = temps[i];
//         if (typeof currValue !== 'number') continue;
//         if (currValue > maxValue) {
//             maxValue = currValue;
//         }
//         if (currValue < minValue) {
//             minValue = currValue;
//         }
//     }
//     const amplitudeNew = maxValue - minValue;
//     console.log(minValue, maxValue);
//     console.log(amplitudeNew);
// }

// calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// // calcTempAmplitudeNew(temperatures);

/* **************************************************** */
/* DEBUGGING */
// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         // value: Number(prompt('Degrees celcius:')),
//         value: 10,
//     };
//     const kelvin = measurement.value + 273;
//     return kelvin;
// };

// console.log(measureKelvin());

/* **************************************************** */
/* DEBUGGING */
// Using a Debugger
// function calcTempAmplitudeBug(t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);
//     let maxValue = temps[0];
//     let minValue = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const currValue = temps[i];
//         if (typeof currValue !== 'number') continue;
//         if (currValue > maxValue) {
//             maxValue = currValue;
//         }
//         if (currValue < minValue) {
//             minValue = currValue;
//         }
//     }
//     const amplitudeBug = maxValue - minValue;
//     console.log(minValue, maxValue);
//     console.log(amplitudeBug);
// }

// calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

/* **************************************************** */
/* CHALLENGE */
// 1) Understanding the problem
// - Array transformed to string, separated by " ... "
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform arra into string
// - Transform each element to string with °C
// - Strings need to contain day (index + 1)
// - Add ... between elements and start and end of string

const maxTemps1 = [17, 21, 23];
const maxTemps2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
    const degrees = ['... '];
    for (let i = 0; i < arr.length; i++) {
        let message = `${arr[i]}°C in ${i + 1} days ... `;
        degrees.push(message);
        // console.log(message);
    }
    console.log(degrees.join(''));
};
printForecast(maxTemps1);
printForecast(maxTemps2);
