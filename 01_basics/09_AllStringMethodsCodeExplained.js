// All String Methods:

    // 1) string.charAt(index) // gives us the character at given index.

    // .indexOf() And .lastIndexOf:

        // .indexOf() and .lastIndexOf() both of these methods are defined below this line and they both have similarities:

    // 2) string.indexOf():

        // Syntax:

            // string.indexOf('searchString')
            // string.indexOf('searchString', Position) // default position(index) 0

        // Examples Of string.indexOf('searchString') Syntax: 

            // const s = "The code undefined code code !"

            // s.indexOf('Code') // it will return -1 cause we put "Code" inside the bracket and the code in our string is written from small c not capital that's why it is returning -1 cause "Code" doesn't exist in our string and cause indexOf method is case sensitive.

            // s.indexOf('code') // it will return 4 // difference between indexOf and lastIndexOf is in the same example code of .lastIndexOf() method below.

        // Examples Of string.indexOf('searchString', Position) Syntax:

            // s.indexOf('code', 4) // it will return 4            
            // s.indexOf('code', 5) // it will return 19            
            // s.indexOf('code', -5) // it will return 4      // position -5 will be treated as zero.       
            // s.indexOf('') // it will return 0
            // s.indexOf() // it will return 9 cause our main string written above consist of the word undefined at 9th index that's why it is returning 9. If our string doesn't consist of undefined word then it will return -1.

    // 3) string.lastIndexOf():

        // Syntax:

            // string.lastIndexOf('searchString')
            // string.lastIndexOf('searchString', Position) // default postion(index) + infinity means it will start searching from the end of the string by default.

        // Examples Of string.lastIndexOf('searchString') Syntax: 

            // const s = "The code undefined code code !"

            // s.lastIndexOf('Code') // it will return -1 cause we put "Code" inside the bracket and the code in our string is written from small c not capital that's why it is returning -1 cause "Code" doesn't exist in our string and cause lastIndexOf method is case sensitive.

            // // s.indexOf('code') // it will return 24 cause lastIndexOf method starts searching for the given word in the bracket from the end of the string and this is the difference between indexOf method (above at no. 2) and lastIndexOf method.

        // Examples Of string.lastIndexOf('searchString', Position) Syntax:

            // s.lastIndexOf('code', 24) // it will return 24            
            // s.lastIndexOf('code', 23) // it will return 19
            // s.indexOf('code', -5) // it will return -1 cause the postion -5 will be treated as zero and the lastIndexOf start searching from the end of the string so when it will start searching from 0 it look at 0 index for the given word in bracket then -1 so basically it will find nothing and will return -1 // position -5 will be treated as zero.

            // s.lastIndexOf('') // it will return 30 in our above written main string case named "s".
            // s.indexOf() // it will return 9 cause our main string written above consist of the word undefined at 9th index that's why it is returning 9. If our string doesn't consist of undefined word then it will return -1.

    // .slice() And .substring():

    // .slice() and .substring() both of these methods are defined below this line and they both have similarities. Both of these methods take some part from original string acoording to our given parameters inside these methods brackets and make a new string from original string.

    // 4) string.slice():

        // Syntax: 

            // string.slice(indexStart)
            // string.slice(indexStart, indexEnd)

        // Examples Of string.slice(indexStart) Syntax:

            // const s = "The morning is upon us."
            // s.length // 23

            //s.slice(12) // it will return a new string from 12th index to the end "is upon us." 
            //s.slice(-11) // it will return a new string from -11th index (means it will start counting from the end of the string) to the end "is upon us."
            
            //s.slice(23) // it will return an empty string cause our string contains only 22 index values.

        // Examples Of string.slice(indexStart, indexEnd) Syntax:

            // indexStart character included but not the indexEnd character.
            
            // s.slice(13, 16) // it will return "s u" 
            // s.slice(16, 13) // it will return "" (an empty string)
            // s.slice(-8, -4) // it will return "upon" 
            // s.slice(-8, 4) // it will return "" (an empty string) 
            // s.slice(8, -4) // it will return "ing is upon"

    // 5) string.substring():

        // Syntax: 

            // string.substring(indexStart)
            // string.substring(indexStart, indexEnd)


        // Examples of string.substring(indexStart) Syntax:

            // const s = "The morning is upon us."
            // s.length // 23

            //s.substring(12) // it will return a new string from 12th index to the end "is upon us."
            //s.substring(-11) // it will return a new string from 0th index to the end cause -11 in this method will behave like 0th index and it will return a new string "The morning is upon us."  (same content as original string)

            //s.substring(23) // it will return an empty string cause our string contains only 22 index values.

        // Examples Of string.substring(indexStart, indexEnd) Syntax:

            // indexStart character included but not the indexEnd character.

            // s.substring(13, 16) // it will return "s u" 
            // s.substring(16, 13) // it will return "s u" // cause it will swap the values 13 in place of 16 at indexStart and 16 in the place of 13 at indexEnd.

            // s.substring(-8, -4) // it will return "" (an empty string) // cause negative values are treated as 0 in this method.

            // s.substring(-8, 4) // it will return "The " // cause it will treat -8 as 0 and will give us characters from 0th index to 3rd index cause indexEnd characters are not included in this method and above slice methods.

            // s.substring(8, -4) // it will return "The morn" // will swap values // negative value will be treated as 0 so characters from 0 to 7th index cause indexEnd character not included.

    // 6) string.split(): // doesn't modifies the original string

        // Syntax:

            // string.split()
            // string.split(separator) // will seperate values with the given separator in bracket.
            // string.split(separator, limit) 

        // Examples Of string.split(separator) // will seperate values with the given separator in bracket:
            // const string = 'The morning is upon us.'

            // const arr0 = string.split() // it will return ['The morning is upon us.']
            // const arr0 = string.split(' ') // it will return ['The', 'morning', 'is', 'upon' 'us.'] // string separated by spaces cause we gave space separator in the bracket.
            
            // const arr0 = string.split('') // it will return ['T', 'h', 'e', ' ', 'm', 'o', 'r', 'n', 'i', 'n', 'g', ' ', 'i', 's', ' ', 'u', 'p', 'o', 'n', ' ', 'u', 's', '.'] // values separated by empty string.
            
            // const arr0 = string.split('o') // it will return ['The m', 'rning is up', 'n us.'] // values separated by o.

        // Examples Of string.split(separator, limit) // the limit parameter will return given amount of strings to us in return in an array:

            // const arr0 = string.split('o', 2) // it will return ['The m', 'rning is up']
            // const arr0 = string.split('o', 0) // it will return []

    // 7) string.includes(): // tells us whether the main string includes the given word or character in bracket or not. // case sensitive.

        // Syntax:

            // string.includes(searchString)
            // string.includes(searchString, Position)

        // Examples Of string.includes(searchString):

            // const sentence = 'The quick brown fox jumps over the lazy dog.'

            // sentence.includes('fox') // returns true.
            // sentence.includes('Fox') // returns false cause case sensitive.

        // Examples Of string.includes(searchString, Position):

            // sentence.includes('fox', 0) // returns true.
            // sentence.includes('fox', 16) // returns true.
            // sentence.includes('fox', 17) // returns false.

    // 8) string.startsWith(): // tells us whether the main string starts with the given word or character in bracket or not. // case sensitive.

        // Syntax:

            // string.startsWith(searchString)
            // string.startsWith(searchString, Position)

        // Examples Of string.startsWith(searchString):

            // const str = 'Cats are the best!'

            // const result = str.startsWith('Cats') // returns true
            // const result = str.startsWith('cats') // returns false // case sensitive
            // const result = str.startsWith('are') // returns false 

        // Examples Of string.startsWith(searchString, Position):

            // const result = str.startsWith('are', 5) // returns true cause 'are' is starting from index 5 in the main string.

    // 9) string.endsWith(): // tells us whether the main string ends with the given word or character in bracket or not. // case sensitive.

        // Syntax:

            // string.endsWith(searchString)
            // string.endsWith(searchString, length)

        // Examples Of string.endsWith(searchString):

            // const str = 'Cats are the best!'

            // const result = str.endsWith('best!') // returns true
            // const result = str.endsWith('best') // returns false 

        // Examples Of string.endsWith(searchString, length):

            // const result = str.endsWith('best', 17) // returns true cause at length 17 the word 'best' is ending the main string.

    // 10) string.concat(): // doesn't modify the original strings. //Returns a new string // It is strongly recommended to use the assignment operators (+, +=) instead of .concat() method.

        // Syntax:

            // str1.concat(str2)
            // str1.concat(str2, str3)
            // str1.concat(str2, str3, ..., strN) // means we can add as many strings as we want.

        // Example Of str1.concat(str2):
        
            // const str1 = "abc"
            // const str2 = "def"

            // const abc = str1.concat(str2) // returns "abcdef"

        // Example Of str1.concat(str2, str3):

            // const abc = str1.concat(' ', str2) // returns "abc def"

    // 11) string.repeat(): // copies the value of the main string on which we apply .repeat() method and copies the value number of times the number we give inside the bracket of this method and return all those copied strings in a new single string. // doesn't modifies the original string. //doesn't accept negative values or infinity (like 1/0 etc. etc.), if we'll give these values inside this method's bracket it will return range error.

        // Syntax:

            // string.repeat(count) // count must be an integer greater than or equal to 0.

        // Examples:

            // 'abc'.repeat(0) // returns '' (an empty string)
            // 'abc'.repeat(1) // returns 'abc' 
            // 'abc'.repeat(2) // returns 'abcabc' 
            // 'abc'.repeat(3.5) // returns 'abcabcabc' // .repeat() method will convert decimal values into integer like in this example it converted 3.5 into three and copied the main string 3 times in a single string.

            // 'abc'.repeat(-1) // returns RangeError 
            // 'abc'.repeat(1/0) // returns RangeError

    // 12) 13) 14) string.trimstart(), string.trim() And string.trimend(): // these are used when we want to remove whitespace characters. // does not change the original string it will return a new string. If we give these methods a string which doesn't have any whitespaces at the start and at the end of the string they will just return a new string with the same value written in original string.

    // 12 ) string.trimStart(): // these are used when we want to remove whitespace characters. // does not change the original string it will return a new string. If we give this method a string which doesn't have any whitespaces at the start of the string it will just return a new string with the same value written in original string.

        // Syntax: 

            // string.trimStart() // without any parameters

        // Example: 

            // const greeting = '   abc def!   '

            // const str = greeting.trimStart() // it will return 'abc def   ' // removed whitespaces from the start of string.

    // 13 ) string.trim(): // these are used when we want to remove whitespace characters. // does not change the original string it will return a new string. If we give this method a string which doesn't have any whitespaces at the start and at the end of the string it will just return a new string with the same value written in original string.

        // Syntax: 

            // string.trim() // without any parameters

        // Example: 

            // const greeting = '   abc def!   '

            // const str = greeting.trim() // it will return 'abc def' // removed whitespaces from the start and end of string both.

    // 14 ) string.trimEnd(): // these are used when we want to remove whitespace characters. // does not change the original string it will return a new string. If we give this method a string which doesn't have any whitespaces at the end of the string it will just return a new string with the same value written in original string.

        // Syntax: 

            // string.trimend() // without any parameters

        // Example: 

            // const greeting = '   abc def!   '

            // const str = greeting.trimend() // it will return '   abc def' // removed whitespaces from the end of string.

    // 15) And 16) string.padStart() And string.padEnd(): // it will pad the main string by given length and fill  the string in the padding if we'll provide any in the second argument otherwise it will get padded by just whitespaces. Doesn't modify the original string.

    // 15) string.padStart(): // it will pad the main string from the start of string by given length and fill  the string in the padding if we'll provide any in the second argument otherwise it will get padded by just whitespaces. Doesn't modify the original string.

        // Syntax:

            // string.padStart(targetLength)
            // string.padStart(targetLength, padString)

        // Examples Of string.padStart(targetLength):

            // 'abc'.padStart(10) // it will return "       abc" // abc with 7 whitespaces at the start for reaching the length 10.

            //'abc'.padStart(2) // it will return a new string with the same value as original string 'abc'

        // Examples Of string.padStart(targetLength, padString):

            // 'abc'.padStart(10, 'foo') // it will return "foofoofabc" 

            // 'abc'.padStart(10, '12345678') // it will return "1234567abc" // it will not write the 8 because targetLength reached.


    // 16) string.padEnd(): // it will pad the main string from the end of the string by given length and fill  the string in the padding if we'll provide any in the second argument otherwise it will get padded by just whitespaces. Doesn't modify the original string.

        // Syntax:

            // string.padEnd(targetLength)
            // string.padEnd(targetLength, padString )

        // Examples Of string.padEnd(targetLength):

            // 'abc'.padEnd(10) // it will return "abc       " // abc with 7 whitespaces at the end for reaching the length 10.

            //'abc'.padEnd(2) // it will return a new string with the same value as original string 'abc'.

        // Examples Of string.padEnd(targetLength, padString):

            // 'abc'.padEnd(10, 'foo') // it will return "abcfoofoof" 

            // 'abc'.padEnd(10, '12345678') // it will return "abc1234567" // it will not write the 8 because targetLength reached.

    // 17) string.localeCompare(): compares two strings that the alphabet or number in referenceString occurs before compareString or after alphabetically, numerically or whether a character is base character in some language etc etc. and according to this criteria it returns values in numbers like if referenceString alphabet occurs before compareString alphabet then it will return normally -1 or in some browsers it can return -2 or even -3 depends upon browser. and if the referenceString occurs after compareString it will return normally the value of 1 but in some browsers it may return 2 or 3 depends upon browser and if we compare same alphabets in referenceString and compareString it will return 0.
    
        // Syntax: 

            // referenceString.localeCompare(compareString)
            // referenceString.localeCompare(compareString, locales) // if we don't provide any locales in the argument then it will take browser's default language as locales.

            // referenceString.localeCompare(compareString, locales, options) // options for locales like base etc.etc

        // Examples Of referenceString.localeCompare(compareString):

            // referenceStr occurs before compareStr // negative number in return value -1, -2 or in some browsers -3. Example below:

                // 'a'.localeCompare('b') // it will return -1 or -2 or -3 depends upon browsers

            // referenceStr occurs after compareStr // positive number in return value 1, 2 or in some browsers 3. Example below:

                // 'b'.localeCompare('a') // it will return 1 or 2 or 3 depends upon browsers

            // referenceStr equivalent compareStr // 0 in return value. Example below:

                // 'a'.localeCompare('a') // it will return 0.

            // Examples of referenceString.localeCompare(compareString, locales):

                // ä.localeCompare('z', 'de') // it will return -1 or -2 or -3 depends upon browsers cause in German ('de'), ä sorts before z.

                // ä.localeCompare('z', 'sv') // it will return 1 or 2 or 3 depends upon browsers cause in Swedish ('sv'), ä sorts after z.

            // Examples Of referenceString.localeCompare(compareString, locales, options):

                // ä.localeCompare('a', 'de') 
                // ä.localeCompare('a', 'sv') // they both line 343 and 344 will return a positive value like 1, 2 or 3 depends upon browser, it is because in both of these languages (Swedish and German) ä sorts after a.

                // ä.localeCompare('a', 'de', {sensitivity: 'base'}) // returns 0 cause ä has a as the base letter in German.

                // ä.localeCompare('a', 'sv', {sensitivity: 'base'}) // returns positive number 1 or 2 or 3 depends upon browser cause ä and a are separate base letters in Swedish.

    // 18) and 19) // case sensitive by default but remove this condition by adding (/gi) with our regexp
     // Difference between string.search() method and string.match() method is string.search() only returns the index number but string.match() returns an array with some properties inside it in which it also provides the index number but with some more details inside the array. 2nd difference is when it doesn't find any occurences of given regexp then string.search() returns -1 but string.match() returns null. 

    // 18) string.search(): // case sensitive by default but remove this condition by adding (/gi) with our regexp.
    //Difference between string.search() method and string.match() method is string.search() only returns the index number but string.match() returns an array with some properties inside it in which it also provides the index number but with some more details inside the array. 2nd difference is when it doesn't find any occurences of given regexp then string.search() returns -1 but string.match() returns null.

        // Syntax: 

            // string.search(regexp)

        // Examples:

            // let text = "The rain in SPAIN stays mainly in the plain";

            // text.search('ain') // it will return 5 cause 1st appearance of ain starts at 5th index.
            // text.search(/ain/) // it will return 5 cause 1st appearance of ain starts at 5th index and cause '/ain/' is getting treated as regexp.

            // text.search(/AIN/) // it will return 14 cause 1st appearance of AIN starts at 14th index and cause this method is acting as case sensitive here cause we didn't provide /i in bracket with /AIN/ like this '/AIN/i' like in example below.

            // text.search(/AIN/i) // it will return 5 cause 1st appearance of ain starts at 5th index and because of /i this method is not working as case sensitive here.

            // text.search(/w/) // it will return -1 cause w doesn't exist in the whole main string.

    // 19) and 20): Difference between string.match and string.matchAll(): // case sensitive by default but remove this condition by adding (/gi) with our regexp
        
        // in string.match() parameter bracket when we will give string('ain') or regexp (/ain/) string.match() will convert that string or regexp into just regexp if it is not one but in string.matchAll() it will convert string or normal regexp into global regexp (/ain/g) and the 2nd difference is that string.match() returns the array of only 1 match of the given regexp inside parameter bracket but string.matchAll() returns an array of arrays inside it with all the matches with their details in separate arrays and 3rd difference is when the string.match() doesn't find any match it returns null but string.matchAll returns an empty string.

    // 19) string.match(): // case sensitive by default but remove this condition by adding (/gi) with our regexp
     //Difference between string.search() method and string.match() method is string.search() only returns the index number but string.match() returns an array with some properties inside it in which it also provides the index number but with some more details inside the array. 2nd difference is when it doesn't find any occurences of given regexp then string.search() returns -1 but string.match() returns null.

    // Difference between string.match and string.matchAll(): 
        
        // in string.match() parameter bracket when we will give string('ain') or regexp (/ain/) string.match() will convert that string or regexp into just regexp if it is not one but in string.matchAll() it will convert string or normal regexp into global regexp (/ain/g) and the 2nd difference is that string.match() returns the array of only 1 match of the given regexp inside parameter bracket but string.matchAll() returns an array of arrays inside it with all the matches with their details in separate arrays and 3rd difference is when the string.match() doesn't find any match it returns null but string.matchAll returns an empty string.

        // Syntax: 

            // string.match(regexp)

        // Examples:

            // let text = "The rain in SPAIN stays mainly in the plain";

            // let res = text.match('ain') // returns an array [
                // 'ain',
                // index: 5,
                // input: "The rain in SPAIN stays mainly in the plain"
                // groups: undefined  
            // ]

            // let res = text.match(/ain/) // returns an array [
                // 'ain',
                // index: 5,
                // input: "The rain in SPAIN stays mainly in the plain"
                // groups: undefined  
            // ] and cause it is treated as regexp both the slashes are acting as string opening and string closing.

            // let res = text.match(/ain/g) // returns an array ['ain', 'ain', 'ain'] // gives us all the occurences of given regexp in the bracket cause of '/g' but acting as case sensitive here but in below example it is not acting like case sensitive cause of '/gi'.

            // let res = text.match(/ain/gi) // returns an array ['ain', 'AIN', 'ain', 'ain'] // gives us all the occurences irrespective of the case of given regexp in the bracket cause of '/gi'.

            // let res = text.match(/w/) // it will return null

    // 20) string.matchAll(regexp): // case sensitive by default but remove this condition by adding (/gi) with our regexp. We can iterate through its values using for of loop and spread the arrays by using spread operator [...res].

        // Difference between string.match and string.matchAll(): 
        
        // in string.match() parameter bracket when we will give string('ain') or regexp (/ain/) string.match() will convert that string or regexp into just regexp if it is not one but in string.matchAll() it will convert string or normal regexp into global regexp (/ain/g) and the 2nd difference is that string.match() returns the array of only 1 match of the given regexp inside parameter bracket but string.matchAll() returns an array of arrays inside it with all the matches with their details in separate arrays and 3rd difference is when the string.match() doesn't find any match it returns null but string.matchAll returns an empty string.

        // Syntax: 

            // string.matchAll(regexp)

        // Examples:

            // 1) // let text = "The rain in SPAIN stays mainly in the plain";

            // let res = text.match('ain') // returns an array of arrays with all the matches with their details in separate arrays[
                // [
                // 'ain',
                // index: 5,
                // input: "The rain in SPAIN stays mainly in the plain"
                // groups: undefined  
                // ],

                // [
                // 'ain',
                // index: 25,
                // input: "The rain in SPAIN stays mainly in the plain"
                // groups: undefined  
                // ],

                // [
                // 'ain',
                // index: 40,
                // input: "The rain in SPAIN stays mainly in the plain"
                // groups: undefined  
                // ]
            // ] // res variable is an iterator we can loop through res using for of loop and can spread its values using spread operator like "[...res]"

            // 2) // let res = text.match(/ain/gi) // returns an array of arrays with all the matches with their details in separate arrays and because we mentioned '/gi' it will not act as case sensitive[
                // [
                // 'ain',
                // index: 5,
                // input: "The rain in SPAIN stays mainly in the plain"
                // groups: undefined  
                // ],

                // [
                // 'AIN',
                // index: 14,
                // input: "The rain in SPAIN stays mainly in the plain"
                // groups: undefined  
                // ],

                // [
                // 'ain',
                // index: 25,
                // input: "The rain in SPAIN stays mainly in the plain"
                // groups: undefined  
                // ],

                // [
                // 'ain',
                // index: 40,
                // input: "The rain in SPAIN stays mainly in the plain"
                // groups: undefined  
                // ]
            // ] // res variable is an iterator we can loop through res using for of loop and can spread its values using spread operator like "[...res]"

            // 3) // let res = text.match(/w/gi) // returns an empty array [] cause no occurences found of the given regexp inside method bracket.

            // 4) // let res = text.match(/ain/) // returns "Uncaught TypeError: matchAll must be called with a global regexp ("/g")"

    // 21) And 22) Difference between string.replace() and string.replaceAll():

        // string.replace() only replaces the 1st match if we don't write "/g" with our regexp but string.replaceAll() replaces all the matches.

    // 21) string.replace(): replaces the searchString with replacerString in main string but does not change the original string but returns a new string with the replaced substring that we passed as a replacerString. Case sensitive. Replace will replace only the 1st matchif we don't give it regExp with /g. Difference between string.replace() and string.replaceAll():

        // string.replace() only replaces the 1st match if we don't write "/g" with our regexp but string.replaceAll() replaces all the matches.

        // Syntax:

            // string.replace(searchString, replacerString)
            // string.replace(searchString, replacerFunction)
            // string.replace(regExp, replacerString)
            // string.replace(regExp, replacerFunction)

        // Examples Of string.replace(searchString, replacerString):

            // let text = 'Mr Blue has a blue house and a blue car'

            // let result = text.replace('blue', 'red') // returns a new string 'Mr Blue has a red house and a blue car' // case sensitive

        // Examples Of string.replace(searchString, replacerFunction):

            // let result = text.replace('blue', (match) => {
                // return match.toUpperCase();
            // }); // returns a new string 'Mr Blue has a BLUE house and a blue car' // case sensitive

        // Examples Of string.replace(regExp, replacerString):

            // let result = text.replace(/blue/g, 'red') // returns a new string 'Mr Blue has a red house and a red car' // replaced both the matches cause we gave it "/g" in our regExp. //case sensitive

            // let result = text.replace(/blue/gi, 'red') // returns a new string 'Mr red has a red house and a red car' // replaced all the matches irrespective of the case sensitivity cause we gave it "/gi" in our regExp. //doesn't act as a case sensitive here cause we gave it "/gi" in our regExp.

        // Examples Of string.replace(regExp, replacerFunction):

            // let result = text.replace(/blue/gi, (match) => { // we can also pass other parameters in this function read documentation for the other parameters.
                // match.toUpperCase
            // } // returns a new string 'Mr BLUE has a BLUE house and a BLUE car' // replaced all the matches irrespective of the case sensitivity cause we gave it "/gi" in our regExp. //doesn't act as a case sensitive here cause we gave it "/gi" in our regExp.

    // 22) string.replaceAll():

        // Difference between string.replace() and string.replaceAll():

        // string.replace() only replaces the 1st match if we don't write "/g" with our regexp but string.replaceAll() replaces all the matches.

        // Syntax:

            // string.replaceAll(searchString, replacerString)
            // string.replaceAll(searchString, replacerFunction)
            // string.replaceAll(regExp, replacerString)
            // string.replaceAll(regExp, replacerFunction)

        // Examples Of string.replaceAll(searchString, replacerString):

            // let text = 'Mr Blue has a blue house and a blue car'

            // let result = string.replaceAll('blue', 'red') // returns a new string 'Mr Blue has a red house and a red car'

        // Examples Of string.replaceAll(searchString, replacerFunction):

            // let result = string.replaceAll('blue', (match) => {
                // return match.toUpperCase()
            // }) // returns a new string 'Mr Blue has a BLUE house and a BLUE car'

        // Examples Of string.replaceAll(regExp, replacerString):

            // let result = string.replace(/blue/g, 'red') // returns a new string 'Mr Blue has a red house and a red car' // regExp must be called with "/g" in string.replaceAll() method.
            
            // let result = string.replace(/blue/gi, 'red') // returns a new string with replacing all the matches irrespective of the case sensitivity cause of "/gi" 'Mr red has a red house and a red car' // regExp must be called with "/g" in string.replaceAll() method.
            
            // let result = string.replace(/blue/, 'red') // returns an Error "TypeError: replaceAll must be called with a global regExp"// regExp must be called with "/g" in string.replaceAll() method.

        // Examples Of string.replaceAll(regExp, replacerFunction):

            // let result = string.replaceAll(/blue/gi, (match) => { // we can give more than 1 parameters to this function see documentaion for this
                // return match.toUpperCase();
            // }) // returns a new string replaces all the matches irrespective of case sensitivity cause of "/gi" 'Mr BLUE has a BLUE house and a BLUE car'

    // 23) And 24) string.charCodeAt() And string.codePointAt(): 

        // Difference between these two is that string.charCodeAt() is UTF-16 and string.codePointAt() is Unicode. // They both take position of a character in the main string and they both return a UTF-16 bit code of that character but string.charCodeAt() can only return the code for those characters that has a code between 0 and 65535 but the string.codePointAt() it can go and return the same code for those characters that are in between 0 and 65535 but can also return the code for those that has a code that is greater than 65535. If you're working with characters that doesn't have emojis then we can simply go with string.charCodeAt().

    // 23) string.charCodeAt():

        // Difference between these two is that string.charCodeAt() is UTF-16 and string.codePointAt() is Unicode. // They both take position of a character in the main string and they both return a UTF-16 bit code of that character but string.charCodeAt() can only return the code for those characters that has a code between 0 and 65535 but the string.codePointAt() it can go and return the same code for those characters that are in between 0 and 65535 but can also return the code for those that has a code that is greater than 65535. If you're working with characters that doesn't have emojis then we can simply go with string.charCodeAt().

        // Syntax:

            // string.charCodeAt(position)

        // Examples:

            // const str = 'Ok 👍' // str.length will show this string's length 5 cause 👍 emoji is taking 2 characters space in the string.

            // str.charCodeAt(0) // it will return 79. // same as string.codePointAt() below
            // str.charCodeAt(1) // it will return 107. // same as string.codePointAt() below
            // str.charCodeAt(2) // it will return 32. // same as string.codePointAt() below
            // str.charCodeAt(3) // it will return 55357. // it's gonna see this as single 16-bit code unit // Different from string.codePointAt() here cause of emoji. If I use this code that we get in return from emoji starting index to get a character or an emoji, the emoji I'm gonna get is question mark emoji which shows a broken character.
            // str.charCodeAt(4) // it will return 56397. // same as string.codePointAt() below
            // str.charCodeAt(5) // it will return NaN. // another difference from string.codePointAt() below. // this index is not present in our main string.
            // str.charCodeAt() // it will return 79 cause it will take empty bracket as 0 index by default. // same as string.codePointAt() below

    // 24) string.codePointAt():

    // Difference between these two is that string.charCodeAt() is UTF-16 and string.codePointAt() is Unicode. // They both take position of a character in the main string and they both return a UTF-16 bit code of that character but string.charCodeAt() can only return the code for those characters that has a code between 0 and 65535 but the string.codePointAt() it can go and return the same code for those characters that are in between 0 and 65535 but can also return the code for those that has a code that is greater than 65535. If you're working with characters that doesn't have emojis then we can simply go with string.charCodeAt().

        // Syntax:

            // string.codePointAt(position)

        // Examples:

            // const str = 'Ok 👍' // str.length will show this string's length 5 cause 👍 emoji is taking 2 characters space in the string.

            // str.codePointAt(0) // it will return 79. // same as string.charCodeAt() above
            // str.codePointAt(1) // it will return 107. // same as string.charCodeAt() above
            // str.codePointAt(2) // it will return 32. // same as string.charCodeAt() above
            // str.codePointAt(3) // it will return 128077. // it's not gonna see this as a single 16-bit code unit instead it's gonna see it as 2 16-bit code units. // Different from string.charCodeAt() here cause of emoji // now if I use this code that we get in return from emoji starting index to get an emoji, the emoji I'm gonna get is this thumbs up emoji that is written in our main string after "Ok "
            // str.codePointAt(4) // it will return 56397. // same as string.charCodeAt() above
            // str.codePointAt(5) // it will return undefined. // another difference from string.charCodeAt() above. // this index is not present in our main string.
            // str.codePointAt() // it will return 79 cause it will take empty bracket as 0 index by default. // same as string.charCodeAt() above.

    // 25) And 26) string.fromCharCode() And string.fromCodePoint(): opposite of string.charCodeAt() and string.codePointAt():

    // 25) String.fromCharCode(): // String here is string constructor object. We will create string from code.

        // Syntax:

            // String.fromCharCode(code1)
            // String.fromCharCode(code1, code2, ..., codeN)

        // Examples String.fromCharCode(code1): 

            // String.fromCharCode(79) // it will return O. Same as fromCodePoint() below
            // String.fromCharCode(107) // it will return k. Same as fromCodePoint() below
            // String.fromCharCode(32) // it will return whitespace. Same as fromCodePoint() below
            // String.fromCharCode(55357) // it will return a broken character (question mark emoji). Same as fromCodePoint() below

            // String.fromCharCode(56397) // it will return a broken character (question mark emoji). Same as fromCodePoint() below

            // String.fromCharCode(128077) // it will return a broken character (question mark emoji but different than above emoji). // Different then fromCodePoint() below cause it works on single utf 16 bit unit and this is the main difference between fromCharCode() and fromCodePoint().

        // Examples of String.fromCharCode(code1, code2, ..., codeN):

            // String.fromCharCode(79, 107, 32, 55357, 56397) // it will return a string "Ok 👍"

    // 25) String.fromCodePoint(): // String here is string constructor object. We will create string from code.

        // Syntax:

            // String.fromCodePoint(code1)
            // String.fromCodePoint(code1, code2, ..., codeN)

        // Examples of String.fromCodePoint(code1):

            // String.fromCodePoint(79) // it will return O. Same as fromCharCode() above
            // String.fromCodePoint(107) // it will return k. Same as fromCharCode() above
            // String.fromCodePoint(32) // it will return whitespace. Same as fromCharCode() above
            // String.fromCodePoint(55357) // it will return a broken character (question mark emoji). Same as fromCharCode() above

            // String.fromCodePoint(56397) // it will return a broken character (question mark emoji). Same as fromCharCode() above

            // String.fromCodePoint(128077) // it will return a thumbs up emoji.// Different then fromCharCode() above cause it works on more then single utf 16 bit unit and this is the main difference between fromCharCode() and fromCodePoint().

        // Examples of String.fromCodePoint(code1, code2, ..., codeN):

            // String.fromCodePoint(79, 107, 32, 55357, 56397) // it will return a string "Ok 👍"

            // String.fromCodePoint(79, 107, 32, 128077, 56397) // it will return a string "Ok 👍(question mark emoji for representing a broken character)"

    // 26) string.normalize(): // doesn't change the original string. It will return a new string after running the normalize() method. // Why do we need this method? Unicode assigns a single code point for each character, for example 'A' it's code point is 'U+0041' but sometimes it assigns more than 1 code point for a single character, for example this character "Ç" (C with cedilla), this character's unicode is "U+00C7" which is it's single code point but then we can also use the code for "C" (U+0043) and the code for "¸" (cedilla)(U+0327) combined we're gonna get this same "Ç", so, in JavaScript when we assign these two types of code for "Ç" to 2 different strings and compare those strings it will return false like below example: 

        // Example:

            // const string1 = '\u00C7' // it will return 'Ç' same as string2 below

            // const string2 = '\u0043\0327' // it will also return 'Ç' same as string1 above.

            // string1 === string2 // it will return false because of different codes.

            // string1.length // it will return 1
            // string2.length // it will return 2

            // string1.length === string2.length // it will also return false

            // Note: The above two strings will look the same to end user but not to app. So this is where the problem occurs. So that's why we need to use normalize().

        // Syntax:

            // string.normalize()
            // string.normalize(form) // Unicode Normalization Form: "NFC", "NFD", "NFKC" or "NFKD" by default form will use "NFC" (NFC stands for Canonical Decomposition Followed By Canonical Composition) // "NFD" (NFD stands for Canonical Decomposition)

        // Examples:

            // const string1 = '\u00C7' // it will return 'Ç' same as string2 below

            // const string2 = '\u0043\0327' // it will also return 'Ç' same as string1 above.

            // string1.codePointAt(0) // it will return 199

            // string2.codePointAt(0) // it will return 67
            // string2.codePointAt(1) // it will return 807

            //Example With "NFC" Form: //because we didn't write any form name in below example in the parameter it got set to "NFC" by default below.

                // string1.normalize() 
                // string1.length // it will return 1 
                // string1.codePointAt(0) // it will return 199

                // string2.normalize() 
                // string2.length // it will return 1 
                // string2.codePointAt(0) // it will return 199 // so after running normalize() on both string1 and string2 they become a same single unicode character. String 1 was already a single coded actually string2 got changed from this method // because we didn't write any form name in the parameter it got set to "NFC" by default.

            //Example With "NFD" Form: 

                // string1.normalize("NFD") 
                // string1.length // it will return 2 
                // string1.codePointAt(0) // it will return 67
                // string1.codePointAt(1) // it will return 807
                
                // string2.normalize("NFD") 
                // string2.length // it will return 2 
                // string2.codePointAt(0) // it will return 67
                // string2.codePointAt(1) // it will return 807 // so after running normalize() on both string1 and string2 they become a same 2 code unicode character. String 2 was already 2 code unicode actually string1 got changed from this method.

    // 28) And 29) string.toLowerCase() And string.toUpperCase(): // doesn't change the original string. Returns a new string.

        // 28) string.toLowerCase(): // doesn't change the original string. Returns a new string

            //Syntax:

                // string.toLowerCase()

            // Example: 

                // const abc = 'Abc def'

                // const strLower = abc.toLowerCase() // it will return a new string "abc def"

        // 28) string.toUpperCase(): // doesn't change the original string. Returns a new string

            //Syntax:

                // string.toUpperCase()

            // Example: 

                // const abc = 'abc def'

                // const strUpper = abc.toUpperCase() // it will return a new string "ABC DEF"

    // 29) And 30) string.toLocaleUpperCase() And string.toLocaleLowerCase(): doesn't change the original string. Returns a new string

    // 29)  string.toLocaleUpperCase(): doesn't change the original string. Returns a new string

        // Syntax:

            // string.toLocaleUpperCase()
            // string.toLocaleUpperCase(locale or array of locales)

        // Example:

            // const lower = 'istanbul'

            // English US:

                // const upper = lower.toLocaleUpperCase('en-US') // it will return a new string "ISTANBUL"
                
            // Turkish:
                
                // const upper = lower.toLocaleUpperCase('tr') // it will return a new string "İSTANBUL"

    // 30) string.toLocaleLowerCase(): doesn't change the original string. Returns a new string

        // Syntax:

            // string.toLocaleLowerCase()
            // string.toLocaleLowerCase(locale or array of locales)

        // Example:

            // const upper = 'İSTANBUL'

            // English US:

                // const upper = upper.toLocaleLowerCase('en-US') // it will return a new string "istanbul"
                
            // Turkish:
                
                // const upper = upper.toLocaleLowerCase('tr') // it will return a new string "istanbul"

    


            

        
    

        


                
            




        











            
