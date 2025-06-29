// ---- Problems 051-100

// ---- Problem 51:  Count characters in a string
let str = "javascript"
console.log(str.length);

// ---- Problem 52: Capitalize full string
let capitalize = "hello world"
console.log(capitalize.toUpperCase());

// ---- Problem 53: Get first and last chracter
let word = "coding"
for(let val of word){
    if(val === word.charAt(0)){
        console.log(val);
    } if(val === word.charAt(word.length-1)){
        console.log(val);
    }
}

// ----- Problem 54:  Get the character at 5th index
let role = "developer"
console.log(role.charAt(5));

// ---- Problem 55:  Check if string includes the word "script"
let message = "I love javaScript"
console.log(message.toLowerCase().includes("script"));

// ---- Problem 56:  Check if string starts with "Hello"
let string = "Hello world"
console.log(string.startsWith("Hello"));

// ---- Problem 57: Slice from index 2 to 6
let extractStr = "JavaScript"
console.log(extractStr.slice(2,6))

// ---- Problem 58: Reverse a string using loop
let reverse = "hello"
for(let i = reverse.length-1; i >= 0; i--){
    console.log(reverse[i]);
}

// ---- Problem 59:  Count how many times "a" appears
let fruit = "banana"
let count = 0
for(let val of fruit){
    if(val === "a"){
        count++
    }
}
console.log(count);

// ---- Problem 60: Check if two strings are equal ignoring case
let str1 = "JavaScript", str2 = "javascript"
console.log(str1 === str2); 

// ---- Problem 61:  Count how many words in a sentence
let sentence = "I am a Programmer"
let split = sentence.split(' ')
let counter = 0
for(let val of split){
    counter++
}
console.log(counter);

// ---- Problem 62: Captalize only first charcter
let singleWord = "hello world"
let cap = singleWord.charAt(0).toUpperCase()
let rem = singleWord.slice(1)
console.log(cap.concat(rem));

// ---- Problem 63: remove all spaces
let singleSent = "  code  with   js  ";
let result = singleSent.replace(/\s+/g, "");
console.log(result);

// ---- Problem 64: Shortest Word length
let sent = "Hello JavaScript"
let eachWord = sent.split(' ')
let minlength = eachWord[0].length
for(let val of eachWord){
    if(val.length < minlength ){
        minlength = val.length
    }
}
console.log(`Shortest length of word is : ${minlength}`);

// ---- Problem 65: count vowels in a string
let countVowels = "grapes"
let count_vowels = 0
for(let val of countVowels){
    if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
        count_vowels++
    }
}
console.log(count_vowels);

// ---- Problem 66: Check if a word is Palindrome
let originalStr = "madam"
let reverseStr = ""
for(let i = originalStr.length-1; i >= 0; i--){
    reverseStr += originalStr[i]
}
if(originalStr === reverseStr){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}

// --- Problem 67: Length Checker : Prompt lo user se aur check karo ke string ki length 10 se zyada hai ya nahi.
let user_prompt = prompt("Enter a word:")
if(user_prompt.length > 10 ){
    console.log("long string");
}else{
    console.log("short string");
}

// ----- Problem 68: Find the sum of all elements in an array.
let arrSum = [24 , 20 , 18 , 70 , 8]
let sum = 0
for(let val of arrSum){
    sum += val
}
console.log(sum)

// ---- Problem 69: Find the largest number in an array.
let largerNum = [120 , 1300 , 800]
let max = largerNum[0]
for(let val of largerNum){
    if(val > max){
        max = val
    }
}
console.log(max);

// ----- Problem 70: Count how many even numbers are in an array.
let numArr = [1 , 2 , 7 , 8 , 12 , 78 , 56]
let Count = 0
for(let val of numArr){
    if(val % 2 === 0){
        Count++
    }
}
console.log(Count);

// ---- Problem 71: Reverse an array (without using .reverse()).
let Array = ["apple","pear","orange","banana"]
for(let i = Array.length-1; i >= 0; i--){
    console.log(Array[i]);
}

// ---- Problem 72: Create an empty array and add elements using push.
let empty = []
empty.push("car","bike","bus","cycle")
console.log(empty);

// ---- Problem 73: Add element at the beginning using unshift.
let fruits = ["grapes","pear","orange"]
fruits.unshift("apple","mango")
console.log(fruits);

// ---- Problem 74: Remove last two elements from array without using loop
let ar = [121,120,119,118,117,116,115]
ar.splice(ar.length-2)
console.log(ar);

// ----- Problem 75: Find all numbers greater than 50 in an array.
let arrNum = [120 , 56 , 12 , 34 , 65]
for(let val of arrNum){
    if(val > 50){
        console.log(val);
    }
}
// ---- Problem 76: Print index of each element using forEach.
let vege = ["carrot","brinjal","onion","tomato","ladyfinger"]
let idx = 0
vege.forEach((val) => {
    console.log(`${idx++} : ${val}`);
})

// ----- Problem 77: Extract first 3 elements using slice.
let fristhrree = [100,200,300,400,500]
console.log(fristhrree.slice(0,3));

// ---- Problem 78: Add 2 elements at index 2 using splice.
let addEle = [50,150,250,350]
addEle.splice(2,0,800,900)
console.log(addEle);

// ---- Problem 79: Create a new array with each element squared using map.
let squared = [2,4,6,8,10]
let output = squared.map((val) => {
    return val * val
})
console.log(output);

// ----- Problem 80: Make a new array with each number minus 5 using map.
let minus = [300,400,500]
let finalOutput = minus.map((val) => {
    return val - 5
})
console.log(finalOutput);

// ---- Problem 81: Find the total sum of all numbers using reduce.
let sumArr = [1,2,3,4,5]
let final = sumArr.reduce((curr,pre) => {
    return curr + pre
})
console.log(final);

// ---- Problem 82: Find the avegarge of a numbers in a array using reduce.
let avg = [12,24,12,24]
let s = 0
for(let val of avg){
    s += val
}
let a = s / avg.length
console.log(a);

// ---- Problem 83: Remove duplicate values from array.
let arr = [1 , 2 , 2 , 3 , 4 , 4 , 5]
let emp = []
for(let i = 0; i < arr.length; i++){
    if(!emp.includes(arr[i])){
        emp.push(arr[i])
    }
}
console.log(emp);

// --- Problem 84: Check if a number exists in the array or not.
let array = [20,30,40,50]
let num = 30
if(array.includes(num)){
    console.log("number exist")
}else{
    console.log("number dose not exist ")
}

// ---- Problem 85: Find the index of the first occurrence of 42
let findIndex = [120,42,50,42]
let index = findIndex.indexOf(42)
console.log(index);

// ---- Problem 86: Change array with different ways
let places = ["Saudia", "Oman", "Dubai", "Turkey", "Germany"];
console.log(places); // original array
console.log([...places].sort()); // sorted array
console.log(places); // original still same
console.log([...places].sort().reverse()); // reverse orignal array
console.log(places); // original again
places.reverse(); // original reverse array
console.log(places);

// Problem 87:  Intentional Error: Make sure you correct the error before closing the program.
let arra = ["car", "motorcycle", "bus", "train"];
console.log(arra[4]); // undefined
console.log(arra[3]); // correction

// ----- Problem 88: Merge two arrays and sort in ascending order
let a1 = [5, 3, 1];
let b1 = [4, 2, 6];
let c1 = a1.concat(b1);
console.log(c1);
console.log(c1.sort());

// ---- Problem 89:  Mini Project ---- To Do List
let todos = []
while(true){
  let choice = prompt("Select choices : add , delete , view , exit")
  if(choice === "add"){
    let input = prompt("Enter your multiple task :")
    let tasks = input.split(",")
    for(let task of tasks){
      todos.push(task)
    }
  } else if(choice === "view"){
    for(let i = 0; i < todos.length; i++){
      console.log(`${i} : ${todos[i]}`)
    }
  } else if(choice === "delete"){
    let remove = +prompt("Enter the index you want to delete")
    todos.splice(remove,1)
  } else if(choice === "exit"){
    console.log("Thanks for your contribution")
    break;
  } else{
    console.log("Invalid option")
  }
}
console.log(todos);

// ---- Problem 90: Make a function that prints "Hello, World!".
function saysHello(){
    console.log("Hello I am a function...")
}
saysHello();

// ---- Problem 91: Make a function that takes your name and prints a greeting.
function nameFunc(name){
    console.log(`I am ${name}`)
}
nameFunc("Hamza");

// ----- Problem 92: Function that returns the square of a number.
function square(num){
    return num * num
}
console.log(square(10));

// ---- Problem 93: Function that reverses a string.
function rev(str){
    let reversed = ""
    for(let i = str.length-1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed
}
console.log(rev("hello"));

// ---- Problem 94: Function that takes an array and returns the sum of its elements.
function arrFunc(arr){
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}
console.log(arrFunc([1,2,3,4,5]));

// ----- Problem 95: Function that counts how many times a value appears in an array.
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}
let resulted = countOccurrences([1, 2, 3, 2, 4, 2, 5], 2);
console.log(resulted); 

// ---- Problem 96: Arrow function that finds cube of a number.
const arrow = (num) => {
    return num * num * num
}
console.log(arrow(4));

// Problem 97: Function that checks whether a number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true; 
}
console.log(isPrime(23));

// ----- Problem 98:  Write a function inside another function
function outer(){
    console.log("Outer Function")
    function inner(){
        console.log("inner function")
    }
    inner() // inner sirf outer k scope me access hota hai
}
outer() 

// ----- Problem 99: Function that takes another function as an argument and calls it
function greetUser() {
  console.log("Hello, user!");
}

function callFunction(fn) {
  console.log("Calling your function...");
  fn();
}
callFunction(greetUser)

// ----- Problem 100:  Check if a word is angram or not
function isAnagram(str1, str2) {
  // Convert to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Split, sort, join
  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');

  // Compare
  return (sortedStr1 === sortedStr2) ? "Yes" : "No";
}
console.log(isAnagram("listen", "silent"));