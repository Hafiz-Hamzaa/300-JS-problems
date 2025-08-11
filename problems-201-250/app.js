// ----- Problems 201-250

// Problems 201: input ki value pehle save kr localstorage me save btn per click krkai
let input = document.querySelector("input")
let saveBtn = document.querySelector(".btn-one")
let readBtn = document.querySelector(".btn-two")
let deletBtn = document.querySelector(".btn-three")
let p = document.querySelector("p")

saveBtn.addEventListener("click",()=>{
    let value = input.value
    localStorage.setItem("userData",value)
})

// Problem 202: then save hoi value get kro page per readbtn per click krkai
readBtn.addEventListener("click",()=>{
    let value = localStorage.getItem("userData")
    p.textContent = `Read Data : ${value}`
    input.value = ""
})

// Problem 203: delte btn bh add kro jis se userData ki value delete bh krsko
deletBtn.addEventListener("click",()=>{
    localStorage.removeItem("userData")
    p.textContent = `Your data should be deleted`
    p.style.color = 'red'
    input.value = ""
})

// Problem 204: make a notes application .Select all elements
// ----- Step 01 :  Selecting Elements from HTML 
let notesApp = document.querySelector(".app-container")
let textArea = document.querySelector("#noteInput")
let btn = document.querySelector("#addNoteBtn")
let notesContainer = document.querySelector("#notesContainer")

// Problem 205: add btn ad check if textarea is empty
// ---- Step 02: Add eventlistener to the button and check if text area is empty show an alert message
btn.addEventListener("click",(e)=>{
    if(textArea.value.trim() === ""){
        alert("please write a note")
        return;
    }

// Problem 206: save data on localstorage    
// ---- Step 03: Save Notes on LocalStorage
    let existingNotes = localStorage.getItem("note")
    let noteArray = existingNotes ? JSON.parse(existingNotes):[]
    noteArray.push(`${textArea.value}`)
    localStorage.setItem("note", JSON.stringify(noteArray))

// Problem 207: make dynamic UI through JS    
// ---- Step 04: Create Dynamic UI     
    let div = document.createElement("div")
    div.classList.add("note")

    let p = document.createElement("p")
    p.textContent = `${textArea.value}`

// Problem 208: ADD DELET btn    
// ---- Step 05: Add Delete Button Functionality
    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.textContent = "Delete note"

// Problem 209: append all elements
// ---- Step 06: Append all elements in notesApplication
    div.appendChild(p)
    div.appendChild(deleteBtn)
    notesContainer.appendChild(div)

// ---- Step 07: Empty text area box
    textArea.value = ""

// Problem 210: add delet btn functinality    
// ---- Step 08: Delete individually note through click delete button
    deleteBtn.addEventListener("click",()=>{
    div.remove()
})
})

// Problem 211: create a basic calculator
    // ---------->>>>>>> Basic Calculator
    // ----- Selecting Elements
    let display = document.querySelector("#screen")
    let buttons = document.querySelectorAll("button")

    // ----- add event click on each button using foreach loop
    buttons.forEach((btn)=>{
        btn.addEventListener("click",()=>{
    // ----- get button value by using textContent or innerText
            let value = btn.textContent

// ---- Problem 212: if user click C button dispalu will be empty
            if(value === "C"){
                display.value = ""
    // ---- if user click = button expression should be evaluate through eval
            } else if(value === "="){
                try{
                    display.value = eval(display.value)
    // ---- if any find fail operation user see the error
                }catch(err){
                    display.value = "Error"
                }
    // ---- rest of the remaining buttons value showed on the display screen through += operator
            }else{
                display.value += value
            }
        })
    })

// ---- Problem 213: make a  keyborad event
        let pa = document.querySelector("#output")
        let colors = ["red", "blue", "green", "orange", "purple", "teal"];

// ---- Problem 214: and also make a random color
        let randomColors = colors[Math.floor(Math.random() * colors.length)]
        window.addEventListener("keydown",(e)=>{
        // ---- handled SPC key also
            if(e.key === " "){
            pa.textContent = `You pressed : SPC`
            pa.classList.add("p")
            // ---- sif you click on key b  change the backgroundColor to blue
            }else{
                pa.textContent = `You pressed : ${e.key}`
                pa.classList.add("p")
                document.body.style.backgroundColor = randomColors
            }
        })

// ----- Problem 215: make a quick task application
// ----- Selecting all elements
      let todo = document.querySelector(".todo-container");
      let task = document.querySelector("#taskInput");
      let addBtn = document.querySelector("#addTaskBtn");
      let showTask = document.querySelector("#taskList");

// ---- Problem 216: when user refresh the page the task will be display on the UI       
      // ---- Jb page reload ho mera jitne bh task save hai wo UI per display hojai
      window.addEventListener("DOMContentLoaded", () => {
        // ---- data fetch kr rahai hai local storage se
        setTimeout(() => {
        let dataExisting = localStorage.getItem("tasks");
        // data ko parse kia mtlb array me convert kia
        let dataParse = JSON.parse(dataExisting);
        // har aik task ko UI me display kia using foreach loop
        dataParse.forEach((task) => {
          let myTask = document.createElement("li");
          myTask.textContent = task;

// ----- Problem 217: also show the delet btn when user reload the page
          // Delete button creaeted
          let deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete Task";
          myTask.appendChild(deleteBtn);

          // Delete button event listener lagao
          deleteBtn.addEventListener("click", () => {
            myTask.remove();
          });
            showTask.appendChild(myTask);
        });
         }, 5000);
      });

      // --- add event on btn to add task and show tha all task inside ul container
      addBtn.addEventListener("click", () => {
        // ---- if task is empty show an alert box
        if (task.value === "") {
          alert("Please add a task!");
          return;
        }

// ---- Problem 218: save tasks on local storage
        // ---- save the task on local storage
        let taskValue = task.value.trim(); // get the task value from input box and remove white spaces
        let exist = localStorage.getItem("tasks");
        // agr local storage me task name ki key ka data exist krta hai to usko ap parse krdo array me convert krdo agr nh to [] array banado
        let data = exist ? JSON.parse(exist) : [];
        // jo task input se arha hai usko push krdo data me
        data.push(taskValue);
        // end me data ko save krdo tasks apne or usko wapis stringify krdo
        localStorage.setItem("tasks", JSON.stringify(data));

// Problem 219: show all tasks and delete functionality on the web page
        // ----- show all task to UI
        let myTask = document.createElement("li");
        myTask.textContent = task.value;
        myTask.classList.add("task-entry");
        showTask.appendChild(myTask);

        // ---- Delete Task from UI
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Task";
        myTask.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
          myTask.remove();
        });

        // ---- single task add krne kai bad input box empty hojai
        task.value = "";
      });

// ----- Problem 220: Real world usecase of map , filter , reduce
const products = [
  { name: "Laptop", price: 1000, category: "electronics" },
  { name: "Shirt", price: 40, category: "clothing" },
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Book", price: 20, category: "education" }
];

// step 01: filter only electronics products
const totalElectronicsBill = products.filter(product => product.category === 'electronics')
// step 02: increase price of 10%
  .map(product => ({
    ...product, // iska mtlb old properties leao
    price: product.price * 1.10
  }))
// step 03: calculate total price bill
.reduce((total, product) => total + product.price, 0);
console.log(`Total Electronics Bill (with 10% increase): ${totalElectronicsBill}`);

// ------ Problem 221: create a toaster

function createToaster(config){
    return function(str){
        let div = document.createElement("div")
        div.textContent = str

// ---- Problem 222: set the theme condition
        div.className = `inline-block ${config.theme === 'dark' ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`

        document.querySelector(".parent").appendChild((div))

// ---- Problem 223: set the position of toaster
        if(config.positionX !== "left" || positionY !== "top"){
            document.querySelector(".parent").className +=
            `${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`
        }

// ---- Problem 224: set the duration
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div)
        }, config.duration * 1000);
    }
}
// ---- Problem 225: set all configuration
let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
})
toaster("Download  Done")
setTimeout(() => {
    toaster("Harsh accepted")
}, 2000);

// ----- Problem 226: Create a Age Checker App
let ageInput = document.querySelector("#ageInput")
let btn1 = document.querySelector("button")
let p1 = document.querySelector("#result")
btn.addEventListener('click',()=>{
    let value = ageInput.value
    if(value === ""){
        alert('Please enter a age')
        return;
    }
    if(value >=18){
        p1.textContent = 'You are eligible to vote!'
    }else{
        p1.textContent = 'You are not eligible to vote!'
    }
    ageInput.value = ""
})

// ----- Problem 227: Table Generator
let input1 = document.querySelector("#num")
let btn2 = document.querySelector("#generate")
let result = document.querySelector("#output")
btn2.addEventListener('click',()=>{
    if(input1.value === ""){
        result.textContent = 'Input must have a value'
        result.style.color = 'red'
        return;
    }
    result.innerHTML = ""
    let value = input1.value
    for(let i = 1; i <= 10; i++){
        result.innerHTML += `${value} X ${i} = ${value * i}<br>`
        result.style.color = 'green'
    }
    input1.value = ""
})

// ------ Problem 228: Make a Number Tool Analyzer
// let input = document.querySelector("#numInput")
let btnTotal = document.querySelector("#btnTotal")
let btnSum = document.querySelector("#btnSum")
let btnMax = document.querySelector("#btnMax")
let btnEven = document.querySelector("#btnEven")
let output = document.querySelector("#output")

// ------ Get Total Count of Numbers
btnTotal.addEventListener("click",()=>{
    output.innerHTML = ""
    if(input.value === ""){
        alert("Plaese write a number")
        return;
    }
    let value = input.value.split(',')
    let count = 1
    for(let val of value){
        output.textContent = `Total Count of Number is: ${count++}`
    }
    input.value = ""
})

// ----- Problem 229: Getting sum of all numbers
// ----- Get Total Number of Sum
btnSum.addEventListener("click",()=>{
    output.innerHTML = ""
    if(input.value === ""){
        alert("Plaese write a number")
        return;
    }
    let value = input.value.split(",")
    let sum = 0
    for(let val of value){
        sum+= parseInt(val)
    }
    output.textContent = `Total Number of Sum is : ${sum}`
    input.value = ""
})

// ---- Get Max Value
btnMax.addEventListener("click",()=>{
    output.innerHTML = ""
    if(input.value === ""){
        alert("Plaese write a number")
        return;
    }
    let value = input.value.split(',').map(Number)
    let max = value[0]
    for(let val of value){
        if(val > max){
            max = val
        }
    }
    output.textContent = `Highest Number is : ${max}`
    input.value = "" 
})

// ---- Problem 230: Getting all Even Numbers
// ----- Get Even Numbers
btnEven.addEventListener("click",()=>{
    output.innerHTML = ""
    if(input.value === ""){
        alert("Plaese write a number")
        return;
    }
    let value = input.value.split(',').map(Number)
    let even = value.filter(val => val % 2 === 0)
    output.textContent = `Even number is : ${even.join(", ")}`
    input.value = "" 
})

// ----- Problem 231: Real world use of map method
let users = [
  { name: "Hamza", age: 24, profession: "Developer" },
  { name: "Ayesha", age: 22, profession: "Designer" },
  { name: "Ali", age: 28, profession: "Manager" },
  { name: "Owais", age: 21, profession: "Engineer" },
];

 let container = document.querySelector("#container")
let newUser = users.map((user)=>{
    let div = document.createElement("div")
    div.classList.add("card")
    div.innerHTML = `Name : ${user.name}<br>Age : ${user.age}<br>Profession : ${user.profession}`
    container.appendChild(div)
})



