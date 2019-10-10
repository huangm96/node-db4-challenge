
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { user_name: "Jones" },
        { user_name: "Min" },
        { user_name: "Mike" }
      ]);
    });
};
