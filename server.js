const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authorRouter = require('./router/authorRouter')
const recipeRouter = require('./router/recipeRouter')

app.use(express.json())
app.use(recipeRouter)// permet à express d'utiliser le fichier de router
app.use(authorRouter)

app.listen(3000, (err) => {
    if (err) {
        console.log(err);

    } else {
        console.log("connecté au serveur");
    }
})

mongoose.connect("mongodb://localhost:27017/apirecipes")

// app.get("/", (req, res)=>{
//     res.json("bonjour serveur pouet pouet")
// })
