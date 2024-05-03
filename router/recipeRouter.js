const recipeRouter = require("express").Router() 
const recipeController = require('../controllers/recipeController')

recipeRouter.post('/authors/:idAuthors/recipes', recipeController.postRecipe)
recipeRouter.get('/recipes', recipeController.getRecipe)
recipeRouter.get('/recipes/:id', recipeController.getOneRecipe)
recipeRouter.delete('/authors/:idAuthors/recipes/:idRecipe', recipeController.deleteRecipe)
recipeRouter.put('/recipes/:id', recipeController.putRecipe)

module.exports = recipeRouter
