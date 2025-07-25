// -------- Problems 151 to 200
// Problem 151: Select the heading of  page chaneg to its text content
document.querySelector("h1").textContent = "Welcome to my Website";

// Problem 152: Select all li elem and print their text usig a loopl and change text all lis
let lis = document.querySelectorAll("li");
lis.forEach((element) => {
  element.textContent = "Hello";
});

// Problem 153: when we sue innerText and textContent
// innerText = ye slower hai or jo sirf text visible hota hai ye wo deta hai
// textContent = faster hota hai or ye hidden text bh nikal kr deta hai

// Problem 154: Add a title attribute to a div dynamically
let div = document.querySelector("div");
div.title = "javascript";

// Problem 155: Create a new list item <li>Add new Task</li> and place it to the end of ul
let create = document.createElement("li");
create.textContent = "new task";
let newTask = document.querySelector(".list-items");
newTask.append(create);

// Problem 156: Count All Paragraphs on Page
let paras = document.querySelectorAll("P");
let count = 0;
paras.forEach((e) => {
  count++;
});
console.log(`Total Paragraphs : ${count}`);

// Problem 157:  Get All Class Names from Elements
let elements = document.querySelectorAll("*");
elements.forEach((el) => {
  if (el.getAttribute("class")) {
    console.log(el.getAttribute("class"));
  }
});

// Problem 158: Change All h2 Texts to Uppercase
let h2 = document.querySelectorAll("h2");
h2.forEach((el) => {
  el.innerText = el.innerText.toUpperCase();
});

// Problem 159:
// let players = ["Messi", "Ronaldo", "Neymar"];
// let ul = document.createElement("ul");

// players.forEach(player => {
//   let li = document.createElement("li");
//   li.innerText = player;
//   ul.appendChild(li);
// });
// document.body.appendChild(ul);

// Problem 160:  Challenge: Build a Grocery List from Array
let grocery = ["rice", "sugar", "cookies", "fruits", "vegetables"];
let ul = document.createElement("ul");
grocery.forEach((el) => {
  let li = document.createElement("li");
  li.innerText = el;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// Problem 161: Live Charcter Count
let inp = document.querySelector("input");
let span = document.querySelector("span");
inp.addEventListener("input", () => {
  span.textContent = inp.value.length;
});

// Problem 162: selct h1 element and when user click on h1 it change the text color to red
let h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  h1.style.color = "red";
});

// Problem 163: when user select the device it sholud be written laptop device selected
let sel = document.querySelector("select");
sel.addEventListener("change", (e) => {
  document.querySelector(
    "#device"
  ).textContent = `${e.target.value} Device Selected`;
});

// Problem 164: jb bh user koi bh key press kre to wo window me dekhai de rahi ho
let anyThing = document.querySelector(".anyTyped");
window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    anyThing.textContent = "SPC";
  } else {
    anyThing.textContent = `${e.key}`;
    anyThing.style.color = "orange";
  }
});

// Problem 165: jb bh user btn per click kre to file upload krkse or jo file select kre btn per bh uska name ai lekin btn apna custom bnana hai
let file = document.querySelector("#file");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  file.click();
});
file.addEventListener("change", (e) => {
  const myFile = e.target.files[0];
  if (myFile) {
    btn.textContent = myFile.name;
  }
});

// Problem 166: jb bh box me mouseover ho color chnage ho
let box = document.querySelector(".box");
box.addEventListener("mouseover", (e) => {
  console.log(e);
  box.style.backgroundColor = "yellow";
});

// Problem 167: jese hi mouse nikl to original color wapis ajai
box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "red";
});

// Problem 168: mouseout ka event use krkai aik circle ko mouse kai sth move krwao
let boxTwo = document.querySelector(".box-two");
window.addEventListener("mousemove", (e) => {
  boxTwo.style.top = e.clientY + "px";
  boxTwo.style.left = e.clientX + "px";
});

// Problem 169: Write a program to show different alerts when different buttons are clicked
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
button1.addEventListener("click", () => {
  alert("Button 1 was clicked");
});
button2.addEventListener("click", () => {
  alert("Button 2 was clicked");
});
button3.addEventListener("click", () => {
  alert("Button 3 was clicked");
});

// Problem 170: "Create a glowing bulb effect using classList.toggle() in Vanilla JavaScript."
const bulb = document.getElementById("bulb");

bulb.addEventListener("click", function () {
  bulb.classList.toggle("glow");
});

// Problem 171: form me name ki value ko check kro kai name ki value 2 character s zdaa ho
let form = document.querySelector("form");
let nm = document.querySelector("#name");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // form ko submit hone se rokna
  if (nm.value.length <= 2) {
    document.querySelector("#hide").style.display = "initial";
  } else {
    document.querySelector("#hide").style.display = "none";
  }
});

// Problem 172: email regex check kro
// mostly we generate a regex code to check our emails,name,password etc
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let ans = emailRegex.test("harsh@123.com");
console.log(ans); // true beacuse it follows all patterns

// Problem 173: after three second hello execute
setTimeout(() => {
    console.log("hello")
}, 3000);

// Proble 174: after every three second code will be execute
setInterval(() => {
    console.log("hello")
}, 3000);

// Problem 175: make a counter from 10 to 0 counter har aik sec me chale
// let count = 10
// setInterval(() => {
//     if(count >= 0){
//         console.log(count)
//         count--
//     }
// }, 1000);

// Problem 176 will be continue in other file..........