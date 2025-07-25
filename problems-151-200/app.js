// Problem 176: find the longest word
function longestWord(arr) {
    let maxLength = arr[0]
    for(let val of arr){
        if(val.length > maxLength.length){
            maxLength = val
        }
    }
    return maxLength
}
console.log(longestWord(["apple", "banana", "mango", "strawberry", "kiwi"]))

// Problem 177: find frequency of each elemnt
// step 01: count frequency of each element
let fruits = ["apple","mango","banana","apple","apple","mango"]
let countFruits = {} // store count hoga is obj me
for(let val of fruits){
    if(countFruits[val]){
        countFruits[val]++
    }else{
        countFruits[val] = 1
    }
}
console.log(countFruits) // object bn gya smjo

// Problem 178: find most repeated elemnt
// step 02: find most repeated element
let maxCount = 0
let maxFruit = ""
for(let fruit in countFruits){
    if(countFruits[fruit] > maxCount){
        maxCount = countFruits[fruit]
        maxFruit = fruit
    }
}
console.log(`Max repeated fruit is : ${maxFruit}`)

// Problem 179: Reverse each word in the sentence but keep the word order same.
let sentence = "Code,is,life"
let breakDown = sentence.split(",")
let reversed = breakDown.map(word=>{
    return word.split("").reverse().join("")
})
let finalSentence = reversed.join(" ")
console.log(finalSentence)

// Problem 180: find frequency of each chracter
// step 01
let str = "JavaScript"
let freq = {}
for(let val of str){
    if(freq[val]){
        freq[val]++
    }else{
        freq[val] = 1
    }
}
console.log(freq)

// Problem 181: find most repeated char
// step 02
// let maxCount = 0
// let maxChar = ""
// for(let char in freq){
//     if(freq[char] > maxCount){
//         maxCount = freq[char]
//         maxChar = char
//     }
// }
// console.log(`${maxChar} apperas 2 times`)

// Problem 182:  Capitalize First Letter of Each Word (Space-Separated)
// let str = "life,is,beautiful"
// let breakDown = str.split(",")
// let empty = []
// for(let val of breakDown){
//     let firstWord = val[0].toUpperCase()
//     let remaining = val.slice(1)
//     empty.push(firstWord+remaining)
// }
// let final = empty.join(" ")
// console.log(final)

// Problem 183: findIndex of first element of startswith a
let names = ["Ali", "Ahmed", "Sara", "Fatima", "Usman"];
let newIndex = names.findIndex((val)=>{
    return val.toLowerCase().startsWith("a")
})
console.log(newIndex)

// Problem 184: faltten array and arrange in ascending order
// step 01 : flatten
let mixedArr = [1, 5, [2, 3], 10, 15, [20, [25, 5]]];
let flatten = mixedArr.flat(2)
console.log(flatten);

// step 02: ascending order
let ascending = flatten.sort((a,b)=>{
    return a-b    
})
console.log(ascending)

// Problem 185: then duplicate extra elements and replace number less then 10 with low
// step 03: remove duplicates
let unique = []
for(let val of ascending){
    if(!(unique.includes(val))){
        unique.push(val)
    }
}
console.log(unique)

// step 04 : replace number less then 10 with low
let replace = unique.map(val=>{
    if(val < 10) {
        return "low"
    }
    return val
})
console.log(replace)

// Problem 186: Jab user submit kare (Submit button click kare): Agar input empty ho, to alert("Please enter a name")
// Agar input filled ho, to <p> element me text set ho:"Hello, [userName]!"
let input = document.querySelector("#nameInput")
let submit = document.querySelector("#submitBtn")
let p = document.querySelector("#output")
submit.addEventListener("click",()=>{
    if(input.value === ""){
        alert("Please enter a name")
    }else{
    p.textContent = `Hello ${input.value}`
}
}) 

// Problem 187: Live Chracter Count Tool
// let input = document.querySelector("#userInput")
// let span = document.querySelector("span")
// let p = document.querySelector("#warning")

// input.addEventListener("input", () => {
//     let currentLength = input.value.length
//     span.textContent = currentLength

//     if (currentLength >= 45 && currentLength < 50) {
//         p.textContent = "Warning: You're nearing the limit!"
//         p.style.color = "orange"
//         p.style.fontWeight = "normal"
//     } else if (currentLength === 50) {
//         p.innerHTML = "<b>Limit reached</b>"
//         p.style.color = "red"
//     } else {
//         p.textContent = ""
//     }
// })

// Problem 188: make password strength checker
let password = document.querySelector("#passwordInput");
let strength = document.querySelector("span");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {

// Problem 189: if password is empty show alert message
  if (password.value === "") {
    alert("please enter a password");
  }

// Problem 190: check condition of strentgh checker
  let strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  let medium = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
  if(strong.test(password.value)){
    strength.textContent = "Strong"
    strength.style.color = "green"
  }else if(medium.test(password.value)){
    strength.textContent = "Medium"
    strength.style.color = "orange"
  }else{
    strength.textContent = "Weak"
    strength.style.color = "red"
  }
});

// Problem 191: make email validation

// let email = document.querySelector("#emailInput")
// let message = document.querySelector("#validationMessage")
// let btn = document.querySelector("#submitBtn")

btn.addEventListener("click", () => {
    let emailValue = email.value.trim();

// Problem 192: ifemail is empty show an alert message
    if (emailValue === "") {
        alert("Please write an email");
        return; // stop execution if empty
    }


// Probllem 193: check if email is incorrect or correct format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailValue)) {
        message.textContent = "Email format is correct";
        message.style.color = 'green';
    } else {
        message.textContent = "Email format is incorrect";
        message.style.color = 'red';
    }
});

// Problem 194: make a email & password validator
let form = document.querySelector("#liveForm")
let email = document.querySelector("#emailInput")
// let password = document.querySelector("#passwordInput")
let emailError = document.querySelector("#emailError")
let passwordError = document.querySelector("#passwordError")

// Problem 195: form ko submit hone se roka jai... 
form.addEventListener("submit", (e) => {
    e.preventDefault()

// Problem 196: agr input field empty hai to alert message show kro
    if (email.value.trim() === "") {
        alert("please write an email address")
        return
    }
    if (password.value.trim() === "") {
        alert("please write a password")
        return
    }

// Problem 197: email & password regex se check kro email and password ki value ko
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if( emailRegex.test(email.value)){
        emailError.textContent = "Email is correct"
        emailError.style.color = "green"
    } else{
        emailError.textContent = "Email is incorrect"
        emailError.style.color = "red"
    }
    if(passwordRegex.test(password.value)){
        passwordError.textContent = "Password is correct"
        passwordError.style.color = "green"
    }else{
        passwordError.textContent = "Password is incorrect"
        passwordError.style.color = "red"
    }
})

// Problem 198: You are creating a website for your college. Create a class User with 2 properties, name &
// email.

let data = "Student data..."
class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }

// Problem 199: It also has a method called viewData( ) that allows user to view website data.
    viewData(){
        console.log(`Data : ${data}`)
    }
}

let student1 = new User("ali","abc@email.com")
let student2 = new User("ayesha","ayesha@email.com")

// Problem 200: Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.
class Admin extends User {
    constructor(name,email){
        super(name,email)
    }
    editData(){
        data = "edit data by admin"
    }
}

let admin = new Admin("admin","admin@.com")