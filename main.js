/*
    Learning objectives assessed in this exercise:
        1. Functions, arguments, parameters, return values
        2. Array iteration
        3. Accessing object properties
        4. Algorithmic thinking
        5. String templates

    INSTRUCTIONS:
        1. Write a function named `createFullNames`.
        2. The function should accept a single array of customer objects as input.
        3. The function should return an array.
        4. The items in the array should be the concatenation of the first
                and last name of each active customer object in the input array.
        5. If the customer is active, or current, their name should be put
            into the new array. If the customer is not active, the string of
            "inactive" should be put into the array.
        6. Your function should work if either of these arrays below are provided.
*/


// **********  Do not touch this code  **********
const bankCustomers = [
    { id: 1, name: { first: "Ambros", last: "Zanre" }, email: "azanre0@forbes.com", active: false },
    { id: 2, name: { first: "Dermot", last: "Sweetnam" }, email: "dsweetnam1@fda.gov", active: true },
    { id: 3, name: { first: "Shirlee", last: "Lis" }, email: "slis2@baidu.com", active: true },
    { id: 4, name: { first: "Lurline", last: "Tucsell" }, email: "ltucsell3@comcast.net", active: false },
    { id: 5, name: { first: "Tarra", last: "Antonucci" }, email: "tantonucci4@cbsnews.com", active: false },
    { id: 6, name: { first: "Lucina", last: "Oglesbee" }, email: "loglesbee5@rambler.ru", active: false },
    { id: 7, name: { first: "Blair", last: "Palser" }, email: "bpalser6@accuweather.com", active: true },
    { id: 8, name: { first: "Erna", last: "Nuzzti" }, email: "enuzzti7@bigcartel.com", active: false },
    { id: 9, name: { first: "Joshia", last: "Chatwood" }, email: "jchatwood8@xing.com", active: false },
    { id: 10, name: { first: "Asher", last: "Martinello" }, email: "amartinello9@buzzfeed.com", active: false }
]


const ticketHolders = [
    { id: 1, current: true, name: { first: "Lindi", last: "Blaksland" }, age: 37 },
    { id: 2, current: true, name: { first: "Pebrook", last: "Pidgley" }, age: 44 },
    { id: 3, current: true, name: { first: "Shae", last: "Lauret" }, age: 55 },
    { id: 4, current: false, name: { first: "Elizabeth", last: "Beedon" }, age: 32 },
    { id: 5, current: false, name: { first: "Freedman", last: "Humberstone" }, age: 44 },
    { id: 6, current: true, name: { first: "Gunter", last: "Ciementini" }, age: 29 },
    { id: 7, current: false, name: { first: "Agnes", last: "Verbeek" }, age: 49 },
    { id: 8, current: false, name: { first: "Conrad", last: "Carcass" }, age: 55 },
    { id: 9, current: true, name: { first: "Jody", last: "Brocket" }, age: 44 },
    { id: 10, current: false, name: { first: "Phillip", last: "Shackell" }, age: 53 }
]
// **********  Do not touch this code  **********



/*
    Define your function here
*/






/*
    Invoke your function here and pass either array as an argument.
    You can console.log() the results and run `node main.js` in the
    terminal to test your algorithm.
*/