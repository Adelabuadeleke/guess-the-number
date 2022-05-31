const username = prompt ("username");

function* range(start, end) {
for (let h = start; h <= end; h++) {
yield h;
}
}

let rangeVal = [];
let x;
let defaultStage = 1;
let stage = defaultStage;


if(stage == 1) {
  x = 2
}
for (h of range(1,x)) {
rangeVal.push(h)
}


let botSelection = Math.floor(Math.random() * rangeVal .length)

const userSelection = prompt("guess number btw range 1 - " + x)


if(botSelection == 0){
  botSelection = 1;
}

console.log(rangeVal);
console.log(botSelection);
console.log(userSelection);

if(Number(botSelection) == Number(userSelection)) {
console.log(`${username} you won stage 1!🕺`)
} else {
  console.log("you lost, game over!🥲")
}



