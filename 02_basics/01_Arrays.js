// Arrays:

    // Array is an object. // Array is a collection of multiple items in a single variable name.// JavaScript arrays are resizeable means after declaration we can add more elements inside an array. Array elements can be of mix datatypes like objects, strings, booleans, numbers, even arrays etc. etc.. The items inside an array are called elements. Arrays can be of shallow copy of an object and deep copy of an object. Shallow copy of an object means whatever we change in copy also gets changed in original array (properties share the same references) and deep copy means whatever we change in copy doesn't gets changed in original array (properties do not share the same references). When we declare array in browser console we get .length property and prototype array in which we get array methods but in that prototype we'll get 1 more prototype array and inside that we'll also get some other methods like getters, setters etc. etc., details will be discussed later maybe not in this video.

// const myArr = [0, 1, 2, 3, 4, 5]
// const abc = ["abc", "def"]

// const myArr2 = new Array(1, 2, 3, 4) // another way of declaring arrays. declaration through array constructor object.

// console.log(myArr[1]) // 1 of the way to access array elements.

// myArr.push(6) // it will add an element "6" inside myArr variable array at the end of the array.
// myArr.pop() // it will remove an element from inside myArr variable array from the end of the array. // takes no argument.

// myArr.unshift(9) // it will add an element inside myArr variable array at the start of the array. // but the problem with this method is because the value adds at the start of the array, all the existing values in that get shifted from there original position, so optimization wise this is not good method but we can use this when necessarily needed. but there areb some other ways like using array values in ascending or descending order etc etc. for the optimization of this unshift method.

//myArr.shift() // removes an element from the starting of array. // Doesn't take any argument.

//myArr.includes(9) // it will return false cause this value doesn't exist in our array.
//myArr.indexOf(9) // it will return -1 cause this value doesn't exist in our array.
//myArr.indexOf(19) // it will return -1 cause this value doesn't exist in our array.
//myArr.indexOf(3) // it will return 3 cause this value exists at 3rd index in our array.

// const newArr = myArr.join() // it will add all the elements of array into a string with all the element values inside that single string separated by given separator.// return value "0,1,2,3,4,5" // This method get used lots of times.

// Difference between array.slice And array.splice() Methods:

// console.log("A", myArr)

// const myn1 = myArr.slice(1, 3) 
// console.log(myn1) // it will print the sliced array [1, 2] in console. // endIndex value not included in this method. // Doesn't change the original array
// console.log("B", myArr) // it will print our original array which we see doesn't get changed due to above method.

// const myn1 = myArr.splice(1, 3) 
// console.log(myn1) // it will print the spliced array in console [1, 2, 3]. // endIndex value included. // changes the original array.
// console.log("B", myArr) // it will print the changed original array in console [0, 4, 5]


