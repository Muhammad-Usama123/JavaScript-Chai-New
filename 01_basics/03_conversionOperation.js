//Conversion Operation:

    //Below are the types of cases when we check from type of operator that value is converted into number or not, but when we check from using "console.log(typeof)" operator it shows that the the value is converted but when we see the value by using "console.log(variablename)" it shows the value of some other type:

        // 1) Below is the case for converting a string (which only has numbers init) into number:

            /*
            let score = "33";

            console.log(typeof score); // string
            console.log(typeof (score)); // string

            let valueInNumber = Number(score)

            console.log(typeof valueInNumber); // number
            console.log(valueInNumber); number
            */

        // 2) Below is the case for converting a string (which also has alphabets init with numbers) into number:

            /*
            let score = "33abc";

            console.log(typeof score); // string
            console.log(typeof (score)); // string

            let valueInNumber = Number(score)

            console.log(typeof valueInNumber); // number
            console.log(valueInNumber); NaN
            */

        // 3) Below is the case for converting null datatype value into number:

            /*
            let score = "null";

            console.log(typeof score); // object
            console.log(typeof (score)); // object

            let valueInNumber = Number(score)

            console.log(typeof valueInNumber); // number
            console.log(valueInNumber); 0
            */

        // 4) Below is the case for converting undefined datatype value into number:

            /*
            let score = undefined;

            console.log(typeof score); // undefined
            console.log(typeof (score)); // undefined

            let valueInNumber = Number(score)

            console.log(typeof valueInNumber); // number
            console.log(valueInNumber); NaN
            */

        // 5) Below is the case for converting true (which is of boolean datatype value) into number:

            /*
            let score = true;

            console.log(typeof score); // boolean
            console.log(typeof (score)); // boolean

            let valueInNumber = Number(score)

            console.log(typeof valueInNumber); // number
            console.log(valueInNumber); // 1 
            */

        // 6) Below is the case for converting false (which is of boolean datatype value) into number:

            /*
            let score = false;

            console.log(typeof score); // boolean
            console.log(typeof (score)); // boolean

            let valueInNumber = Number(score)

            console.log(typeof valueInNumber); // number
            console.log(valueInNumber); // 0
            */

        // 7) Below is the case for converting string datatype value( which only has alpahbets init) into number:

            /*
            let score = "Haris";

            console.log(typeof score); // string
            console.log(typeof (score)); // string

            let valueInNumber = Number(score)

            console.log(typeof valueInNumber); // number
            console.log(valueInNumber); NaN
            */

            // So we saw from above cases that converting into number datatypes is not trustable.
            // NaN datype is number.

    //Below are the cases of converting some other dattypes value into boolean type:

        // 1) Below is the case for converting 1 (which is of number datatype) into boolean:

            /*
            let isLoggedIn = 1;

            let  booleanIsLoggedIn = Boolean(isLoggedIn)

            console.log(booleanIsLoggedIn) // true
            */ 

        // 2) Below is the case for converting 0 (which is of number datatype) into boolean:

            /*
            let isLoggedIn = 0;

            let  booleanIsLoggedIn = Boolean(isLoggedIn)

            console.log(booleanIsLoggedIn) // false 
            */

        // 3) Below is the case for converting "" (which is an empty string) into boolean:

            /*
            let isLoggedIn = "";

            let  booleanIsLoggedIn = Boolean(isLoggedIn)

            console.log(booleanIsLoggedIn) // false
            */

        // 4) Below is the case for converting "Haris" (which is of string datatype) into boolean:

            /*
            let isLoggedIn = "Haris";

            let  booleanIsLoggedIn = Boolean(isLoggedIn)

            console.log(booleanIsLoggedIn) // true
            */

    // Below is the case when we convert a number into string:

        /*
        let someNumber = 33;

        let  stringNumber = String(someNumber)

        console.log(someNumber) // 33
        console.log(typeof someNumber) // string
        */

    // Browser in most of the cases gives us values in string datatype and we can convert those string datatype values into boolean, number, object, array etc..
