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


        











            
