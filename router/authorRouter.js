const authorRouter = require ('express').Router()
const authorController = require('../controllers/authorController')

authorRouter.get('/authors', authorController.getAuthors)
authorRouter.post('/authors', authorController.postAuthors)
authorRouter.delete('/authors/:id', authorController.deleteAuthors)
authorRouter.get('/authors/:id', authorController.getOneAuthors)
module.exports = authorRouter