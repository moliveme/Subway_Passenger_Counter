// document.getElementById("count-el").innerText = 5

let count = 0 // declaration, initialization

// console.log(count) 
// console is used for debugging, 
// can only access var after declaration

// challenge

// let myAge = 18

// console.log(myAge)


// only camel case allowed for var names
// temp is now refering to an element
let temp = document.getElementById("count-el")
console.log(temp) 

function increment() { // function, aka 'command'
    
    // cant increment a string, 
    // temp.innerText += 1
    // but if you do below, count is converted to string and assigned
    // to the element's innertext
    count = count + 1
    temp.innerText = count

    console.log(temp)

}

// let variables have a 'block scope' 
// (scope only inside block where its declared)