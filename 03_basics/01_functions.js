// () this is paranthesis
// this is scope {}

// function sayName(){
//     console.log("H");
//     console.log("a");
//     console.log("r");
//     console.log("i");
//     console.log("s");
// } // function definition

// sayName // function reference

// sayName() // function execution.

// function addTwoNumbers(number1, number2) // parameters{
//     console.log(number1 + number2)
// }

// const result = addTwoNumbers(2, 5) // arguments // added the function result in const result in this line.

// console.log(result) // it will print undefined in console cause we didn't return anything from function, we just console logged 2 values for getting result inside result we must have to return result from inside the function like in example below:

// function addTwoNumbers(number1, number2) // parameters{
//     let result = number1 + number2 or return number1 + number2 but in this 2nd case line 26 is not required then cause we returning the value directly in this line if we use the 2nd case.
//      return result
//      console.log("Haris") // this line will not be executed cause after the line in function in which we used return keyword the function will not execute anything after that.
// }

// const result = addTwoNumbers(2, 5) // function execution.

// console.log(result) // now the result will print the result in console that we returned from our function instead of undefined like in line 22.

// function loginUserMessage(username){
    // return `${username} just logged in`
// }

//console.log(loginUserMessage("Haris")) // it will print "Haris just logged in" in console.
//console.log(loginUserMessage("")) // it will print " just logged in" in console.
//console.log(loginUserMessage()) // it will print "undefined just logged in" in console. // and for handling this undefined case in which user didn't pass any value in argument's bracket below function is the solution for this in which we used if statement for checking that whether user passed any value in argumeent bracket or not.

// function loginUserMessage(username){
    // if(username === undefined)// more preferred way of writing this condition is in the function below in line 54 cause we defined what's the problem in giving condition like this in which we used undefined.{
        // console.log("please enter a username")
        // return // this return will stop this function to execute any code after this return and in this case we are using this return if this if condition returns true so that we can stop this function execution and stop the code in line 47 to get executed.
    // }
    // return `${username} just logged in`
// }

// console.log(loginUserMessage()) // now this line will print undefined.

// some values return false in javascript like empty string (""), undefined etc. etc.

// function loginUserMessage(username = "abc") // now we set the default username as abc in parameter bracket now in this case our function will never go to this if block cause the value will never be undefined in this case cause we set the default username as abc here now if we'll pass any username in argument's bracket during the execution of this function then that username will overwrite the default username{
    // if(!username)// more preferred way of writing the condition that we wrote in line 43 above {
        // console.log("please enter a username")
        // return // this return will stop this function to execute any code after this return and in this case we are using this return if this if condition returns true so that we can stop this function execution and stop the code in line 47 to get executed.
    // }
    // return `${username} just logged in`
// }

// Now Below is the example of case in which we don't know that how much parameters we can get from the user so the solution for this is rest operator which is "..." sometimes we call it rest operator sometimes we call it spread operator depends upon situation in this case we're using it as rest operator.

// function calculateCartPrice(...num1) // now no matter how much arguments end user pass to this function's parameter they all get stored in an array and the array will be named num1{
    // return num1 
// }

// console.log(calculateCartPrice(200, 400, 500, 2000)) it will print an array with all these arguments values inside it [200, 400, 500, 2000]

// function calculateCartPrice(val1, val2, ...num1) // now the 1st and 2nd argument that user will pass to this function's parameters will be stored in val1 and val2 and rest of the values will get stored in an array named num1{
    // return num1 
    // }
    
// console.log(calculateCartPrice(200, 400, 500, 2000)) it will print an array with only last 2 values inside this array [500, 2000] cause we only returned num1 from the function the 1st 2 values that we passed in argument bracket will get stored in val1 and val2 and cause we didn't return val1 and val2 from this function so we are not getting that values we are only getting values of num1 cause we returned it from above function in line 70.

// now below is the example of passing an object as an argument to function parameter.

// const user = {
    // username: "Haris",
    // price: 000
// }

// function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// handleObject(user) // another way of passing object as an argument is in example below in line 89.

// handleObject({
    // username: "abc",
    // price: 000
// })

// now below is the example of passing an array as an argument to function parameter.

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
    // return getArray[1]
// }

// console.log(returnSecondValue(myNewArray)) // it will print 400 in console which is 2nd element in our above declared array named "myNewArray" which we passed as argument to the function parameter.
// console.log(returnSecondValue([200, 400, 100, 600])) // another way of passing array as an argument to function parameter.

// ++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

// Case1:

    // function addOne(num){
    //     return num + 1
    // }

    // addOne()

    // const addTwo = function(num){ // the function like this that we hold in variable is also called expression.
    //     return num + 2
    // }

    // addTwo()

    // In above case1 both functions will work fine but in case2 below 1st function will work fine only the 2nd function will throw error because of the concept of hoisting because we stored the 2nd function in variable.  

// Case2:

    // addOne()

    // function addOne(num){
    //     return num + 1
    // }

    // addTwo()

    // const addTwo = function(num){
    //     return num + 2
    // }









