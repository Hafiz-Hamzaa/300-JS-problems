// --------- 300 JS Problems Solving Skills
// ---- Problems 001 - to - 050

// ---- Problem 1 : Check variable type using typeof
let name = "Muhammad Ali"
console.log(name);
console.log(typeof name);

// ----- Problem 2 : Swap two variables using third variable
let a = 50
let b = 60
let c = a
a = b
b = c
console.log("a =",a);
console.log("b =",b);

// ----- Problem 3: Check if variable is null or undefined
let age;
console.log(typeof age);

// ----- Problem 4:  Convert String to Number & Number to String
let Str = "35"
let num = 45
console.log(parseInt(Str));
console.log(num.toString());

// ---- Problem 5:  Check if Two Variables are of Same Type
let var1 = true
let var2 = "false"
console.log(typeof var1 === typeof var2);

// ---- : Problem 6: — Profile Card
let student = {
    name : "Owais",
    age : 19,
    city : "Karachi"
}
console.log(`I am ${student.name}, ${student.age} years old from ${student.city}.`)

// ---- Problem 7: Check if a number is even or odd
let number = 28
if(number % 2 === 0){
    console.log(`${number} is even`)
}else{
    console.log(`${number} is odd`)
}

// ----- Problem 8:  Grade System (based on percentage)
// 90-100: A+, 80-89: A, 70-79: B, below: Fail
let marks = 69
if(marks >= 90 && marks <= 100){
    console.log("Grade A+");
}else if(marks >= 80 && marks <= 89){
    console.log("Grade A");
}else if(marks >= 70 && marks <= 79){
    console.log("Grade B");
}else{
    console.log("Grade F")
}

// ---- Problem 9:  Use Ternary to check pass/fail (marks > 40)
let score = 32
let result = score > 40? "pass":"fail"
console.log(`student is ${result}`);

// ---- Problem 10: Find the largest of three numbers
let num1 = 50
let num2 = 80
let num3 = 120
if(num1 > num2 && num1 > num3){
    console.log(num1);
}else if(num2 > num1 && num2 > num3){
    console.log(num2)
}else{
    console.log(num3)
}

// ----- Problem 11:  Check if a year is leap year or not
let year = 2020
if((year % 4 === 0 && year !== 100) || year % 400 === 0){
    console.log("leap year")
}else{
    console.log("not a leap year");
}

// --- Problem 12: Leap Year Checker for Century Years
let Year = 2020
if(Year % 100 === 0 && Year % 400 === 0){
    console.log("leap century year");
}else if(Year % 100 === 0 && Year % 400 !== 0){
    console.log("not a leap year century");
}else{
    console.log("not a century year");
}

// ---- Problem 13 : Check if number is positive or negative by using the prompt function
let User = +prompt("Enter a number :")
if(User > 0){
    console.log("positive number");
}else if(user === 0){
    console.log("zero number")
}else{
    console.log("negative number");
}

// ---- Problem 14 : Nested if condition
let userInput = +prompt("Enter a number")
if(userInput % 2 === 0){
    if(userInput % 4 === 0){
        console.log("even and divisible by 4")
    }else{
        console.log("even not divisible by 4")
    }
}else{
    if(userInput < 10){
        console.log("odd and less then 10")
    }else{
        console.log("odd and greater then or equal to 10")
    }
}

// ---- Problem 15 : Grade Calculator
let input = +prompt("Enter your marks (0-100):")
if(input >= 90 && input <= 100){
    console.log("Your Grade is A+")
}else if(input >= 80 && input <= 89){
    console.log("Your Grade is A")
}else if(input >= 70 && input <= 79){
    console.log("Your Grade is B")
}else if(input >= 60 && input <= 69){
    console.log("Your Grade is C")
}else if(input >= 50 && input <= 59){
    console.log("Your Grade is D")
}else if(input < 50){
    console.log("Your Grade is F")
}else{
    console.log("Inavlid marks")
}

// --- Problem 16: Print numbers 1 to 10 using a for loop.
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// ---- Problem 17: Print even numbers from 2 to 20 using a loop.
for(let i = 2; i <=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// ---- Problem 18: Print reverse 10 to 1
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// ---- Problem 19: Print table of 5
let n = 5
for(let i = 1; i <= 10; i++){
    console.log(`${n} x ${i} = ${n * i}`);
}

// --- Problem 20: Sum of numbers 1 to 100
let sum = 0
for(let i = 1; i <= 100; i++){
    sum += i
}
console.log(`sum of 1 to 100 is = ${sum}`);

// ---- Problem 21: Factorial of a number (e.g. 5 → 5 × 4 × 3 × 2 × 1 = 120)
let no = 5
let count = 1
for(let i = 1; i <= no; i++){
    count *= i
}
console.log(`Factorial of ${no}`);

// ---- Problem 22: Guess scret number
let secret = 5
let counter = 0
let user = +prompt("Guess a secret number (0-10):")
while(secret != user){
    user = +prompt("Guess wrong")
    counter++
}
console.log(`Congratulations! You guess right in ${counter} attempts`);

// ---- Pattern in Prrogramming
// ----  Problem 23: Print a 4x4 square of stars
for(let row = 1; row <= 4; row++){
    let line = ""
    for(let col = 1; col <= 4; col++){
        line += "* "
    }
    console.log(line);
}

// ---- Problem 24:  Right-Angled Triangle of *
for(let row = 1; row <= 5; row++){
    let line = ""
    for(let col = 1; col <= row; col++){
        line += "* "
    }
    console.log(line);
}

// ---- Problem 25:  Pattern Challenge: Number Triangle
for(let row = 1; row <= 5; row++){
    let line = ""
    for(let col = 1; col <= row; col++){
        line += col + " "
    }
    console.log(line);
}

// ----- Prblem 26:  Reverse Number Triangle
for(let row = 5; row >= 1; row--){
    let line = ""
    for(let col = 1; col <= row; col++){
        line += col + " "
    }
    console.log(line);
}

// ---- Problem 27: access property and value of object using for in loop
const obj = {
    name : "ali",
    age : 12,
    isPassed : true
}
for(let key in obj){
    console.log(`${key} : ${obj[key]}`)
};

// ---- Problem 28:  For...of loop use kar ke colors ke elements console pe print karo
const colors = ["red", "green", "blue", "yellow"];
for(let color of colors){
    console.log(color);
}

// ---- Problem 29: use for of and print individual chracter of string
const text = "javascript"
for(let val of text){
    console.log(val)
}

// ---- Problem 30: for in loop use and print each array index
let arr = [10 , 20 , 30 , 40]
let idx = 0
for(let val in arr){
    console.log(`index ${idx} = ${val}`)
    idx++
}

// ---- Problem 31 : Try these and print output
let str = "JavaScript is fun!";

console.log(str.length);           
console.log(str.toUpperCase());   
console.log(str.toLowerCase());    
console.log(str.includes("fun")); 
console.log(str.indexOf("S"));     
console.log(str.slice(0,10));      
console.log(str.replace("fun", "awesome")); 

// --- Problem 32: Length Checker : Prompt lo user se aur check karo ke string ki length 10 se zyada hai ya nahi.
let user_prompt = prompt("Enter a word:")
if(user_prompt.length > 10 ){
    console.log("long string");
}else{
    console.log("short string");
}

// ---- Problem 33 : Word Replacer
let coding = "I love coding"
console.log(coding.replace("love","like"));

// --- Problem 34: Substring Finder
let sentence = "Learning JavaScript is fun"
console.log(sentence.includes("fun"));

// ---- Problem 35: First Word Extractor
let role = "Front-end-Developer"
console.log(role.slice(0,9));

// ---- Problem 36: conert string into lower case
const lowercase = "PROGRAMMING LANGUAGE"
console.log(lowercase.toLowerCase());

// --- Problem 37: Reverse a String
let reverse = "hello"
for(let i = reverse.length-1; i >= 0; i--){
    console.log(reverse[i])
}

// ---- Problem 38: Count Specific Character
let fruit = "banana"
let Count = 0
for(let val of fruit){
    if(val === "a"){
        Count++
    }
}
console.log(Count);

// ---- Problem 39: Check Palindrome
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


// ---- Problem 40: count vowels in a string
let countVowels = "grapes"
let count_vowels = 0
for(let val of countVowels){
    if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
        count_vowels++
    }
}
console.log(count_vowels);

// ---- Problem 41: Store a person’s name, and include some whitespace characters at the beginning and end of the name. remove whitespaces
let personName = "  Uzair   "
console.log(personName)
console.log(personName.trim())

// ---- Problem 42: Capatilze first letter only
let word = "hello"
let firstLetter = word.charAt(0).toUpperCase()
let remainingChar = word.slice(1)
console.log(firstLetter.concat(remainingChar));

// ---- Problem 43: Shortest Word length
let sent = "Hello JavaScript"
let eachWord = sent.split(' ')
let minlength = eachWord[0].length
for(let val of eachWord){
    if(val.length < minlength ){
        minlength = val.length
    }
}
console.log(`Shortest length of word is ${minlength}`);

// ---- Problem 44:  Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["ali","hamza","mubashir","umer"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// ---- Problem 45: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items
let transport = ["car","civic","bus"]
console.log(`My favourite transport is ${transport[0]}`);
console.log(`My favourite car is ${transport[1]}`);
console.log(`${transport[2]} is also a type of vehicle`);

// ---- Problem 46: add item in the end of array
let technologies = ["HTML","CSS","JS"]
technologies.push("React")
console.log(technologies)

// ---- Problem 47: remove last item 
let stationary = ["pen", "pencil", "eraser", "sharpener"]
stationary.pop()
console.log(stationary)

// ---- Problem 48: print first element
let arrNum = [10,20,30,40]
console.log(arrNum[0])

// ---- Problem 49: find c index
let alphabets = ["a","b","c","d"]
console.log(alphabets.indexOf("c"));

// ---- Problem 50: check the item in an array or not
let checkArr = ["apple","pear","orange","grapes"]
console.log(checkArr.includes("grapes"))
