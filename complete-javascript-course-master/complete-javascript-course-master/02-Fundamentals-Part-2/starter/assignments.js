// Functions

console.log("//**** Functions ****\\");

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const DescSa = describeCountry("South Africa", 10, "Cape Town");
const DescUsa = describeCountry("United States", 11, "New Yolk");
const DescEur = describeCountry("Europe", 9, "china");

console.log(DescSa);
console.log(DescUsa);
console.log(DescEur);

console.log("");

// Function Declarations vs. Expressions

console.log("//**** Function Declarations vs. Expressions ****\\");

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

percentageOfWorld3 = (population) => (population / 7900) * 100;

const PopChina = percentageOfWorld1(2796);
const PopSouthAf = percentageOfWorld1(3845);
const PopAutra = percentageOfWorld1(1945);

const PopuChina = percentageOfWorld2(2796);
const PopuSouthAf = percentageOfWorld2(3845);
const PopuAutra = percentageOfWorld2(1945);

const PopulChina = percentageOfWorld3(2796);
const PopulSouthAf = percentageOfWorld3(3845);
const PopulAutra = percentageOfWorld3(1945);

console.log(PopChina, PopSouthAf, PopAutra);
console.log(PopuChina, PopuSouthAf, PopuAutra);
console.log(PopulChina, PopulSouthAf, PopulAutra);

console.log("");

// Functions Calling Other Functions

console.log("//**** Functions Calling Other Functions ****\\");

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
};

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);

console.log("");

// Introduction to Arrays

console.log("//**** Introduction to Arrays ****\\");

const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

console.log("");