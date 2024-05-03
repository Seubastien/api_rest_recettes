const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom de l'auteur est requis"]
    },
    recipes: {
        type: [
            {
                type :mongoose.Schema.ObjectId,
                ref: "recipes"
            }
        ]
    }

})
const authorModel = mongoose.model('authors', authorSchema)
module.exports = authorModel