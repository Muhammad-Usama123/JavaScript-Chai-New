// const abc = [a, b, c]
// const def = [d, e, f]

// abc.push(def) // it will push def array into abc array.
// console.log(abc) // it will print abc array with def array values pushed under it [a, b, c, [d, e, f]] // now as we can see that whole def array pushed inside abc array as a single element at 3rd index. now for accessing values of def array inside abc array we can access like this (console.log(abc[3][1])) // it will print e. // but doing this is not recommended but we can do this if necessary. // changes the original array. 

// const abcdef = abc.concat(def) // it will concat def array with abc array.
// console.log(abc) // it will print abc array concatinated with def array [a, b, c, d, e, f] // returns a new array doesn't change the original arrays.// but instead of using this array.concat method we can actually do the same thing with spread operator and it is more easy and preferred way like below example:

// const abcdef1 = [...abc, ...def] // it will also concat values like above example but instead of using array.concat() method we simply used spread operator(...) and this is more easy and preferred way.
// console.log(abcdef1) // it will print [a, b, c, d, e, f] in console.

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const new_another_array = another_array.flat(3) // it will convert this array with subarrays into a single array like [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] // we can give inside parameter bracket infinity value too if we want to convert into a single array like we already did by using 3.

// console.log(Array.isArray("Haris")) // it will return false cause "Haris" is a string not array
// console.log(Array.from("Haris")) // for converting other datatypes values into array specially in data scrapping, whenever we select any data from any web page so this data comes in some other type like in the form of node list or in object form or in string form but we want array cause we normally can loop on arrays maybe it is recommended to loop mostly on arrays when possible.

// console.log(Array.from({name: "Haris"})) // interesting case for interviews // gave us an empty array. // maybe cause we explicitly have to tell it to make array of keys or array of values. // so whenever Array.from() method failed to convert our given datatype values into array it returns an empty array. // so check

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3)) // we can also use this instead of Array.from() for making a new array of given variable's values in the parameter's bracket of this Array.of() method. // we can also pass different arrays inside parameter bracket and maybe this method will convert all those arrays into a single array.

