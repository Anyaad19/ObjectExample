// Array of customer names
const customerNames = ["Anja", "Teacher", "Human"];
const coffeetypes = [
  "Pumpkin Spice latte",
  "Americano",
  "Frappuchino",
  "Matcha Latte",
];
const coffeesize = ["Small", "Medium", "Grande"];
const shotsamount = ["1", "2", "3", "4"];
const milktype = ["Almond milk", "Low Fat Milk", "Milk"];

// Randomly select a name from the array
const randomName =
  customerNames[Math.floor(Math.random() * customerNames.length)];
const randomcoffee =
  coffeetypes[Math.floor(Math.random() * coffeetypes.length)];
const randomcoffeesize =
  coffeesize[Math.floor(Math.random() * coffeesize.length)];
const randomshotsamount =
  shotsamount[Math.floor(Math.random() * shotsamount.length)];
const randommilktype = milktype[Math.floor(Math.random() * milktype.length)]; // Corrected this line

// Create the myCoffee object with the random values
const myCoffee = {
  type: randomcoffee,
  size: randomcoffeesize,
  espressoShots: randomshotsamount,
  milktype: randommilktype, // Corrected the property name
  sugar: false,
  name: randomName,
};

function serveCoffee(coffee) {
  console.log(
    `${coffee.name}, you've ordered a ${coffee.size} ${coffee.type}.`
  );
  if (coffee.milktype) {
    // Corrected the condition
    console.log(`With ${coffee.milktype}.`); // Corrected the console.log
  }
  if (coffee.sugar) {
    console.log("Sweetened.");
  }
  console.log(`${coffee.espressoShots} espresso shots`);
  console.log("Have a nice day!");
}

serveCoffee(myCoffee);

