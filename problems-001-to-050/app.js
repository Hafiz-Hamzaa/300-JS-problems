// --------- 300 JS Problems Solving Skills
// ---- Problems 001 - to - 050

// ---- Problem 1: Declare a variable called name with your name and print it.
let name = "Hamza";
console.log(name);

// --- Problem 2: Create a variable of type number, string, and boolean. Use typeof to print their types.
let userName = "Ali Jawad";
let aged = 24;
let isMarried = false;
console.log(typeof userName, "\n", typeof aged, "\n", typeof isMarried);

// ---- Problem 3: Declare a let variable age = 20. Reassign it to 25 and print both times.
let Age = 20;
console.log(Age);
Age = 25;
console.log(Age);

// ---- Problem 4: Try to reassign a const variable. What happens? (Observe the error)
// const PI = 3.142
// PI = 3.145
// console.log(PI); // error : Assignment to constant variable

// ----- Problem 5: Type Coercion
console.log("5" + 3); // 53
console.log("5" - 3); // 2
console.log("5" * "2"); // 10
console.log("5" + true); // 5true

// ----- Problem 6: Convert String to Number & Number to String
// ---- string to number
let Str = "35";
let convert = Number(Str);
console.log(convert);
console.log(typeof convert);

// ---- number to string
let no = 25;
no = no.toString();
console.log(no);
console.log(typeof no);

// ----- Problem 7 : Swap two variables using third variable
let a = 50;
let b = 60;
let c = a;
a = b;
b = c;
console.log("a =", a);
console.log("b =", b);

// ----- Problem 8: Check if variable is null or undefined
let age;
console.log(typeof age);

// ---- Problem 9:  Check if Two Variables are of Same Type
let var1 = true;
let var2 = "false";
console.log(typeof var1 === typeof var2);

// ---- : Problem 10: — Profile Card
let student = {
  name: "Owais",
  age: 19,
  city: "Karachi",
};
console.log(
  `I am ${student.name}, ${student.age} years old from ${student.city}.`
);

// ---- Problem 11: Create two numbers and apply all arithmetic operators (+, -, *, /, %, **).
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

// ---- Problem 12: Assignment Practice
let x = 10;
x += 5;
console.log(x);
x *= 2;
console.log(x);
x -= 3;
console.log(x);

// ---- Problem 13: Equality Check
let y = "5";
let z = 5;
console.log(y == z);
console.log(y === z);

// ---- Problem 14: Inequality confusion
console.log("10" != 10); // false
console.log("10" !== 10); // true

// ---- Problem 15: Write a program that checks which number is greater between two variables.
let var_1 = 30;
let var_2 = 50;
let result = var_1 > var_2 ? var_1 : var_2;
console.log(result);

// ---- Problem 16: If a user is logged in and is admin, print "Access granted" — otherwise "Access denied".
let user = "login";
let admin = "login";
let permission =
  user === "login" && admin === "login" ? "Access granted" : "Access denied";
console.log(permission);

// ---- Problem 17: If age >= 18, print "Adult" else "Minor" — using only one line (ternary operator).
let userAge = 20;
let ternary = userAge >= 18 ? "Adult" : "Minor";
console.log(ternary);

// ---- Problem 18: Mystery Output
console.log(0 || "Hello"); // "Hello"
console.log("" && null); // ""
console.log(!null); // true

// ---- Problem 19: Age Checker
let ageChecker = 13;
if (ageChecker <= 13) {
  console.log("Child");
} else if (ageChecker > 13 && ageChecker < 20) {
  console.log("Teenager");
} else if (ageChecker > 20) {
  console.log("Adult");
}

// ---- Problem 20: Take 3 numbers, find and print the largest one using if-else.
let no1 = 223;
let no2 = 145;
let no3 = 90;
if (no1 > no2 && no1 > no3) {
  console.log(no1);
} else if (no2 > no1 && no2 > no3) {
  console.log(no2);
} else {
  console.log(no3);
}

// ---- Problem 21: Divisibility Test
let value = 15;
if (value % 3 === 0 && value % 5 === 0) {
  console.log("FizzBuzz");
} else if (value % 3 === 0) {
  console.log("Fizz");
} else if (value % 5 === 0) {
  console.log("Buzz");
} else {
  console.log("Nothing");
}

// ---- Problem 22:  Switch on Day Number
const day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;

  default:
    console.log("No match");
    break;
}

// ---- Problem 23:  Password Strength (Basic)
let passwordStrength = 4;
if (passwordStrength < 6) {
  console.log("weak");
} else if (passwordStrength >= 6 && passwordStrength < 10) {
  console.log("moderate");
} else if (passwordStrength >= 10) {
  console.log("strong");
}

// ---- Problem 24:  Character Type
let char = "aeiou";
if (char === "aeiou") {
  console.log("vowels");
} else if (char != "aeiou") {
  console.log("consonant");
}

// ---- Problem 25:  Triangle Type side values
let s1 = 6,
  s2 = 6,
  s3 = 6;
if (s1 === s2 && s2 === s3) {
  console.log("Equilateral (all equal)");
} else if (s1 === s2 || s2 === s3 || s1 === s3) {
  console.log("Isosceles (2 equal)");
} else {
  console.log("Scalene (all different)");
}

// --- Problem 26: take Month number and calculate how many days in a month
let month = 2;
if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
    console.log("31 Days")
}else if (
  month === 4 ||
  month === 6 ||
  month === 9 ||
  month === 11
) {
    console.log("30 Days")
} else {
    console.log("28 Days")
}

// ---- Problem 27 : Grade Calculator
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

// ---- Problem 28 : Nested if condition
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

// ---- Problem 29 : Check if number is positive or negative by using the prompt function
let User = +prompt("Enter a number :")
if(User > 0){
    console.log("positive number");
}else if(user === 0){
    console.log("zero number")
}else{
    console.log("negative number");
}

// ----- Problem 30:  Check if a year is leap year or not
let year = 2020
if((year % 4 === 0 && year !== 100) || year % 400 === 0){
    console.log("leap year")
}else{
    console.log("not a leap year");
}

// --- Problem 31: Leap Year Checker for Century Years
let Year = 2020
if(Year % 100 === 0 && Year % 400 === 0){
    console.log("leap century year");
}else if(Year % 100 === 0 && Year % 400 !== 0){
    console.log("not a leap year century");
}else{
    console.log("not a century year");
}

// ---- Problem 32: Check if a number is even or odd
let number = 28
if(number % 2 === 0){
    console.log(`${number} is even`)
}else{
    console.log(`${number} is odd`)
}

// ----- Problem 33: 1 to 10 Print
for(let i = 1; i <= 10; i++){
  console.log(i);
}

// ---- Problem 34: Use a loop to print all even numbers between 1 and 50.
for(let i = 1; i <=50; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}

// ---- Problem 35:  Sum of First 100 Numbers
let sum = 0
for(let i = 1; i <= 100; i++){
  sum += i
}
console.log(`sum of 1 to 100 : ${sum}`);

// ----- Problem 36: Calculate Factorial of 5
let fact = 1
for(let i = 1; i <= 5; i++){
  fact *= i
}
console.log(`factorial of 5 : ${fact}`);

// ----- Prblem 37: Print numbers from 10 to 1 using loop.
for(let i = 10; i >= 1; i--){
  console.log(i)
}

// ---- Problem 38: Print multiplication table of any number from 1 to 10.
let multiplication = 22
for(let i = 1; i <= 10; i++){
  console.log(`${multiplication} x ${i} = ${multiplication * i}`)
}

// ---- Problem 39: Digits of a number print individulay number
let digitNum = 1234
let convertString = digitNum.toString()
for(let val of convertString){
  console.log(val)
}

// ---- Problem 40: Count Digits
let isNum = 12345786
let count = 0
while(isNum > 0){
  isNum = Math.floor(isNum / 10)
  count++
}
console.log(count);

// ---- Problem 41: sum of digits
let sumNum = 123456
let cal_sum = 0
while(sumNum > 0){
  let digit = sumNum % 10
  cal_sum += digit
  sumNum = Math.floor(sumNum / 10)
}
console.log(cal_sum);

// --- Problem 42: revesred  number
let originalNum = 19024
let convertedStr = originalNum.toString()
for(let  i = convertedStr.length - 1; i >= 0; i--){
  console.log(convertedStr[i]);
}

// ---- Problem 43: Sum of even numbers
let sumeven = 0
for(let i = 1; i <= 10; i++){
  if(i % 2 === 0){
    sumeven += i
  }
}
console.log(sumeven);


// ---- Pattern in Prrogramming
// ----  Problem 44: Print a 4x4 square of stars
for(let row = 1; row <= 4; row++){
    let line = ""
    for(let col = 1; col <= 4; col++){
        line += "* "
    }
    console.log(line);
}

// ---- Problem 45:  Right-Angled Triangle of *
for(let row = 1; row <= 5; row++){
    let line = ""
    for(let col = 1; col <= row; col++){
        line += "* "
    }
    console.log(line);
}

// ---- Problem 46:  Pattern Challenge: Number Triangle
for(let row = 1; row <= 5; row++){
    let line = ""
    for(let col = 1; col <= row; col++){
        line += col + " "
    }
    console.log(line);
}

// ----- Prblem 47:  Reverse Number Triangle
for(let row = 5; row >= 1; row--){
    let line = ""
    for(let col = 1; col <= row; col++){
        line += col + " "
    }
    console.log(line);
}

// ---- Problem 48: access property and value of object using for in loop
const obj = {
    name : "ali",
    age : 12,
    isPassed : true
}
for(let key in obj){
    console.log(`${key} : ${obj[key]}`)
};


// ---- Problem 49: use for of and print individual chracter of string
const text = "javascript"
for(let val of text){
    console.log(val)
}

// ---- Problem 50: for in loop use and print each array index
let arr = [10 , 20 , 30 , 40]
let idx = 0
for(let val in arr){
    console.log(`index ${idx} = ${val}`)
    idx++
}
