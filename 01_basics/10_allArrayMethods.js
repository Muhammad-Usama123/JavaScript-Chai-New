// Arrow Funcrtion:

    // const func = (parameter) => { 
        //code
        //return 'something' + parameter
    // } // That's how we will write an arrow function if there will have any code under this function's curly braces before the return statement. // If we don't want to write any code before the return statement inside the arrow function's curly braces then we can simply remove return keyword and curly braces and will write just the code that we want to return like in the example below.

    // const func = (parameter) => 'something' + parameter // We will write arrow funcrtion like this if we don't want to write any code before the return statement in the arrow function.

// 01) And 02) Array.forEach() And Array.map():

    // Difference between array.forEach() and array.map() is array.map() doesn't act on the original array or change the original array instead it returns a new array and array.foreach() doesn't return anything.

// 01) array.forEach(): // We will run this method on an array when we want to run same code on all the elements of an array. // Difference between array.forEach() and array.map() is array.map() doesn't act on the original array or change the original array instead it returns a new array and array.foreach() doesn't return anything.

    //  Syntax:

        // array.forEach((elements in our array we can name it element or item or whatever we want) => {
            // code
        // }) 

    // Example:

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

        // food.forEach((item) => {console.log(item)}) // it will print all the items inside the array 1 by 1 in console.

// 2) array.map(): // Difference between array.forEach() and array.map() is array.map() doesn't act on the original array or change the original array instead it returns a new array and array.foreach() doesn't return anything.

    // Syntax:

        // array.map((elements in our array we can name it element or item or whatever we want) => {
            // code
        // }) 

    // Examples:

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

        // const bananas = food.map((item) => banana) // it will return a new array [banana, banana, banana, banana, banana, banana, banana, banana] with all the elements in main array replaced by banana in this new array. Doesn't modify the original array. Returns a new array.

        // const duplicateFood = food.map((any) => any + any) // // it will return a new array [apple + apple, carrot + carrot, guava + guava, aubergine + aubergine, banana + banana, tomato + tomato, potato + potato, avocado + avocado] 

// 03) array.filter(): returns a new array with the filtered values inside it. Doesn't change the original array. Must require a condition to return the new array based upon that condition. 

    // Syntax:

        // array.filter((elements in our array we can name it element or item or whatever we want) => {
            // code
            // return /* Must return a condition here */
        // }) 

    // Examples:

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

        // const fruits = food.filter((item) => item.type === fruit) // it will return a new array with the values that will return true [apple, guava, banana, avocado].

        // const vegetables = food.filter((item) => item.type !== fruit) // it will return a new array with the values that will return true [carrot, aubergine, tomato, potato].

// 04) array.concat(): for concatenating 2 arrays or in another words for merging 2 arrays but not just only 2 arrays, we can also use this method to concatenate an array with a value. And we can also use this method to concatenate an array with a value and also another array all three things together. And we can also use this method to concatenate an array with more then 1 array or more than 1 value. This method doesn't change the original array instead it creates a new array.


    // Syntax:

        // array0.concat(value0)
        // array0.concat(value0, value1, ..., valueN)
        // array0.concat(value0, array1)
        // array0.concat(array1, array2, ..., arrayN)

    // Example:

        // const fruits = [apple, guava, banana, avocado]
        // const vegetables = [carrot, aubergine, tomato, potato]

        // const food = fruits.concat(vegetables) // it will return a new array [apple, guava, banana, avocado, carrot, aubergine, tomato, potato]

// 05) array.find(): // used to find an element inside an array. It is almost like above explained filter method. Must return a condition.

    // Syntax:

        // array.find((element) => {
            // code
            // return /* Must return a condition here */
        // });

    // Examples: 

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

        // const banana = food.find((item) => item.color === 'yellow') // it will return banana.

        // const watermelon = food.find((item) => item === 'watermelon') // it will return undefined.

// 06) And 07) Difference Between array.findIndex() and array.indexOf(): // The only difference between these 2 methods is the array.indexOf() takes in the element itself (the element you want to search it's index in the array) and array.findIndex() takes in a callback function which lets you use a more complex code to search for the index of the element. And another difference is that the indexOf also takes a 2nd parameter which is startIndex. // We need to use array.findIndex() when you are searching for non primitive types inside your array for example like objects but we need to use array.indexOf() when you are searching for primitive types inside your array for example like booleans or numbers or strings.

// 06) array.findIndex():  Difference Between array.findIndex() and array.indexOf(): // The only difference between these 2 methods is the array.indexOf() takes in the element itself (the element you want to search it's index in the array) and array.findIndex() takes in a callback function which lets you use a more complex code to search for the index of the element. And another difference is that the indexOf also takes a 2nd parameter which is startIndex. // used to find the index of an element inside an array and return that element's index. // We need to use array.findIndex() when you are searching for non primitive types inside your array for example like objects but we need to use array.indexOf() when you are searching for primitive types inside your array for example like booleans or numbers or strings.

    // Syntax:

        // array.findIndex((element) => {
            // code
            // return /* Must return a condition here */
        // });

    // Examples: 

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

        // const bananaIndex = food.findIndex((item) => item.color === 'yellow') // it will return 4.

        // const watermelonIndex = food.findIndex((item) => item === 'watermelon') // it will return -1.

// 07) And 08) array.indexOf() And array.lastIndexOf(): // Difference between array.indexOf() And array.lastIndexOf() is array.indexOf() starts searching the index from the start of the array but the lastIndexOf() starts searching from the end of the array.

// 07) array.indexOf():  Difference Between array.findIndex() and array.indexOf(): // The only difference between these 2 methods is the array.indexOf() takes in the element itself (the element you want to search it's index in the array) and array.findIndex() takes in a callback function which lets you use a more complex code to search for the index of the element. And another difference is that the indexOf also takes a 2nd parameter which is startIndex. // We need to use array.findIndex() when you are searching for non primitive types inside your array for example like objects but we need to use array.indexOf() when you are searching for primitive types inside your array for example like booleans or numbers or strings. // Difference between array.indexOf() And array.lastIndexOf() is array.indexOf() starts searching the index from the start of the array but the lastIndexOf() starts searching from the end of the array.

    // Syntax:

        // array.indexOf(element);
        // array.indexOf(element, startIndex);

    // Examples Of array.indexOf(element):

        // const food = [apple, carrot, guava, aubergine, banana, tomato, banana, avocado]
        
        // const bananaIndex = food.indexOf(banana); it will return 4. // there are 2 banana in our main string but this method gave us the index of only 1st match.

        // const watermelonIndex = food.indexOf(watermelon); it will return -1 cause watermelon doesn't exist in the main array.

    // Example Of array.lastIndexOf(element, startIndex):

        // const bananaIndex = food.indexOf(banana, 5); it will return 6. // there are 2 banana in our main string but this method gave us the index of 2nd match cause this time we gave it startIndex 5 so it it didn't picked the 4th index banana cause it was before our startingIndex (5).

// 07) array.lastIndexOf(): // Difference between array.indexOf() And array.lastIndexOf() is array.indexOf() starts searching the index from the start of the array but the lastIndexOf() starts searching from the end of the array.

    // Syntax:

        // array.lastIndexOf(element);
        // array.lastIndexOf(element, startIndex);

    // Examples Of array.lastIndexOf(element):

        // const food = [apple, carrot, guava, aubergine, banana, tomato, banana, avocado]
        
        // const bananaIndex = food.lastIndexOf(banana); it will return 6. // there are 2 banana in our main string but this method gave us the index of only 1st match from the end of the string.

        // const watermelonIndex = food.lastIndexOf(watermelon); it will return -1 cause watermelon doesn't exist in the main array.

    // Example Of array.lastIndexOf(element, startIndex):

        // const bananaIndex = food.lastIndexOf(banana, ); it will return 4. // there are 2 banana in our main string but this method gave us the index of only 2nd match from the end of the string cause this time we passed the 2nd parameter startIndex.

// 08) array.some(): // when atleast 1 element of the array matches the condition it will stop and will return true and if none of the element inside the array matches the given condition it will return false.

    // Syntax:

        // array.some((element) => {
            //code
            // return /* a condition */
        // })

    // Examples:

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

        // const hasABanana = food.some((item) => item === banana) // it will return true
        
        // const hasAWatermelon = food.some((item) => item === watermelon) // it will return false cause no watermelon is found inside the given array.
        
// 08) array.every(): // opposite of above explained array.some(), means array.every() will return true if all the elements inside the given array return true else false.
        
    // Syntax:
        
        // array.every((element) => {
        //code
        // return /* a condition */
        // })
        
    // Examples:
        
        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]
        
        // const allBananas = food.every((item) => item === banana) // it will return false cause not every element inside the given array is banana.

// 09) array.includes(): almost same as above explained some method except the array.includes() takes in the element itself inside the parameter bracket but array.some() takes a callback function and in array.includes() we can also search for the element from an index as the 2nd parameter. Includes also returns true or false same like array.some() above. If the array includes the searched element then it will return true else false.

    // Syntax:

        // array.inlcudes(searchElement)
        // array.inlcudes(searchElement, fromIndex)

    // Examples of array.inlcudes(searchElement):

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]
        
        // const hasPotato = food.inlcudes(potato) // it will return true.
        
        // const hasOnion = food.inlcudes(onion) // it will return false.

// 10) And 11) array.push And array.unshift(): Difference between array.push() and array.unshift() is array.push adds element at the end of the main array and unshift adds element at the start of the main array.

// 10) array.push(): We can use this method if we want to add an element to the end of an array. It modifies the original array. Difference between array.push() and array.unshift() is array.push adds element at the end of the main array and unshift adds element at the start of the main array.

    // Syntax: 

        // array.push(element)

    // Example:
        
        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]
        
        // const newLength = food.push(onion); // it will return 9 and will add onion at the end inside main array.
        
        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado, onion]
    
// 11) array.unshift: changes the original array. Difference between array.push() and array.unshift() is array.push adds element at the end of the main array and unshift adds element at the start of the main array.

    // Syntax: 

        // array.unshift(element)

    // Examples:

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

        // const newLength = food.push(onion); // it will return 9 and will add onion at the start inside main array.

// 14) And 15) array.pop() And array.shift(): Difference between array.pop() and array.shift() is that array.pop() removes the element from the end but array.shift() removes the element from start.

// 14) array.pop(): removes an element from the end of the array. changes the original array. Difference between array.pop() and array.shift() is that array.pop() removes the element from the end but array.shift() removes the element from start.

    // Syntax:

        // array.pop()

    // Example:

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

        // const removedItem = food.pop(); // it will return removed item which is in this case avocado. Pop removes last element and returns it.

// 15) array.shift: removes an element from the start of the array. changes the original array. Difference between array.pop() and array.shift() is that array.pop() removes the element from the end but array.shift() removes the element from start.

    // Syntax:

        // array.shift()

    // Example:

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

        // const removedItem = food.pop(); // it will return removed item which is in this case apple. Shift removes 1st element and returns it.

// 16) And 17) array.toString() And array.join(): // Difference between these 2 methods is array.toString() gives us the values inside arrays in a string but the values will be separated by commas automatically, but in array.join() the array values will be separated by our given separator in the string but if we will not give any separator as a parameter inside that bracket then our values in this method will be comma separated too automatically if we will pass an empty string in array.join() parameter then the values will not be separated even with whitespaces.

// 16) array.toString(): This method is used whenever we want to convert an array into a string. doesn't take any parameters. Doesn't change the original array. // Difference between these 2 methods is array.toString() gives us the values inside arrays in a string but the values will be separated by commas automatically, but in array.join() the array values will be separated by our given separator in the string but if we will not give any separator as a parameter inside that bracket then our values in this method will be comma separated too automatically if we will pass an empty string in array.join() parameter then the values will not be separated even with whitespaces.

    // Syntax:

        // array.toString()

    // Example:

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]
        
        // const foodStr = food.toString() it will return "apple,carrot,guava,aubergine,banana,tomato,potato,avocado". If we want to convert an array into string but we don't want commas inside that string then we can use array.join() which is explained below.

// 17) array.join(): // Difference between these 2 methods is array.toString() gives us the values inside arrays in a string but the values will be separated by commas automatically, but in array.join() the array values will be separated by our given separator in the string but if we will not give any separator as a parameter inside that bracket then our values in this method will be comma separated too automatically and if we will pass an empty string in array.join() parameter then the values will not be separated even with whitespaces. 

    // Syntax:

        // array.join(separator)

    // Examples:

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]
        
        // const foodStr = food.join() it will return "apple,carrot,guava,aubergine,banana,tomato,potato,avocado"

        // const foodStr1 = food.join(', ') it will return "apple, carrot, guava, aubergine, banana, tomato, potato, avocado"

        // const foodStr2 = food.join(' + ') it will return "apple + carrot + guava + aubergine + banana + tomato + potato + avocado"

        // const foodStr3 = food.join('') it will return "applecarrotguavaauberginebananatomatopotatoavocado"

// 18) array.fill(): it will fill the whole array with the given element in the parameter replacing all the original values of that array with that element. Changes the original array.

    // Syntax:

        // array.fill(element)
        // array.fill(element, startIndex)
        // array.fill(element, startIndex, endIndex)

    // Example Of array.fill(element): 

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]
        
        // food.fill(banana) // it will return [banana, banana, banana, banana, banana, banana, banana, banana]

    // Example Of array.fill(element, startIndex): 

        // food.fill(banana, 2) // it will return [apple, carrot, banana, banana, banana, banana, banana, banana]

    // Example Of array.fill(element, startIndex, endIndex): 

        // food.fill(banana, 2, 6) // it will return [apple, carrot, banana, banana, banana, banana, potato, avocado]

// 19) array.copyWithin(): Whenever we want to copy some elements in our array to a different position inside the same array. Modifies the original array.

    // Syntax: 

        // array.copyWithin(targetIndex)
        // array.copyWithin(targetIndex, startIndex)
        // array.copyWithin(targetIndex, startIndex, endIndex)

    // Example Of array.copyWithin(targetIndex):

        // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

        // food.copyWithin(2) // it will return [apple, carrot, apple, carrot, guava, aubergine, banana, tomato] copied the 1st 2 elements and then fill the whole array from 1st to 6 element of the array doesn't include the last 2 array elements cause this method doesn't change the array length.
        
    // Example Of array.copyWithin(targetIndex, startIndex):

        // food.copyWithin(2, 4) // it will return [apple, carrot,  banana, tomato, potato, avocado, potato, avocado] cause 1st it copied the 1st 2 elements because of 1st parameter then cause of 2nd parameter it starts copying from index 4 to the end of the array then 2 elements still left for occupying the array length so the last 2 element will get coppied again.

    // Example Of array.copyWithin(targetIndex, startIndex, endIndex):

        // food.copyWithin(2, 4, 6) // it will return [apple, carrot,  banana, tomato, banana, tomato, potato, avocado]

// 20) array.slice(): Whenever we want to take a slice of our array. Doesn't modify the original array.

    // Syntax:

        // array.slice()
        // array.slice(startIndex)
        // array.slice(startIndex, endIndex)

    // Example Of array.slice():

    // const food = [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

    // const foodSlice = food.slice() it will return a new array [apple, carrot, guava, aubergine, banana, tomato, potato, avocado]

    // Example Of array.slice(startIndex):

        // const foodSlice = food.slice(2) it will return a new array [guava, aubergine, banana, tomato, potato, avocado]


    // Example Of array.slice(startIndex, endIndex):

        // const foodSlice = food.slice(2, 4) it will return a new array [guava, aubergine]

// 21) array.splice(): this method is used to insert or to replace or to remove an element or elements from an array. Changes the original array. Returns removed elements in an array.

    // Syntax: 

        // array.splice(start)
        // array.splice(start, deleteCount)
        // array.splice(start, deleteCount, item1)
        // array.splice(start, deleteCount, item1, item2, ..., itemN)

    // Example Of array.splice(start):

        // const months = ['Jan', 'February', 'March', 'April']

        // months.splice(0) // our array will remain unchanged ['Jan', 'February', 'March', 'April'] and it will return an empty array cause this method doesn't removed anything from our original array.

    // Example Of array.splice(start, deleteCount):

        // months.splice(0, 1) // 1st element will be removed from our original array ['February', 'March', 'April'] and it will return the removed element in an array which is ['Jan'].

    // Example Of array.splice(start, deleteCount, item1):

        // months.splice(0, 1, 'January') // 1st element will be removed and replaced by new element 'January' from our original array ['January', 'February', 'March', 'April'] and it will return the removed element in an array which is ['Jan'].

// 22) array.sort(): if we want to sort an array. changes the original array. Sort by ascending order by default or in alphabetical order by default.

    // Syntax:
        
        // array.sort()
        // array.sort((a, b) => {}) // If the return value will be greater than 0 then it will sort a after b, if less than 0 then it will sort a before b and if equal to 0 then it will keep original order of a and b.

    // Examples of array.sort():

        // const months = ['Jan', 'March', 'April', 'June']
        // const numbers = [1, 5, 80, 9, 6]

        // months.sort() // it will sort our original array in ascending order ['April', 'Jan', 'June', 'March']

        // numbers.sort() // it will sort our original array like this [1, 5, 6, 80, 9] because sort 1st converts our numbers into string and then compare these strings in utf-16 code units order so that's why 80 is sorted before 9 in the sorted array.

    // Example Of array.sort((a, b) => {}):

        // numbers.sort((a, b) => {return a - b}) // it will sort like this [1, 5, 6, 9, 80]

// 23) array.reverse(): Whenever we want to reverse an array. Changes the original array.

    // Syntax:

        // array.reverse()

    // Example:

        // const numbers = [1, 2, 3, 4, 5] 

        // numbers.reverse() // it will modify our original array like this [5, 4, 3, 2, 1]

// 24) Array.from(): Whenever we want to convert an arrayLike to an array. This is the array object not an array we create using const or let. Array like means for example an array like object or a string.

    // Syntax:

        // Array.from(arrayLike)
        // Array.from(arrayLike, mapFunction) // mapFunction looks like this (element) => Number(element)

    // Example Of Array.from(arrayLike):

        // const arrayLikeObject = {
            // 0: 'a',
            // 1: 'b',
            // 2: 'c',
            // length: 3 
        // } // this is just for example that what is an arrayLikeObject can maybe look like.

        // const str = "1234"

        // const numbers = Array.from(str) // it will return an array ["1", "2", "3", "4"]

    // Example Of // Array.from(arrayLike, mapFunction) // mapFunction looks like this (element) => Number(element):

        //  const numbers = Array.from(str, (element) => Number(element)); // it will return an array [1, 2, 3, 4].

// 25) Array.isArray(): for checking that whether a value is an array or not. This is the Array object not the array.

    // Syntax:

        // Array.isArray(value);

    // Example:

        // const food = [banana, tomato, potato, avocado]
        // const obj = {foo: 123};

        // Array.isArray(food); it will return true.
        // Array.isArray('foobar'); it will return false.
        // Array.isArray(obj); it will return false.
        // Array.isArray(undefined); it will return false.

// 26) array.valueOf(): copies the array.

    // Syntax:

        // array.valueOf();

    // Example: 

        // const food = [banana, tomato, potato, avocado]

        // const foodCopy = food.valueOf() // it will copy the array food into this foodCopy here.

// 27) array.entries(): use an array to get its entries. Doesn't change the original array. Returns a new Array Iterator object that contains the key value pairs for each index in an array.

    // Syntax: 

        // array.entries();

    // Example: 

        // const food = [banana, tomato, potato, avocado]

        // const foodEntries = food.entries() // we can see the return values by using loop or by spread operator, both examples are below.

        // Example for seeing values inside foodEntries using loop:

            // for (let element of foodEntries){
                // console.log(element);
            // } // it will print these arrays in console one by one [0, banana] [1, tomato] [2, potato]    [3, avocado]

        // Example for seeing values inside foodEntries using spread operator:

            // [...foodEntries] // in this case we'll get an array with all the values inside it like this [[0, banana], [1, tomato], [2, potato], [3, avocado]]

// 28) array.keys(): almost same as array.entries() except this only returns the keys of an array. Doesn't change the original array. Returns a new Array Iterator object that contains the keys.

    // Syntax: 

        // array.keys()

    // Example:

        // const food = [banana, tomato, potato, avocado]

        // const foodKeys = food.keys()

        // Example for seeing values inside foodKeys using loop:

            // for (let key of foodKeys){
                // console.log(key);
            // } // it will print 0 1 2 3 one by one in console.

        // Example for seeing values inside foodEntries using spread operator:

            // [...foodKeys] // in this case we'll get an array with all the values inside it like this [0, 1, 2, 3]

// 29) array.values(): almost same as array.entries() and array.keys() except this only returns the values of an array. Doesn't change the original array. Returns a new Array Iterator object that contains the values.

    // Syntax: 

        // array.values()

    // Example:

        // const food = [banana, tomato, potato, avocado]

        // const foodValues = food.values()

        // Example for seeing values inside foodKeys using loop:

            // for (let value of foodValues){
                // console.log(value);
            // } // it will print banana, tomato, potato and avocado one by one in console.

        // Example for seeing values inside foodEntries using spread operator:

            // [...foodValues] // in this case we'll get an array with all the values inside it like this [banana, tomato, potato, avocado]

// 30) array.reduce(): Whenever we want to reduce our array elements into one single value at the end.

    // Syntax:

        // array.reduce(callback Function)
        // array.reduce(callback Function, initialValue) // callback function looks like this (previousValue, currentValue) => {
            // code
            // return /* Must return a value */
        // }

    // Example Of array.reduce(callback Function):

        // const numbers = [1, 2, 3, 4]

        // const reducer = (previousValue, currentValue) => {
            // return previousValue + currentValue;
        // }

        // const sum = numbers.reduce(reducer); // it will return 10

    // Example Of array.reduce(callback Function, initialValue):

        // const numbers = [1, 2, 3, 4]

        // const reducer = (previousValue, currentValue) => {
            // return previousValue + currentValue;
        // }

        // const sum = numbers.reduce(reducer, 0); // it will return 10

// 30) array.reduceRight(): Almost same as above explained array.reduce() but array.reduceRight() operates from right to left means it starts from the end of the array. Whenever we want to reduce our array elements into one single value at the end.

    // Syntax:

        // array.reduceRight(callback Function)
        // array.reduceRight(callback Function, initialValue) // callback function looks like this (previousValue, currentValue) => {
            // code
            // return /* Must return a value */
        // }

    // Example Of array.reduceRight(callback Function):

        // const numbers = [1, 2, 3, 4]

        // const reducer = (previousValue, currentValue) => {
            // return previousValue + currentValue;
        // }

        // const sum = numbers.reduceRight(reducer); // it will return 10

    // Example Of array.reduceRight(callback Function, initialValue):

        // const numbers = [1, 2, 3, 4]

        // const reducer = (previousValue, currentValue) => {
            // return previousValue + currentValue;
        // }

        // const sum = numbers.reduceRight(reducer, 0); // it will return 10









        















    




    















