// ----------------------------->>>>>>>>>>>>  JS Interview Questions
// ----- Problem 232: Given a string reverse each word in the sentence
let str = "how are you"
let createArr = str.split(" ")
let newArr = createArr.map((val)=>{
    return val.split("").reverse().join(" ")
})
console.log(newArr.join("  "))

// ------- Problem 233: How to check if an object is an array or not ? Provide some code
function checkArray(elem){
    return Array.isArray(elem)
}
console.log(checkArray([]))
console.log(checkArray({}))

// ------ Problem 234: How to empty Array in JS
let arr = [1,2,3,4,5]
arr.length = 0

// ----- Problem 235: How would you check if a number is an integer
let a = 12.0
if(a % 1 === 0){
    console.log("integer")
}else{
    console.log("not integer")
}

// ------ Problem 236: Make duplicate input : [1,2,3,4,5] --- output : [1,2,3,4,5,1,2,3,4,5]
let numArr = [1 , 2 , 3 , 4 , 5]
let copyArr = [...numArr]
console.log(numArr.concat(copyArr)) 

// ---- Problem 237: Write a JS function that reverse a number
function reverseNumber(num){
    let isNumber = num
    let splitNumber = Number(isNumber.toString().split("").reverse().join(""))
    return splitNumber
}
console.log(reverseNumber(1234))

// ------ Problem 238 : Write a JS Function that check whether a passed string is palindrome or not
function checkPalindrome(str){
    let rev = ""
    for(let i = str.length-1; i >= 0; i--){
        rev+= str[i]
    }
    if(rev === str){
        return 'palindrome'
    }else{
        return 'not palindrome'
    }
}
console.log(checkPalindrome('level'))

// ----- Problem 239 :  Write a JS Function that return a passed string with letters in alphabetical order 
function alphabeticalStr(str){
    let stringOrder = str.split("").sort().join("")
    return stringOrder
}
console.log(alphabeticalStr('hello')) // ehllo

// ---- Problem 240 : Write a JS function that accept a string as a parameter and convert the first letter of each word of the string in upperCase
function capitalizeWords(sentence) {
    let breakWords = sentence.split(" ");
    let newWords = breakWords.map(function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    });
    return newWords.join(" ");
}

console.log(capitalizeWords("hello bhai kese ho"));
console.log(capitalizeWords("bohat achaa ho"));

// ---- Problem 241 : Write a JS Function to get the number of occurences of each letter in a specified string
function checkOccurences(str){
    let occ = {}
    let breaDown = str.split("").forEach(element => {
        if(occ.hasOwnProperty(element) === false){
            occ[element] = 1
        }else{
            occ[element]++
        }
    });
    return occ
}
console.log(checkOccurences('apple'))

// ---- Problem 242 : Loop an array and add all members of it
const array = [10 , 30 , 40 , 80]
let sum = 0
for(let val of array){
    sum += val
}
console.log(`sum of total number of array is : ${sum}`)

// ----- Problem 243 : you have an array of numbers and strings only add those members which are not string
let mixedArr = ["apple" , 125 , 25 , "orange" , "banana" , 50]
let mySum = 0
mixedArr.forEach((elem)=> {
    if(typeof elem === 'number'){
        mySum += elem
    }
})
console.log(mySum)

// ---- Problem 244 : Loop an array of objects and remove all objects which dont have genders value of male
let arrObj = [
    {name: 'ali' , gender: 'male'},
    {name: 'ayesha' , gender: 'female'},
    {name: 'arif' , gender: 'male'},
    {name: 'asma' , gender: 'female'}
]

let getMale = arrObj.filter((elem)=> elem.gender === 'male')
console.log(getMale)

// ----- Problem 245 : Write a JS Function to clone an array
function cloneFruitsArray(fruits) {
    return [...fruits];
}
let cloneArr = cloneFruitsArray(['apple', 'pear', 'orange', 'banana']);
console.log(cloneArr);

// ---- Problem 246 : Write a JS func to get the first element of an array .Passing a parameter 'n' will return the first 'n' elements of the array
function arrayOfNumbers(arr , n = 1){
    if(n <= arr.length){
    for(let i = 0 ; i < n ; i++){
        console.log(arr[i]);
    }
    }else{
        console.log(`${n} to elements hi nh hai`)
    }
}
arrayOfNumbers([10,20,30,40,50] , 3)

// ----- Problem 247 : Write a JS Function to compute the union of two arrays
function union(arr1,arr2){
    return [...new Set (arr1.concat(arr2))]
}
console.log(union([1,2,3,4],[2,5,2,6]))

// ---- Poblem 248: The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
function countVowels(str){
    let count = 0
    for(let val of str){
        if(val.toLowerCase() === "a" || val.toLowerCase() === "e" || val.toLowerCase() === "i" || val.toLowerCase() === "o" || val.toLowerCase() === "u" ){
            count++
        }
    }
    return count
}
console.log(countVowels("apple"))

// ---- Poblem 249: The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
function untilNegative(arr){
    let sum = 0
    for(let val of arr){
        if(val < 0){
            break
        }
        sum += val
    }
    return sum
}
console.log(untilNegative([1,2,3,-4])) // 6 -4 per break hojai ga
console.log(untilNegative([1,2,3,8]))

// ---- Poblem 250: Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 2000 milliseconds.
async function numbers(arr) {
  const promises = arr.map((val) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(val * 2);
      }, 2000);
    });
  });

  return Promise.all(promises); // saare promises complete hone ka wait karega
}

numbers([2, 4, 6, 8]).then((result) => {
  console.log(result); 
});