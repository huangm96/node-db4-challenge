const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("ingredients")
    .join("recipes", "recipes.id", "ingredients.recipe_id")
    .where({ recipe_id: recipe_id })
    .select("recipe_name", "ingredient_name", "quantity");
}

function getInstructions(recipe_id) {
  return db("cooking_steps")
    .join("recipes", "recipes.id", "cooking_steps.recipe_id")
    .where({ recipe_id: recipe_id })
    .orderBy("step_number")
    .select("recipe_name", "step_number", "step_name");
}
