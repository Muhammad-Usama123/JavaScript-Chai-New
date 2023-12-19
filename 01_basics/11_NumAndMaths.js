// const score = 400 // javascript automatically detected that this variable of number type.

// const balance = new Number(100) // we explicitly told javascript by using number object constructor that this variable is of number type.

// console.log(score); // it will print 400 in console
// console.log(balance); // it will print [Number: 100] in console.

// console.log(balance.toString()); // it will convert the number type value into string.
// console.log(balance.toFixed(2)); // it will print 100.00 in console. // mostly used in ecommerce apps for shortening the value after point. 

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // it will print 123.9 in console.

// const hundreds = 1000000

// console.log(otherNumber.toLocaleString()); // it will print 1,000,000 in console. // USA standard.
// console.log(otherNumber.toLocaleString(en-IN)); // it will print 1,000,000 in console. // Indian standard.


// +++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math) // it will print "Object [Math] {}" in console. // it is an object with properties. // if we will write this line in browser console we'll see all the methods and properties available for Math library.
// console.log(Math.abs(-4)) // it will print 4 in console. // .abs() convert negative value that we provide inside parameter bracket in positive.
// console.log(Math.round(4.3)) // it will print 4 in console. // .round() gives the round of value.
// console.log(Math.ceil(4.2)) // it will print 5 in console. // .ceil() gives the highest round of value.
// console.log(Math.floor(4.9)) // it will print 5 in console. // .floor() gives the lowest round of value.
// console.log(Math.min(4, 3, 6, 8)) // it will print 4 in console. // .min() gives the minimum value.
// console.log(Math.max(4, 3, 6, 8)) // it will print 8 in console. // .max() gives the maximum value.

// Most Important Method of Math library:
// console.log(Math.random()) // it will print random value from between 0 and 1 at every execution different value. 
// console.log(Math.random()*10) // it will print random value from between 0 and 10 at every execution different value.// but if we want to print values from between 1 and 10 and not from between 0 and 10 so the solution is in next console.log below
// console.log(Math.floor((Math.random()*10) + 1)) // it will print random value from between 1 and 10 at every execution different value.

// Generic Syntax Formula for the concept of line 33 and 34:

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min) // it will print random value from between 10 and 20 at every execution different value. // we can set different min and max value according to our requirements means we can change the range between which we want random numbers.

