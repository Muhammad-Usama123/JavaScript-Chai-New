// Singleton:

    // Whenever we create an object through constructor the object is singleton means this object is only one of its kind.// Whenever we declare objects like literals it will not become singleton means this object will not be only one of its kind we can make its multiple instances. 

// Declaring objects through constructor:

    // Object.create

// Declaring objects through literals:

// const mySim = Symbol("key1") // declaring Symbol datatype variable for using in the below object.

 // const jsUser = {
    // name: "abcname", // we wrote keys without quotes ("") but keys are actually strings in objects.
    // "full name": "abcdeffullname" // now in this line we declared our key "full name" inside quotes, so now it is not possible to access this key like (jsUser.fullname), we can only access this key through (jsUser["full name"]) this syntax.
    // mySim: "mykey1", // not the correct way of declaring symbol as a key in object like in this line
    // [mySim]: "mykey1" // this is the correct way of declaring symbol as a key in object like in this line above is the wrong method.
    // age: 123,
    // location: "abcdeflocation",
    // email: "abc@gmail.com",
    // isLoggedIn: false,
    // lastLoginDays: ["abcday", "defday"]
//  }

// Accessing Object Values:

    // console.log(jsUser.email) // lots of people think we can only access object properties through this way like "jsUser.email" but actually this syntax has some restrictions, but we'll use mostly this syntax when accessing object properties when not possible through this syntax then we'll access through below explained syntaxes.

    // console.log(jsUser["email"]) // We can access object properties through this way too cause sometimes we cannot use above syntax for accessing object properties in some conditions but we'll mostly use above (jsUser.email) syntax. // cause I already wrote above that keys inside objects are treated like strings so we have to write key inside quotes for accessing this key in this method but in above method we don't have to write the key inside quotes like strings.

    // console.log(jsUser["full name"]) // cause we declared our key "full name" inside quotes in the above object named jsUser, so now it is not possible to access this key like (jsUser.fullname), we can only access this key through (jsUser["full name"]) this syntax.

    // console.log(typeOf jsUser.mySim) // it will print in console that this property is of type string but we wanted to declare this property "mySim" in above object named "jsUser" like Symbol value in line 16 but the mistake that we made is we used wrong syntax for declaring a Symbol variable as a key in above object named "jsUser" in line 16 and the correct syntax is in line 17 and 2nd thing is after declaring Symbol as a key in object we cannot access this property using (jsUser.mySim) this syntax, we can only access Symbol datatype properties in object through (jsUser[mySim]) this syntax.

    // console.log(jsUser[mySim]) // this is the way of accessing Symbol datatype keys in object.

    // jsUser.email = "abcdef@gmail.com" // for changing value of "email" property inside above object named "jsUser".

    // jsUser.greeting = function(){
        // console.log("abc Jsuser")
    // } // for adding a function as a value with key "greeting" inside above object named "jsUser".
    // jsUser.greetingTwo = function(){
        // console.log(`abc jsUser ${this.name}`)
    // } // for adding a function as a value with key "greetingTwo" inside above object named "jsUser" and in this function we are also using the concept of string interpolation and referencing a property of same object jsUser in which we are adding this function by using "this.name" syntax.

    // console.log(jsUser.greeting) // it will print "[Function (anonymous)]" in console means it is printing the reference of function in console and not executing the function cause we'll have to write brackets "()" with the key when accessing that key which has a function as a value if we want to execute that function and not just see the function reference like in line 44 below.

    // console.log(jsUser.greeting()) // we'll have to write brackets "()" with the key when accessing that key which has a function as a value.

    // console.log(jsUser.greetingTwo()) // it will print "abc jsUser abcname" in console.

    // Object.freeze(jsUser) // now we cannot change the values of properties inside above object named "jsUser" cause we freezed this object using Object.freeze().

