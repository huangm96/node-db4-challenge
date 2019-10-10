
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Quick and Easy Fish Tacos", user_id: 1 },
        { recipe_name: "Pecan Crusted Chicken Salad", user_id: 2 },
        { recipe_name: "Chicken Cordon Bleu II", user_id: 3 },
        
      ]);
    });
};
