const fs = require("fs");

// Read the JSON file
fs.readFile("notion.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  //list all the food items

  console.log("list of all the food items");

  console.log(jsonData);

  //list all the food items with category food vegetables
  console.log("list of all the food items with category food vegetables");

  let categoryFoodVegetables = jsonData.filter((item) => {
    if (item.category === "Vegetable") return true;
  });

  console.log(categoryFoodVegetables);

  //list all the food items with category food Fruits

  console.log("list of all the food items with category food Fruits");

  let categoryFoodFruit = jsonData.filter((item) => {
    if (item.category === "Fruit") return true;
  });

  console.log(categoryFoodFruit);
  // list all the food items with category protien
  console.log("list of all the food items with category protien");
  let categoryFoodProtein = jsonData.filter((item) => {
    if (item.category === "Protein") return true;
  });
  console.log(categoryFoodFruit);
  // list all the food items with category nuts
  console.log("list of all the food items with category nuts");
  let categoryFoodNuts = jsonData.filter((item) => {
    if (item.category === "Nuts") return true;
  });
  console.log(categoryFoodNuts);

  // list all the food items with category grain
  console.log("list of all the food items with category grain");
  let categoryFoodGrain = jsonData.filter((item) => {
    if (item.category === "Grain") return true;
  });
  console.log(categoryFoodGrain);

  // list all the food items with category dairy
  console.log("list of all the food items with category dairy");
  let categoryFoodDairy = jsonData.filter((item) => {
    if (item.category === "Dairy") return true;
  });
  console.log(categoryFoodDairy);

  //list all the food items with calorie above 100

  console.log("list of all the food items with calorie above 100");

  let calorieAbove100 = jsonData.filter((item) => {
    if (item.calorie > 100) return true;
  });

  console.log(calorieAbove100);

  //list all the food items with calorie above 100

  console.log("list of all the food items with calorie below 100");

  let calorieBelow100 = jsonData.filter((item) => {
    if (item.calorie < 100) return true;
  });

  console.log(calorieBelow100);

  // list all the food items with highest protien content to lowest
  function comapareFn(a, b) {
    return b.protiens - a.protiens;
  }
  console.log(
    "list of all the food items with highest protien content to lowest"
  );

  const highestToLowestProtein = jsonData.toSorted(comapareFn);

  console.log(highestToLowestProtein);

  // list all the food items with lowest cab content to highest

  console.log("list of all the food items with lowest cab content to highest");

  function comapareFn(a, b) {
    return a.cab - b.cab;
  }

  const lowestCabToHeighest = jsonData.toSorted()

  console.log(lowestCabToHeighest);

  
});
