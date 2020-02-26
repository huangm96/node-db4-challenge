exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl.string("user_name", 255).notNullable();
    })
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 255).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
      .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 255).notNullable();
        tbl.float('quantity').notNullable().unsigned();
        tbl
          .integer("recipe_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      .createTable('cooking_steps', tbl => {
        tbl.increments();
        tbl.string('step_name', 255).notNullable();
        tbl.integer('step_number').notNullable().unsigned();
        tbl
          .integer("recipe_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("cooking_steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("users");
};
