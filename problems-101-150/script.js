// ----- Problem 135: Create a navbar and change the color of its element to red
let nav = document.querySelector("ul")
nav.firstElementChild.style.color = 'red'

// ----- Problem 136: Create a table without tbody Now use "view раде Source" button to check whether it has a tbody or not
// ---- I check it to click on a view page source buton there is no tbody tag in a table iside

// ---- Problem 137: Create an cement with 3 children Now change the color of first and last elcment to green
document.body.children[2].firstElementChild.style.color = 'green'
document.body.children[2].lastElementChild.style.color = 'green'

// ---- Problem 138: Write a JS Code to change backgroundColor to all <li> tags to cyan
let bg = document.querySelectorAll("li")
bg.forEach(e => {
    e.style.backgroundColor = 'cyan'
})

// ----- Problem 139: Give random color on each box
let boxes = document.querySelectorAll(".item")
function getRandomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`;
}
function getRadius(){
    let radius = Math.floor(Math.random() * 100)
    return `${radius}px`
}
boxes.forEach((box) => {
    let randomColor = getRandomColor()
    let randomRadius = getRadius()
    box.style.backgroundColor = randomColor
    box.style.borderRadius = randomRadius
})


// Advance Function Problems :

// Problem 140 : User rest parameter to accept any number of scores and return the total
function score(...val){
    let total = 0
    val.forEach((e) => {
        total += e
    })
    return total
}
let sum = score(90,90,90,90)
console.log(sum);

// Prblem 141 : Use IIFE to show welcome message
(function(){
    console.log("Welcome! You are learning JS")
})()

// Problem 142 : Write a function that returns another function
function parent(){
    return function(){
        console.log("child")
    }
}
parent()()

// Problem 143 : Convert impure function to pure function
// let total = 0
// function addTotal(num){
//     total += num
// }

// Convert above function into pure
let total = 0
function addTotal(num){
    let newTotal = total
    newTotal += num
}

// Problem 144 : Create a closure counter function
function counter(){
    let count = 0
    return function(){
        count++
        return count
    }
}
let c = counter() // c ka apna khud ka count hai
console.log(c())
console.log(c())
console.log(c())
console.log(c())

let d = counter() // d ka apna khud ka count hai
console.log(d())
console.log(d())
console.log(d())

// Problem 145 : Discount Calculator using HOF : qkai ye function return kr rha hai aik or function or closure bh hoogya parent function kai variable ko use bh kr rha hai ye discount calculator re-usable bh hogya
function discountCalculator(originalPrice, discount) {
    let finalPrice;
    return function () {
        finalPrice = originalPrice * (1 - discount / 100);
        return `Final Price after ${discount}% discount on Rs. ${originalPrice} is Rs. ${finalPrice}`;
    }
}

let calc = discountCalculator(1500, 30);
console.log(calc()); // Output: Final Price after 30% discount on Rs. 1500 is Rs. 1050


// Problem 146 : Ek function performTask(taskName, callback) banao jo print kare:
// "Starting task: taskName" Aur callback ko call kare task complete hone ke baad: "Completed: taskName"
function performTask(taskName,callback){
    console.log(`Starting Task : ${taskName}`)
    callback(`${taskName}`)
}
performTask("Homework",function(task){
    console.log(`Completed ${task}`)
})


// Problem 147 : Ek function greetGenerator(name) banao jo return kare ek function — Jab returned function ko call karo to print ho: "Hello, name!"
function greetGenerator(name){
    return function(){
        return `Hello ${name}`
    }
}
console.log(greetGenerator("Hamza")())

// Problem 148 : createCounter() naam ka function likho jo ek function return kare — Har baar us returned function ko call karne pe count 1 se barhta jaye.
function createCounter(){
    let increment = 0
    return function(){
        increment++
        return increment
    }
}
let increaseCount = createCounter()
console.log(increaseCount())
console.log(increaseCount())
console.log(increaseCount())
console.log(increaseCount())
console.log(increaseCount())


// Problem 149 : Destructuring : Destructure the array extract frist two values 
let myArr = [100,200,300,400]
let [a,b] = myArr // a me aya 100 or b me aya 200 or kaha se nikal rahai hai myArr me se
console.log(a,b);

let vehicles = ["car","bike","bus","cycle"]
let [first,second,,fourth] = vehicles
console.log(first,second,fourth) 

// Problem 150 : Spread Operator : Take a shallow copy from the firstArr 
let firstArr = [30,60,90,120,150]
let secondArr = [...firstArr]
console.log(firstArr)
console.log(secondArr)
secondArr.pop()
console.log(secondArr) // isme 150 remove hogya hoga lekin firstArr me 150 nh remove huwa hoga 