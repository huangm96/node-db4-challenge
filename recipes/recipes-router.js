const express = require('express')

const recipesModel = require('./recipes-model.js')

const router = express.Router();

router.get("/", (req, res) => {
  recipesModel
    .getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get recipes", error });
    });
});

router.get("/:id/ingredients", (req, res) => {
  recipesModel
    .getShoppingList(req.params.id)
      .then(ingredient => {
          if (ingredient) {
            res.json(ingredient);
          } else {
          }
          res
            .status(404)
            .json({ message: "Could not find ingredients for given recipe id" });
      
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get ingredients", error });
    });
});

router.get('/:id/instructions', (req, res) => {
    recipesModel
      .getInstructions(req.params.id)
      .then(instruction => {
        if (instruction) {
          res.json(instruction);
        } else {
          res.status(404).json({
            message: "Could not find instructions for given recipe id"
          });
        }
      })
      .catch(error => {
        res.status(500).json({ message: "Failed to get instructions", error });
      });
})

module.exports = router;