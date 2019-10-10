
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cooking_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cooking_steps").insert([
        {
          step_name: "Preheat oven to 400 degrees F (200 degrees C).",
          step_number: 1,
          recipe_id: 1
        },
        {
          step_name:
            "Arrange fish sticks in a single layer on a baking sheet, and bake 20 minutes in the preheated oven, or until crisp and golden brown. Remove from heat and cut into thirds.",
          step_number: 2,
          recipe_id: 1
        },
        {
          step_name:
            "Heat the vegetable oil in a skillet over medium-high heat. Fry the tortillas until soft. Drain on paper towels.",
          step_number: 3,
          recipe_id: 1
        },
        {
          step_name:
            "Fill the heated tortillas with fish stick portions, cabbage, tartar sauce, and salsa to serve.",
          step_number: 4,
          recipe_id: 1
        },
        {
          step_name: "Preheat oven to 400 degrees F (200 degrees C).",
          step_number: 1,
          recipe_id: 2
        },
        {
          step_name:
            "Place the creamy garlic dressing and pecans in separate bowls. Dip each chicken breast in the dressing then in the pecans to coat. Arrange chicken on a baking sheet.",
          step_number: 2,
          recipe_id: 2
        },
        {
          step_name:
            "Bake chicken 25 minutes in the preheated oven, until juices run clear. Cool slightly, and cut into strips.",
          step_number: 3,
          recipe_id: 2
        },
        {
          step_name:
            "On serving plates, arrange equal amounts of the lettuce, mandarin oranges, cranberries, and blue cheese. Top with equal amounts chicken, and serve with Ranch dressing.",
          step_number: 4,
          recipe_id: 2
        },
        {
          step_name:
            "Pound chicken breasts if they are too thick. Place a cheese and ham slice on each breast within 1/2 inch of the edges. Fold the edges of the chicken over the filling, and secure with toothpicks. Mix the flour and paprika in a small bowl, and coat the chicken pieces.",
          step_number: 1,
          recipe_id: 3
        },
        {
          step_name:
            "Heat the butter in a large skillet over medium-high heat, and cook the chicken until browned on all sides. Add the wine and bouillon. Reduce heat to low, cover, and simmer for 30 minutes, until chicken is no longer pink and juices run clear.",
          step_number: 2,
          recipe_id: 3
        },
        {
          step_name:
            "Remove the toothpicks, and transfer the breasts to a warm platter. Blend the cornstarch with the cream in a small bowl, and whisk slowly into the skillet. Cook, stirring until thickened, and pour over the chicken. Serve warm.",
          step_number: 3,
          recipe_id: 3
        }
      ]);
    });
};
