///// JavaScript Fundamentals Part 2 /////


// activating strict mode

/*
"use strict"; 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");


// Functions

function logger() {
    console.log("My name is Jonas");
}

// activating / calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

const num = Number("23")



// Function Declarations vs Expressions


// Function Declarations
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}


// Function Expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991)

console.log(age1, age2);



// Arrow Functions


// arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas")); 
console.log(yearsUntilRetirement(1980, "Bob")); 



// Functions Calling Other functions


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



// Reviewing Functions


const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, "Jonas"))
console.log(yearsUntilRetirement(1950, "Mike"))



// Coding Challenge #1


calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphines = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphines, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphines win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Kolalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

console.log(checkWinner(scoreDolphines, scoreKoalas));
checkWinner(576, 111)




// Introduction to Arrays
// a array is not a primitive value so const can be changed

const friend1 = "Michel";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michel", "Steven", "Peter"]
console.log(friends);

const y = new Array(1991, 1984, 2000, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay"
console.log(friends);
// friends = ["Bob", "Alice"]

firstName = "Jonas"
const jonas = [firstName, "Schmedmann", 2037 - 1991, "teacher", friends];
console.log(jonas.length);
console.log(jonas);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);



// Array Operations(Methods)


const friends = ["Michel", "Steven", "Peter"]

// Add elements
const newLength = friends.push("Jay") // End
console.log(friends);
console.log(newLength);

friends.unshift("John") // Start
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23)
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}



// Coding Challenge #2

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);



// Introduction to Objects

const jonasArray = [
    "Jonas",
    "Schmedtman",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtman",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};



// Dot vs Bracket Notation

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtman",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas."last" + nameKey);

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends")

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request Choose between firstName, lastName, age, job and friends");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman"
console.log(jonas);

// Exercise

console.log( `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



// Object Methods

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtman",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no" } driver's license.`
    }

};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas" is a 46-year old teacher, and he has a driver's license
console.log(jonas.getSummary())



// Coding Challenge #3

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

mark.calcBMI();
console.log(mark.bmi)

john.calcBMI();
console.log(john.bmi)


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
}



// Iteration: The for Loop


// console.log("Lifting weight reptition 1 🏋️‍♂️");
// console.log("Lifting weight reptition 2 🏋️‍♂️");
// console.log("Lifting weight reptition 3 🏋️‍♂️");
// console.log("Lifting weight reptition 4 🏋️‍♂️");
// console.log("Lifting weight reptition 5 🏋️‍♂️");
// console.log("Lifting weight reptition 6 🏋️‍♂️");
// console.log("Lifting weight reptition 7 🏋️‍♂️");
// console.log("Lifting weight reptition 8 🏋️‍♂️");
// console.log("Lifting weight reptition 9 🏋️‍♂️");
// console.log("Lifting weight reptition 10 🏋️‍♂️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) { 
    console.log(`Lifting weight reptition ${rep} 🏋️‍♂️`);
}



// Looping Arrays, Breaking and Continuing


const jonasArray = [
    "Jonas",
    "Schmedtman",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

const types = [];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// ...
// console.log(jonasArray[4]);
// jonasArray[5] does NOT exist

for(let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]); 

    // Filling types array
    // types[i] = typeof jonasArray[i]
    types.push(typeof jonasArray[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for(let i = 0; i < jonasArray.length; i++) { 
    if(typeof jonasArray[i] !== "string") continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for(let i = 0; i < jonasArray.length; i++) { 
    if(typeof jonasArray[i] === "number") break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}



// Looping Backwards and Loops in Loops


const jonasArray = [
    "Jonas",
    "Schmedtman",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for(let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
};
 
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight reptition ${rep} 🏋️‍♂️`);
    }

}



// The while Loop


// for (let rep = 1; rep <= 10; rep++) { 
//     console.log(`Lifting weight reptition ${rep} 🏋️‍♂️`);
// }

let rep = 1
while (rep <= 10) {
    // console.log(`WHILE: Lifting weight reptition ${rep} 🏋️‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log("Loop is about to end...");
    };
}


// Coding Challenge #44


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
  console.log(bills, tips, totals);
  
  const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(calcAverage([2, 3, 7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));
*/

