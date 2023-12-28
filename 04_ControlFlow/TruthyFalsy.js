// // Course Video Code Copied:

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// // falsy values

// // false, 0, -0, BigInt 0n, "", null, undefined, NaN


// //truthy values: all the values except above mentioned falsy values are truthy values. Below are just those truthy values which sometimes shock people that how they are returning true..

// // "0", 'false', " ", [], {}, function(){}

// // if (userEmail.length === 0)// for checking whether array has any value or not {
// //     console.log("Array is empty");
// // }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0)// for checking whether object has any value or not {
//     console.log("Object is empty");
// }

// // Nullish Coalescing Operator (??): // for handeling null and undefined.

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20 // takes the 1st value.



// console.log(val1);

// // Terniary Operator

// // condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
