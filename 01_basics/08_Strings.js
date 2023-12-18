// Strings:

    // let name = " Haris" 
    // let repoCount = 50

    // console.log(name + repoCount + "Value") // old syntax for concatinating strings etc..

    // console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}.`) // modern syntax for concatinating etc. benefit of using this syntax is we can use methods etc on the go like we used name.toUppercase() in 1st place holder in backticks string. Whenever we use new keyword means we are using objects of javascript  with constructor (contructor can be String Promise etc. etc. like the constructor in classes).

    // Below is the example of declaring string with different syntax in which we use new keyword means we are using objects of JavaScript with the constructor named String:

        // const gameName = new String ('Haris Khan') // when we declare string using normal syntax that string also invokes JavaScript object behind the scenes. but if we will write console.log(typeof gameName) it will show the type as object but it is a string object.

        // console.log(gameName[0]) // it will print H in console // accessing values of string object.
        // console.log(gameName[gameName.length - 1]) // This is the way to access the last character of any string.
        // console.log(gamename.__proto__) // show us the string method object in node js empty object but in console it will show us all the methods inside the object that will be available for that string object like .toUpperCase() etc..

        // console.log(gameName.length) // it will return 10
        // console.log(gameName.toUpperCase) // it will return 'HARIS KHAN'
        // console.log(gameName.charAt(2)) // it will return r
        // console.log(gameName.indexOf('r')) // it will return 2

        // const gameName1 = new String('Haris-Khan-abc')

        // const newString = gameName1.subString(0, 5) // it will return 'Haris'

        // const anotherString = gameName1.slice(0, 5) // it will return 'Haris' but the difference between substring and slice method is we can give slice method negative values so it will work in reverse position.

        // const anotherString1 = gameName1.slice(-8, 4) // it will return 'ri'. // the difference between substring and slice method is we can give slice method negative values so it will work in reverse position.

        // const newStringOne = "    Haris    "

        //console.log(newStringOne.trim()) // it will return a new string "Haris" with all the spaces removed.

        // const url = "https://abc.com/abc%20def"

        // console.log(url.replace('%20', '-')) // it will return "https://abc.com/abc-def"
        // console.log(url.includes('abc')) // it will return true.

        // console.log(gameName1.split('-')) // it will return an array ['Haris', 'Khan', 'abc'] values seperated by '-'.

        // All String Methods:

            // 1) .at(index) // it will give us the character at the given index we can give this method both negative and positive index. Positive index starts from 0 and negative index starts from -1. Negative index will start counting from the end of sentence.

            // 2) .charAt(index) // gives us the character at given index.

            // 3) .charCodeAt(index) // The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

            // 4) .codePointAt(index) // The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.

            // 5) .concat(variable 1 + variable 2 + variable3etc.etc.) // concats the values.

            // 6) .endsWith('word') // returns true or false if the string really ends with given string of word or character or characters in the bracket then it will return true else false.

            // 7) .includes('word') // returns true or false if the string contains the given word or character or characters in the bracket then it will return true else false.
            
            // 8) .indexOf('character') // gives us the index number of given character inside bracket.

            // 9) .isWellFormed('variable') // The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.

            // 10) .lastIndexOf('word') // gives us the index of the first character of the given word in the bracket, in our main string.

            // 11) .length // gives us the length of the string.

            // 12) 



