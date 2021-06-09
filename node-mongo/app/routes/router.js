const lists = require('../controllers/controllers')

const router = (app) => {
    app.post('/api/list', lists.createList)
    app.get('/api/list/:id', lists.getList)
    app.get('/api/lists', lists.lists)
    app.put('/api/list', lists.updateList)
    app.delete('/api/list/:id', lists.deleteList)
}

module.exports = router