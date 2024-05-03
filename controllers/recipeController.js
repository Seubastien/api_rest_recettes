const recetteModel = require('../models/recetteModel')
const authorModel = require('../models/authorModel')
exports.postRecipe = async (req, res) => {
    //creation recette
    //req.params "Va me chercher dans l'URL"
    try {
        const author = authorModel.findOne({ _id: req.params.idAuthors })
        if (author) {
            const newrecipe = new recetteModel(req.body)
            newrecipe.validateSync()
            await newrecipe.save()
            await authorModel.updateOne({ _id: req.params.idAuthors }, { $push: { recipes: newrecipe._id } })
            res.json("Votre recette à bien été crée")
        } else {
            res.json("aucun auteur trouvé")
        }
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}
exports.getRecipe = async (req, res) => {
    //trouver toutes les recettes
    try {
        const recipes = await recetteModel.find()
        res.json(recipes)
    } catch (error) {
        res.json(error)
    }
    //METHODE query pour selectionner certain utilisateur remplace le WHERE de sql
    // userRouter.get('/users', async(req,res)=>{
    //     try {
    //         let users = null
    //         if (req.query.age) {
    //              users = await userModel.find({age: req.query.age}) 
    //         }else{
    //              users = await userModel.find() 

    //         }
    //         res.json(users)
    //     } catch (error) {
    //         console.log(error);
    //         res.json(error)
    //     }
    // })

}
exports.getOneRecipe = async (req, res) => {
    //trouver une recette
    try {

        const recipes = await recetteModel.findOne({ _id: req.params.id })
        res.json(recipes)

    } catch {
        res.json(error)
    }
}
exports.deleteRecipe = async (req, res) => {
    //supprimer une recette
    try {
        const author = authorModel.findOne({ _id: req.params.idAuthors })
        if (author) {
            const recipesDeleted = await recetteModel.deleteOne({_id: req.params.id})
            await authorModel.updateOne({ _id: req.params.idAuthors }, { $pull: { recipes: req.params.idRecipe } })
            res.json("Votre recette à bien été supprimée")
        }

    } catch {
        res.json(error)
    }
}
exports.putRecipe = async (req, res) => {
    //modifier une recette
    try {
        const recipesUpdated = await recetteModel.updateOne({ _id: req.params.id }, req.body)
        res.json(recipesUpdated)
    } catch {
        res.json(error)
    }
}

