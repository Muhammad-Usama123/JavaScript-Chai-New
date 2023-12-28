// In this video we'll see how code gets executed in javascript. There are two ways in which javascript executes our code. We'll see how functions get into call stack memory, how they get executed, and how they come out from that call stack memory after get executed. We'll also see that how we can add our JavaScript files in browser and we can visually see the way of working of call stack memory in the browser.

// JavaScript Execution Context:

    // This means that whatever file we created of js code, how javascript will run that code (execute that code.). Javascript runs our code in two phases. Remember 1 thing that whenever we give JavaScript any code, so the 1st thing that will get created everytime is "global execution context" and whererever global execution context will get created, so this global execution context will be referred to "this" keyword means in this "this" variable global execution context gets stored. // Browser's global execution context is different then node.js, bun, dino etc. In browser's global execution context we get window object. JavaScript is single threaded language.

    // 1) Global Execution Context: Or Global Environment

        // So the whatever code we want to run it gets run through global Execution and it gets allocated to "this" keyword.

    // 2) Function Execution Context:

    // 3) Eval Execution Context:

        // This is a property in itself of global object. So we can say it also is a type of global.

// JavaScript Code Execution Phases:

    // 1) Memory Creation Phase:

        // In this phase whatever variables etc. we declared so the memory gets allocated for them to get stored.

        // Example: 

            // let val1 = 10
            // let val2 = 5

            //function addNum(num1, num2){
                // let total = num1 + num2
                // return total 
            // }

            //let result1 = addNum(val1, val2)
            //let result2 = addNum(10, 2)

            // Now in memory creation phase what happens with this above code from line 25 to line 34 is as follows:

            // val1 gets saved as undefined
            // val2 gets saved as undefined
            // addNum gets saved with its function definition. 
            // result1 gets saved as undefined.  
            // result2 gets saved as undefined.  

    // 2) Execution Phase:

        // In this phase our code gets executed like whatever operation we wrote inside our code to get performed like addition subtraction etc. all the operations.

        // Example: 

            // let val1 = 10
            // let val2 = 5

            //function addNum(num1, num2){
                // let total = num1 + num2
                // return total 
            // }

            //let result1 = addNum(val1, val2)
            //let result2 = addNum(10, 2)

            // Now in execution phase what happens with this above code from line 50 to line 59 is as follows:

                // val1 with its value 10
                // val2 with its value 5
                // after line 63 and 64, whole work that we defined in line 67 to line 83 below will happen and then comes the result1 value  which will be 15.
                // after line 63, 64 and 65, whole work that we defined in line 67 to line 83 below will happen but according to the values defined for result2 variable this time and then comes the result2 value  which will be 12.

                //New Executional Context:

                // now the code between line 52 to 57 above doesn't do anything in this phase cause function name and definition already stored in memory creation phase above adn there is nothing to execute in these mentioned lines of code, so now we'll go to line 58 in line 58 there is a variable named result1 in which function execution is stored with argumentsand when the function will be executed the return value of that function will also get stored in this variable named "result1", so now in line 58 when the function named "addNum" will get called, so this function named "addNum" will create its own new execution context and in this new execution context there will be two things available in this new execution context named "new variable environment" and "execution thread" and below are the details of these 2 things that are available in our new execution context created by the calling of the function named "addNum()" and the same thing will happen which is explained in this whole line 66 whenever we call a function in execution context. Now in this new executional context both the phases of code execution named "Memory Creation Phase" and "Execution Phase" will work again for this new executional context. Whenever we call a function in execution context, this same process will happen that is defined in this whole line. Global execution context gets defined only 1 time at the starting of code execution but function execution context will get defined everytime when a new function is called. Below are the details of these 2 things named "Memory creation phase" and "Execution phase" that are available in our new execution context created by the calling of the function named "addNum()"

                // Memory Creation Phase In New Functional Execution Context:

                    // val1 will be undefined 
                    // val2 will be undefined
                    // total will be undefined

                // Execution Context Phase In New Functional Execution Context:

                    // num1 will be 10
                    // num2 will be 5
                    // total will be 15 and this total will gets returned to parent executional context or global executional context.

            // This above new functional execution context gets deleted when the function finishes its work and return the value in result if that function was returning anything and we'll be get back to our global execution context's "execution phase".

// Call Stack:

    // Now 1st thing that will get into this will be execution context and then the number of new functional executional context depends upon the number we call any function in our code so whenever a function will be called a new execution context will get into call stack and after the execution of function that new functional executional context will get deleted from the call stack. If we call function inside function in new functional executional context so the LIFO concept will work here means the last child functionai executional context of that new main parent functional executional context will get executed and will be deleted then 2nd last then 3rd last and then the main parent function will get executed after the execution of all its child functional executional contexts and it will gets deleted too from the call stack only global executional context will remain in the call stack.