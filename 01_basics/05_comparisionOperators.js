// Comparision like ">, <, >= and <= etc." and equality check "==" are 2 different things cause they work differently. Comparision convert datatypes but equality don't.

/*
console.log(2 > 1); // true 
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
*/

/*
console.log("2" > 1); // true 
console.log("02" > 1); // true
*/
// Avoid below 2 whole multiline comments of comparision:

// 1) :

/*
console.log(null > 0); // false
console.log(null == 0); //false // cause equality checker "==" doesn't convert null into 0.
console.log(null >= 0); //true // cause comparision operators like ">, <, >= and <= etc." convert null into number 
*/

// 2) :

/*
console.log(undefined == 0); // false 
console.log(undefined > 0); // false
console.log(undefined < 0); // false
*/

// ===

// console.log("2" == 1); //true cause not checking the datatype 
// console.log("2" === 1); // false cause checking the datatype too.