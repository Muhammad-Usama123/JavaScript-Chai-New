// dates compare, store and declare. date is an object. When we don't provide time in date argument the time gets automatically set at 12:00:00 Am. We also have timestamps in date.

// let myDate = new Date() // gives us the date and time of the time of execution.
// console.log(myDate.toString()) // it will print  in console.
// console.log(myDate.toDateString()) // it will print  in console.
// console.log(myDate.toLocaleString()) // it will print  in console.
// console.log(typeof myDate) // it will print object in console.

// let myCreatedDate = new Date(2023, 0, 23) // declared my desired date. // months start from 0 in this format
// let myCreatedDate1 = new Date(2023, 0, 23, 5, 3) // declared my desired date and time. // months start from 0 in this format
// let myCreatedDate2 = new Date("2023-01-14") // declared my desired date and time in yy-mm-dd format. // months start from 01 in this format
// let myCreatedDate3 = new Date("01-14-2023") // declared my desired date and time in mm-dd-yy format. // months start from 01 in this format
// console.log(myCreatedDate.toDateString()) // it will print 'Mon Jan 23 2023' in console.
// console.log(myCreatedDate1.toLocaleString()) // it will print '1/23/2023 5:03:00 AM' in console.
// console.log(myCreatedDate2.toLocaleString()) // it will print '1/14/2023 12:00:00 AM' in console.

// We also have timestamps in date. When we want to see the exact timestamp value specially when we'll design quizes and polls in JavaScript like who gives the fastest answer according to that we'll declare winner etc. etc., Examples below:

    // let myTimeStamp = Date.now() // this will give us time in milisecs from 1st Jan 1970. // means it will give us a long value in milisecs calculated from 1st Jan 1970 to the time of declaring this myTimeStamp variable. Now extracting any value from this milisecond value becomes difficult sometimes. for comparing time below is the example:

        // console.log(myCreatedDate.getTime()) // this will calculate the exact time in milisec from 1st Jan 1970 to the day we declared this variable.

        // console.log(myTimeStamp) // now by comparing the above console log "console.log(myCreatedDate.getTime())" and this console log we can get the time like who gave the fastest answer of quiz or who booked the hotel room 1st etc. etc.
        // console.log(Date.now()/1000) // for converting milisec time into seconds but for comparision purposes we'll always compare between milisec values. But there is a problem with it that it sometimes gives decimal values so for avoiding this we'll use Math.floor() or Math.round() or Math.ceil() method for avoiding decimal values like in example below:

            // console.log(Math.floor(Date.now()/1000)) //now it will round of the decimal values to lowest round of value cause we used Math.floor().

// now suppose we declared new Date now we don't want to convert it to string or see the whole date or we want to extract some other values that Date gives us with the date so we can use methods like Date.getDate() // for getting only date or Date.getDay() or Date.getFullYear() or Date.getHours() or Date.getMilliseconds() etc etc. like in below example:

// let newDate = new Date()

// console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
// console.log(newDate.getHours())
// console.log(newDate.getMilliseconds()) etc etc. // We can see other available methods by writing "newDate." and visual studio normally shows us available methods after doing this. Month starts from 0 in this case or for avoiding this case we can follow the example below:

// console.log(newDate.getMonth() + 1) // now by adding getMonth() with 1 now we'll get month values from 1.

// newDate.toLocaleString() // This method is important method cause we define an object by this method and from that object we can get values according to our needs like below example:

// newDate.toLocaleString('default' // This 1st parameter gets the internationalization, {
    // weekday: "long" // whatever we want we can define in this object // ctrl + space // intellisense of vsCode // shows us available properties in this object.
// })

