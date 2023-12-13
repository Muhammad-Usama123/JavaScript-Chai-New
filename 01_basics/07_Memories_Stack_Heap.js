// Memories:

    // There are 2 types of memories:

        // 1) Stack Memory:

            // All primitive datatypes use stack memory. In stack memory we get the copy of variable.

            // Example:

                // let myYoutubeName = "Muhammad Usama"
                // let anotherName = myYoutubeName

                // console.log(anotherName); // "Muhammad Usama" will be printed in console.

                // anotherName = "Chai Aur Code"

                //console.log(anotherName) // "Chai Aur Code" will be printed in console.
                //console.log(myYoutubeName) // "Muhammad Usama" will be printed in console.

        // 2) Heap Memory:

            // All non primitive datatypes use heap memory. In heap memory we get the original value reference, so whatever we will change in that value it will get changed in original variable too.

            // Example: 

                // let userOne = {
                    // email: "user@google.com",
                    // upi: "user@ybl"
                // }

                // let userTwo = userOne

                // userTwo.email = "abc@google.com"

                // console.log(userOne.email) // "abc@google.com" will be printed in console.
                // console.log(userTwo.email) // "abc@google.com" will be printed in console.

