// On what basis datatypes are categorised in primitive and non primitive (reference datatypes) datatypes?

    // In most of the programming languages like c++ etc. datatypes are categorised upon the concept of "call by value" and "call by reference" and  these 2 concepts depends upon how these values of different datatypes get stored in memory and how do we access that saved data of ours (those stored values of different datatypes) from the memory.

// Call By Value: 

    // All primitive datatype values are "call by values" type, means whenever we will copy these values anywhere in the code, so, we don't get the original data  reference of the memory of the value, we get the copy of the value and whatever changes we do with it they change in the copy.

// Primitive Datatypes: 

    // String, Number, Boolean, null, undefined, Symbol.

        // Examples of primitive datatypes:
        
            // const score = 100 // number
            // const score = 100.3 //number

            // const isLoggedIn = false // boolean
            // const outsideTemp = null // null
            // let userEmail; // undefined

            // const id = Symbol('123') // Symbol
            // const anotherId = Symbol('123') // Symbol // line 22 and line 23 both symbol value looking same but they return different values example below:

                // console.log(id === anotherId) // false // cause both symbol return different values.

            // const bigNumber = 4523187542397234623n // bigInt // by writing n in last a number becomes bigInt.

// Reference (Non Primitive):

    // Array, Objects, Functions

        // Examples Of Non Primitive Datatypes: // All non primitve datatypes are object
        
            // const heroes = ["abc", "abc1", "abc2"] // array

            // let myObj = {    
                // name: "Usama",
                // age: 26
            // } // object

            // const myFunction = function() {
                // console.log("abc");
            // } // function

            // console.log(typeof null) // object // typeof operator is for finding variables datatypes.

            // console.log(typeof myFunction) // prints "function" datatype in nodejs // but it is called "object function".