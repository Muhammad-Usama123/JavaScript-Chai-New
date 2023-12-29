// html collection, node collection and array are 3 different things.

// textContent, innerHTML, innerText.

// document.getElementById(), document.getElementsByClassName(), document.t.getElementsByTagName(), document.t.getElementsByTagNameNS(), document.querySelector('h2'), document.querySelector('#title'), document.querySelector('.heading'), document.querySelector('input[type="password"]'), document.querySelector('p:first-child'), document.querySelectorAll('')

// Query Selector:

    // const myUl = document.querySelector('ul')
    // const turnGreen = myUl.querySelector('li')
    // turnGreen.style.backgroundColor = "green"
    // turnGreen.style.padding = "10px"
    // turnGreen.innerText = "five"

// Query Selector All:

    // const tempLiList = document.querySelectorAll('li') // it will give us node list in which all the li html tags will be available that we wrote in our html file, this nodelist looks like array but it is not a proper array, for applying array methods on it like array.map() array.filter() etc. we'll have to 1st convert this node list into an array by using "Array.from('tempLiList')".

    // tempLiList.style.color = 'green' // it will throw error // this error will appear even if there is only one li tag in our html file so the the solution is line 20 below.
    // tempLiList[0].style.color = 'green' // now it will change the color of 1st li tag to green, which is at index 0 in this nodelist.

    // tempLiList.forEach(function(li){
        // l.style.backgroundColor = 'green'
    // } )// it will change the background color of all li tags in our html file to green. Some similar things to array are also available to this nodeList like array.forEach(), indexesetc. but if we want to access all array methods on this nodelist then we'll have to convert this nodelist into array from "Array.from()" method.

// Get Element  By Class Name:

    // const tempClassList = document.getElementsByClassName('list-item') // it will return a HTML collection which looks like array but different then array, also node list and HTML collection are different too. We can convert HTML collection into array through "Array.from()".

    // tempClassList.forEach(function(li){
        // console.log(li)
    // }) // it will through error cause HTML collection don't have forEach() method for using this method we'll have to convert this HTML collection into array like in line 34 below.

    // const myConvertedArray = Array.from(tempClassList) // now the HTML collection stored inside tempClassList variable is now converted into an array and now we can use all array methods on it.

    // myConvertedArray.forEach(function(li){
        // li.style.color = 'blue';
        // li.style.backgroundColor = 'green';
        // li.style.padding = '15px';
    // }) // it will change all li tags text's color into blue and their background color into green and it will give all li tags padding of 15pixels.


