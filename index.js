const [first, second, ...args] = process.argv;

console.time("start");

function exitProcess(message) {
    console.log(message);

    process.exit();
}

if (!args.length) exitProcess(`You forgot to enter the numbers of coins you'd like to flip, example: node . --coins=2`);

/* need to see if we have coin argument in our process */
const options = {};

for (let i = 0; i < args.length; i++) {
    let [name, value] = args[i].split("=");

    options[name.replaceAll("-", "")] = value;
}

if (!options['coins']) exitProcess(`you provided everything but the arg to do the calculation?`);

const coins = options.coins;
const totalPossibilities = 2 ** coins;
const possibilities = [];
const sides = ["h", "t"];
let counter = 0;

function randomSide() {
    return Math.random() < 0.5 ? sides[0] : sides[1]; 
}

function randomPossibility() {    
    return new Array(totalPossibilities).fill().map(() => randomSide()).join("");
}
while (possibilities.length !== totalPossibilities) {
    const value = randomPossibility();

    if (!possibilities.includes(value)) possibilities.push(value);
} 

console.log(possibilities);
console.log(possibilities.length);
console.timeEnd("start");