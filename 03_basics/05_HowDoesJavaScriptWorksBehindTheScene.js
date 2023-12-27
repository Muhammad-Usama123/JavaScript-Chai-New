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

    // 2) Execution Phase:

        // In this phase our code gets executed like whatever operation we wrote inside our code to get performed like addition subtraction etc. all the operations.