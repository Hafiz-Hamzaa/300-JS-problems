// ---- Problems --- 101 ---- 150

// ---- Problem 101: Create a variable of type string and try to add a number on it
let name = "Umer";
let num = 123;
let finalMessage = name + num;
console.log(finalMessage);

// Problem 102:  Use typeof operator to find the datatype of the string in last question
console.log(typeof finalMessage);

// ---- Problem 103: Create a const object in javascript Can you change it to hold a number later
const obj = {};
obj.num = 125;
console.log(obj);

// ---- Problem 104: Try to add a new key to the const object in Problem 3. Were you able to do it?
obj.role = "developer";
console.log(obj);

// ---- Problem 105: Write a JS program to create a word- meaning dictionary of 5' 'words.
const dictionary = {
  apple: "a fruit that is sweet and red or green",
  book: "a set of written or printed pages bound together",
  car: "a vehicle with four wheels used for transportation",
  dog: "a domestic animal often kept as a pet",
  sun: "the star that gives light and heat to the Earth",
};
console.log(dictionary);

// ---- Problem 106: Use logical operator to find whether the age of a person lies between 10 And 20
let personAge = 20;
if (personAge > 10 && personAge < 20) {
  console.log("The age is between 11 and 19");
} else {
  console.log("The age is not between 11 and 19");
}

// ---- Problem 107: Demonstrate the use of switch case statemnent in javascript
const days = "Wednesday";
switch (days) {
  case "Monday":
    console.log("Go to School");
    break;
  case "Tuesday":
    console.log("Go to College");
    break;
  case "Wednesday":
    console.log("Go to Institute");
    break;

  default:
    console.log("Invalid days");
    break;
}

// ---- Problem 108: Write a Java Script program to find whether a number is Divisible by 2 and 3
let number = 24;
let result =
  number % 2 === 0 && number % 3 === 0
    ? "The number is divisible by 2 and 3"
    : "The number is not divisible by 2 and 3";
console.log(result);

// ---- Problem 109:  Write a Java Script program to find whether a number is Divisible by either 2 or 3
let isNum = 19;
if (isNum % 2 === 0) {
  console.log("number is divisible by 2");
} else if (isNum % 3 === 0) {
  console.log("number is divisible by 3");
} else {
  console.log("number is not divisible by 2 and 3");
}

// ---- Problem 110: Print " You can Drive" or You Cannot Drive based on age being greater than 18 using ternary operator
let age = 18;
let output = age > 18 ? "You can Drive" : "You cannot Drive";
console.log(output);

// ---- Problem 111: Write the program to print marks using for in loop
let ob = {
  ayesha: 94,
  samia: 91,
};
for (let key in ob) {
  console.log(`marks : ${ob[key]}`);
}
// ---- Problem 112: Write a program to print try again until the user enters the Correct number.
let correctNum = 80
let userNum = +prompt("Enter a number : (1-100)")
while(userNum != correctNum){
    userNum = prompt("Try again")
}
console.log("Congratulation! you guess a right number");

// ---- Problem 113: Write a function to find mean of 5 numbers
function mean(arr) {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  let avg = sum / arr.length;
  return `Mean of ${arr.length} number is : ${avg}`;
}
console.log(mean([10, 20, 30, 40, 50]));


// ---- Problem 114: What will the following print : Console.log ( " har\"".length)
console.log(' har"'.length); // 5

// ---- Problem 115: Explore the includes,startsWith & endWith function of a string
let str = "hello";
console.log(str.startsWith("h")); // true
console.log(str.endsWith("!")); // false
console.log(str.includes("ell")); // true

// ---- Problem 116: Write a program to convert a string in a lowercase
let givenStr = "DeveLoPer";
console.log(givenStr.toLowerCase());

// ---- Problem 117: Extract the amount out of this string : "Please give Rs 1000"
let extractAmount = "please give Rs 1000";
console.log(extractAmount.slice(12));

// ---- Problem 118: Try to change 4th character of a given string .Will you able to do it
let s = "hello";
console.log(s.replace("l", "p"));

// ---- Problem 119: Create an Array of numbers and take input from the user to add numbers to this array
let arr = [10,20,30]
let userInput = prompt("Enter a multiple numbers with separating commas")
let Input = userInput.split(",")
for(let val of Input){
    val = parseInt(val)
    arr.push(val)
}
console.log(arr);

// ---- Problem 120: Keep adding numbers to the array in 1 until 0 is added to the array
let emptyArr = [];
while (true) {
  let user = prompt("Enter a multiple numbers");
  let inp = user.split(",");
  let shouldBreak = false;
  for (let val of inp) {
    val = parseInt(val);
    emptyArr.push(val);
    if (val === 0) {
      shouldBreak = true;
      break;
    }
  }
  if (shouldBreak) break;
  console.log(emptyArr);
}
// ---- Problem 121: Create an array of square given numbers
let square = [2,4,6,8,10]
for(let val of square){
    console.log(val * val);
}

// ---- Problem 122: filter for numbers divsible by l0 from a given array
let data = [10 , 20 , 45 , 78 , 90 , 120 , 76 , 190]
let res = data.filter((val) => {
    return val % 10 === 0
})
console.log(res);

// ---- Problem 123: "Use reduce to calculate factorial of a given number from an array of first n natural numbers, where n is the number whose factorial needs to be calculated."
let n = 5
let a = []
for(let i = 1; i <= n; i++){
    a.push(i);
}
console.log(a);
let factorial = a.reduce((pre,curr) => {
    return pre * curr
})
console.log(factorial);

// ----- Problem 124: Create a faulty calculator using JavaScript
/* This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> +

It performs wrong operation 10% of the times */

// -------  Faulty Calculator
let num1 = +prompt("Enter a first number :")
let opt = prompt("Select any opt : (+ , - , * , /)")
let num2 = +prompt("Enter a second number :")
let random = Math.random() // 0 to 1 between
if(opt === "+"){
  if(random < 0.1){
    opt = "-"
  }
}

if(opt === "*"){
  if(random < 0.1){
    opt = "+"
  }
}

if(opt === "-"){
  if(random < 0.1){
    opt = "/"
  }
}

if(opt === "/"){
  if(random < 0.1){
    opt = "+"
  }
}

// ----- Actual Calculator
let finalResult;
if(opt === "+"){
  finalResult = num1 + num2
} else if(opt === "-"){
  finalResult = num1 - num2
}  else if(opt === "*"){
  finalResult = num1 * num2
}  else if(opt === "/"){
  finalResult = num1 / num2
}
alert(finalResult);

// ----- Problem 125: Create a business name generator by combining list of adjectives and shop name and another word

/*
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
let adj = "Crazy Amazing Fire"
let shop = "Engine Food Garments"
let another = "Bros Limited Hub"
// ---- step 1: split
let wordAdj = adj.split(" ")
let wordShop = shop.split(" ")
let wordAno = another.split(" ")
// --- step 2: random number generate 0 - 1 - 2 because there is only 3 words and index star from 0
let randAdj = Math.floor(Math.random() * 3)
let randShop =  Math.floor(Math.random() * 3)
let randAno =  Math.floor(Math.random() * 3)
// --- step 3: pick one word
let word1 = wordAdj[randAdj]
let word2 = wordShop[randShop]
let word3 = wordAno[randAno]
// --- step 4: combining
let finalWord = `${word1} ${word2} ${word3}`
console.log(finalWord);

// ----- Problem 126: Write a program using prompt function to take input of age and use alert to tell him if he can drive
let userAge = +prompt("Enter your age:")
if(userAge >= 18){
  alert("You can drive")
} else{
  alert("You cannot drive")
}

// ---- Problem 127: In Q1 use confirm to ask the user if he want to see the prompt again
let askUser = confirm("You want to see the prompt again")
if(askUser){
  askUser= +prompt("Enter your age : ")
} if(askUser >= 18){
  alert("You can drive")
}else{
  alert("You cannot drive")
}

// ---- Problem 128: Use console.error to log if user enetred negative age
// if(userAge < 0){
//   console.error("you enetered negative age")
// }

// ---- Problem 129: Change the background of the page to yellow,red or any color based on the user input
let changeColor = prompt("Enter your favourite color :")
if(changeColor){
  document.body.style.backgroundColor = changeColor 
}

// ---- Problem 130: Write a program to change the url to google.com(Redirection)  if user enter a number greater then 4
let digit = +prompt("Please enter a number:"); 
if (digit > 4) { 
  window.location.href = "https://www.google.com";
} else {
  alert("Number is not greater than 4");
}

// ---- Problem 131: Write a program to click on a button to change the text
function btn(){
  let h2 = document.querySelector("h2")
  h2.innerText = "DOM is Powerful"
}

// ---- Problem 132: Write a program to change HTML Content on a clck button
function changeText(){
  document.querySelector("p").innerText = "Hello JS"
}
function changeHTML(){
  document.querySelector("p").innerHTML = `<h1>Hello JS</h1>`
}

// ---- Problem 133: User se naam input le kar, button click pe uska naam h2 tag me greet message ke sath show karo."
let input = document.querySelector("input")
let myBtn = document.querySelector("#greet")
let Output = document.querySelector("#output")
myBtn.addEventListener("click", () => {
  Output.innerText = `Welcome ${input.value} You are learning DOM like a Pro`
  input.value = ""

})

// ----- Problem 134: Count Element Frequency in an Array
function countFrequency(arr) {
    let countFrequency = {}
    for(let val of arr){
        if(countFrequency[val]){
            countFrequency[val]++
        }else{
            countFrequency[val] = 1
        }
    }
    return countFrequency
}

console.log(countFrequency([1, 2, 2, 3, 1, 4, 2]));


// ------ Problem 135 continue on next script.js file.........