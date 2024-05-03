const authorModel = require('../models/authorModel')

exports.getAuthors = async (req, res) => {
    try {
        const authors = await authorModel.find()
        res.json(authors)
    } catch (error) {
        res.json(error.message)
    }
}
exports.postAuthors = async (req, res) => {
    try {
        const authors = new authorModel(req.body)
        authors.validateSync()
        await authors.save()
        res.json("l'auteur à bien été sauvegardé")
    } catch (error) {
        res.json(error.message)
    }
}
exports.deleteAuthors = async (req, res) => {
    try {
        const authors = await authorModel.delete({ _id: req.params.id })
        res.json(authors)
    } catch (error) {
        res.json(error.message)
    }
}
exports.getOneAuthors = async (req, res) => {
    try {
        const authorsGetOne = await authorModel.findOne({ _id: req.params.id }).populate("recipes")//populate permet d'afficher les recettes détaillé et pas seulement l'id de la recette
        res.json(authorsGetOne)
    } catch (error) {

    }
}