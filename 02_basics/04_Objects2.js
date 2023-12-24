// const tinderUser = new Object() // creating object through constructor.

// const tinderUser = {} // creating object through literal.

// tinderUser.id = "123abc" // adding properties inside above declared tinderUser object.
// tinderUser.name = "123abcname"
// tinderUser.isLoggedIn = false

// console.log(tinderUser)

// const regularUser = {
    // email: "123abc@gmail.com",
    // fullname: {
        // userfullname: {
            // firstname: "abcfirstname"
            // lastname: "abclastname"
        // }
    // }
// } // objects chaining.

// console.log(regularUser.fullname.userfullname.firstname) // accessing objects inside object.

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// console.log(obj3) // it will print {obj1: {1: "a", 2: "b"}, obj2: {3: "a", 4: "b"}} in console.

// Object.assign(): for merging different objects keys and values pairs in a single object. // but 90% of the time we'll use spread operator method for this same work which is written in line 43 below.

    // Syntax:

        // Object.assign(target, source1, source2, ..., sourceN)

    // Example:

        // const obj5 = Object.assign({}, obj1, obj2, obj4)

        // console.log(obj5) it will print {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"} in console.

// const obj6 = {...obj1, ...obj2} // 90% of the time we'll use this method instead of Object.assign() method above.

// we'll use below syntax lots of time when we'll get data from our database.

// const users = [
    // {
//         id: 1,
//         email: "abc1@gmail.com"
//     },
//     {
//         id: 1,
//         email: "abc1@gmail.com"
//     },
//     {
//         id: 1,
//         email: "abc1@gmail.com"
//     },
//     {
//         id: 1,
//         email: "abc1@gmail.com"
//     }
// ]

// users[1].email // for accessing email property of 2nd object in above array.

// console.log(Object.keys(tinderUser)) // it will print all the keys of above declared object named "tinderUser" in an array like this ['id', 'name', 'isLoggedIn']

// console.log(Object.values(tinderUser)) // it will print all the values of above declared object named "tinderUser" in an array like this ['123abc', '123abcname', false]

// console.log(Object.entries(tinderUser)) // it will print all the keys and values of above declared object named "tinderUser" in an array like this [['id', '123abc'], ['name', '123abcname'], ['isLoggedIn', false]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //it will print true in console cause the property 'isLoggedIn' exists in object named tinderUser which is declared above. 

// Objects Destructuring:

    // const course = {
        // coursename: 'JavaScript in hindi',
        // price: '000',
        // courseInstructor: 'Chai'
    // } // we'll destructure this object we don't have to access this object's properties like course.coursename or course.price etc. etc. again and again.

    // const {courseInstructor} = course // destructured the above object named "course" property "courseInstructor".
    
    // console.log(courseInstructor) // now we can directly access this courseInstructor directly after destructuring.
    
    // const {courseInstructor: instructor} = course // destructured the above object named "course" property "courseInstructor". // in this line of code I mentioned during destructuring that I will call this courseInstructor property with the name of instructor wherever I want to use this property in this page.
    
    // console.log(instructor) // now we are accessing courseInstructor property with the name of instructor cause I mentioned it in line 88.

// react object destructuring example:

    // const navBar = (props.company // normal way of accessing a property of props object without destructuring the object) => {
// 
    // }

    // const navBar = ({company} // now in this line we are accessing company property from props object with destructuring) => {
// 
    // }

// API And Json:

// json object looks like below object:
// {
    // "name": "abc",
    // "coursename": "JavaScript in hindi",
    // "price": "free"
// }

// sometimes api response comes in array form like in below example:
// [
    // {},
    // {},
    // {}
// ]



