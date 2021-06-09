const inventories = require('../controllers/controllers')

const router = (app) => {
    app.post('/api/book', inventories.createBook)
    app.get('/api/book/:id', inventories.getBook)
    app.get('/api/books', inventories.books)
    app.put('/api/book', inventories.updateBook)
    app.delete('/api/book/:id', inventories.deleteBook)
}

module.exports = router