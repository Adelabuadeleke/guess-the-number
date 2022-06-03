//importing dependencies
const {LocalStorage} = require("node-localstorage");
let localStorage = new LocalStorage('./scratch');

//get user name
let username = localStorage.getItem('username');
if(username == null) {
  username = prompt ("username");
}


//setting parameters
localStorage.setItem('username', username);
let rangeVal = [];
let x;

//stage function
const getStage = () => {
 let result = localStorage.getItem('stage');
if (result == null) {
  result = 1;
}
  return result;  
} 

//points function
const getPoints = () => {
  let result = localStorage.getItem('points');
if (result == null) {
  result = 1;
}
  return result;  
}

//setting default for stage and points.
let stage = getStage();
let points = getPoints();

//range function
function* range(start, end) {
for (let h = start; h <= end; h++) {
yield h;
}
}

//determine range limit
if(stage) {
  x = Number(stage) + 1
}

//push range values into array
for (h of range(1,x)) {
rangeVal.push(h)
}

//random selection
let botSelection = Math.floor(Math.random() * rangeVal .length)

//get user selection
const userSelection = prompt("guess number btw range 1 - " + x)


if(botSelection == 0){
  botSelection = 1;
}

//printing out game details
console.log(`stage: ${stage}`);
console.log(`range options: ${rangeVal}`);
console.log(`botSelection: ${botSelection}`);
console.log(`yourSelection: ${userSelection}`);


let playerName = localStorage.getItem('username');

//game result function
if(Number(botSelection) == Number(userSelection)) {
console.log(`congrats ${playerName} you won this stage!🕺`);
  localStorage.setItem('stage', `${Number(stage) + 1}`);
  localStorage.setItem('points', `${Number(points) + 1}`)
 console.log(`Total points: ${points}`)                     
} else {
  console.log("you lost, game over!🥲")
  console.log(`Total points: ${points}`)
  localStorage.removeItem("stage");
  localStorage.removeItem("username");
localStorage.removeItem("points");
}