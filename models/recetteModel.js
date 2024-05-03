const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"]
    },
    ingredients: {
        type: [],
        required: [true, "les ingredients sont requis"]
    },
    instructions: {
        type: String,
        required: [true, "les instructions sonts requises"]
    },
    dificulty: {
        type: String,
        required: [true, "un niveau de difficulté est requis"]
    },
    category: {
        type: String,
        required: [true, "une catégorie est requise"]
    },
preparTime: {
        type: String,
        required: [true, "le temps de préparation est requis"]
    },
    cookingTime: {
        type: String,
        required: [true, "le temps de cuisson est requis"]
    }

})

const recetteModel = mongoose.model('recipes', recipeSchema)
module.exports = recetteModel