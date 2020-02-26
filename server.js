
const express = require('express')
const helmet = require('helmet')

const recipesRouter = require('./recipes/recipes-router.js');
const ingredientRouter = require('./ingredients/ingredient_router')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipesRouter)
//server.use('/api/ingredients', ingredientRouter)


module.exports = server