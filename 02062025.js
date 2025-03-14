let banana = 'yellow'

banana = 'brown'

const chocolate = 'brown'

// chocolate = 'red'

var dinosaur = 'trex';

if(dinosaur == 'trex') {
    const dinosaurIsHungry = true;
}

// console.log(dinosaurIsHungry)

// if(true) {
//     var dinosaurIsFull = false;
// }

// console.log(dinosaurIsFull)

const dinosaurTeethCount = 1000;
const dinosaurColor = 'green'

let dinosaurIsHappy = true;
dinosaurIsHappy = 5;

let areDinosaursStillAlive = null;

let myFavoriteDinsaur;

console.log(myFavoriteDinsaur);

myFavoriteDinsaur = 'trex';

let howManyDinosuarsAreThere = 1000;

myFavoriteDinsaur = 'trex';

myFavoriteDinsaur = "stegosaurus";

if(myFavoriteDinsaur === 'trex') {
    console.log("My fav dino is a scary one");
} else {
    console.log("I chose a boring dinosaur");
}

const myFavNumberAsANumber = 35;
const myFavNumberAsAString = '35';

if(myFavNumberAsANumber !== myFavNumberAsAString) {
    console.log("Comparison worked!")
} else {
    console.log("Comparison failed!")
}

const dinosaursThatHunterKnows = {
    "trex": true,
    "stegosaurus": true,
    'trex': 17,
    dinosaursThatIMadeUp: {
        'flipiosaurs': 'what?'
    }
}

// const notBattleship = {
//     score: {
//         player: 100
//     },
//     map: {

//     }

// }

dinosaursThatHunterKnows.trex = 'red'

// const banana2 = 'yellow'
// banana2 = 'brown'

console.log(dinosaursThatHunterKnows.trex)
console.log(dinosaursThatHunterKnows.stegosaurus)

let dinosaurToCheck = 'trex'

console.log(dinosaursThatHunterKnows[dinosaurToCheck])

// listOfDinosaurs.push

const listOfDinosaurs = [
    "trex", "raptor", "triceratops"
]

console.log(listOfDinosaurs)

listOfDinosaurs.push('stegosaurus');

listOfDinosaurs.pop()

listOfDinosaurs.unshift('flying one')
listOfDinosaurs.shift()

console.log(listOfDinosaurs[0])
console.log(listOfDinosaurs[1])
console.log(listOfDinosaurs[2])
console.log(listOfDinosaurs[3])
console.log(listOfDinosaurs[4])

console.log(listOfDinosaurs.slice(1, 10))

console.log(giveMeARandomDinosaur())

function giveMeARandomDinosaur() {
    return "triceratops"
}

console.log(giveMeARandomDinosaur())

function getExcitedAboutADinosaur(dinosaurName = 'trex') {
    return dinosaurName + "!"
}

console.log(getExcitedAboutADinosaur(giveMeARandomDinosaur()))
console.log(getExcitedAboutADinosaur())


let howManyDinosaursDoIKnow = function() {
    return 4;
}

console.log(howManyDinosaursDoIKnow())


function getExcitedAboutADinosaurDynamically(dinosaurNameGeneratorFunc) {
    return dinosaurNameGeneratorFunc() + "!";
}

console.log(getExcitedAboutADinosaurDynamically(giveMeARandomDinosaur))

giveMeARandomDinosaur.color = 'red'

console.log(giveMeARandomDinosaur.color)
console.log(giveMeARandomDinosaur())

const dinosaurString = "dinosaurs" + " " + "are" + " " + "fun" + "!";
console.log(dinosaurString)

const dinosaurNameString = 'trex'

const dinosaurStringTemplateLiterate = `${dinosaurNameString} are fun!`

console.log(dinosaurStringTemplateLiterate)

let undefinedVariable;

console.log(undefinedVariable)

const badMath = Number("ADfadsf")
console.log(badMath)

if('') {

    console.log("The if statement succeeded!")

} else {
    console.log("The is statement failed :( ")
}


// if(true === true) {

//     console.log("I guess true === true")
// } else if()

for(let i = 0; i < listOfDinosaurs.length; i++) {
    console.log(listOfDinosaurs[i])
}


for(let dinosaurKey in dinosaursThatHunterKnows) {
    console.log(dinosaurKey)
    console.log(dinosaursThatHunterKnows[dinosaurKey])
}

for(let dinosaurValue of listOfDinosaurs) {
    console.log(dinosaurValue);
}

for(let dinosaurKey in listOfDinosaurs) {
    console.log(dinosaurKey)
}
