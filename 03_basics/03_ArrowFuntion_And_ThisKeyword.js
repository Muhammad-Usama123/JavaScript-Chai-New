// // this keyword:

//     // This keyword tells us about current context. For understanding arrow function we'll have to understand about "this" keyword and for understanding about this keyword we'll have to go back to objects topic.

//     const user = {
//         username: "hitesh",
//         price: 999,
    
//         welcomeMessage: function() {
//             console.log(`${this.username} , welcome to website`);
//             console.log(this);
//         }
    
//     }
    
//     // user.welcomeMessage()
//     // user.username = "sam"
//     // user.welcomeMessage()
    
//     // console.log(this);
    
//     // function chai(){
//     //     let username = "hitesh"
//     //     console.log(this.username); 
//     // }
    
//     // chai()
    
//     // const chai = function () {
//     //     let username = "hitesh"
//     //     console.log(this.username);
//     // }
    
//     const chai =  () => {
//         let username = "hitesh"
//         console.log(this);
//     }
    
    
//     // chai()
    
//     // const addTwo = (num1, num2) => {
//     //     return num1 + num2
//     // }
    
//     // const addTwo = (num1, num2) =>  num1 + num2 // when we have only 1 line of code and we don't want to use return keyword.
    
//     // const addTwo = (num1, num2) => ( num1 + num2 ) // when we have only 1 line of code and we don't want to use return keyword.
    
//     const addTwo = (num1, num2) => ({username: "hitesh"}) // for returning objects from an arrow function without using return keyword.
    
    
//     console.log(addTwo(3, 4))
    
    
//     // const myArray = [2, 5, 3, 7, 8]
    
//     // myArray.forEach()