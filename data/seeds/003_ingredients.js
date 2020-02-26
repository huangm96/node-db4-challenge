
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          ingredient_name: "breaded frozen fish sticks",
          quantity: 30,
          recipe_id: 1
        },
        { ingredient_name: "cup vegetable oil", quantity: 1 / 2, recipe_id: 1 },
        { ingredient_name: "corn tortillas", quantity: 10, recipe_id: 1 },
        {
          ingredient_name: "pound finely shredded red cabbage",
          quantity: 1 / 2,
          recipe_id: 1
        },
        { ingredient_name: "cup tartar sauce", quantity: 3 / 4, recipe_id: 1 },
        { ingredient_name: "cup salsa", quantity: 3 / 4, recipe_id: 1 },
        {
          ingredient_name: "cup creamy garlic salad dressing",
          quantity: 1,
          recipe_id: 2
        },
        {
          ingredient_name: "cup finely chopped pecans",
          quantity: 1,
          recipe_id: 2
        },
        {
          ingredient_name: "skinless, boneless chicken breast halves",
          quantity: 4,
          recipe_id: 2
        },
        {
          ingredient_name: "head romaine lettuce leaves",
          quantity: 1,
          recipe_id: 2
        },
        {
          ingredient_name: "can mandarin oranges,drained",
          quantity: 1,
          recipe_id: 2
        },
        { ingredient_name: "cup dried cranberries", quantity: 1, recipe_id: 2 },
        {
          ingredient_name: "ounces blue cheese, crumbled",
          quantity: 4,
          recipe_id: 2
        },

        {
          ingredient_name: "cup Ranch dressing",
          quantity: 1 / 2,
          recipe_id: 2
        },
        {
          ingredient_name: "skinless, boneless chicken breast halves",
          quantity: 6,
          recipe_id: 3
        },
        { ingredient_name: "slices Swiss cheese", quantity: 6, recipe_id: 3 },
        { ingredient_name: "slices ham", quantity: 6, recipe_id: 3 },
        { ingredient_name: "tablespoon paprika", quantity: 1, recipe_id: 3 },
        { ingredient_name: "tablespoons butter", quantity: 6, recipe_id: 3 },
        {
          ingredient_name: "cup dry white wine",
          quantity: 1 / 2,
          recipe_id: 3
        },
        {
          ingredient_name: "teaspoon chicken bouillon granules",
          quantity: 1,
          recipe_id: 3
        },
        {
          ingredient_name: "tablespoon cornstarch",
          quantity: 1,
          recipe_id: 3
        },
        { ingredient_name: "cup heavy whipping cream", quantity: 1, recipe_id: 3 }
      ]);
    });
};
