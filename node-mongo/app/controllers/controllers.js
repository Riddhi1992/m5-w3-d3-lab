const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)
const Book = mongoose.model('Books');

const createList = async (req, res) => {
    const {title, author} = req.body
    const book = new Book({title, author})
    // Save Inventory in the MongoDB
    book.save()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            res.status(500).json({
                message: 'Fail!!!',
                error: error.message
            })
        })
}

const getList = async (req, res) => {
    const {id} = req.params
    Book.findById(id)
        .select('-__v')
        .then((book) => {
            res.status(200).json(book)
        })
        .catch((err) => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Book not found with id ' + id,
                    error: err
                })
            }
            return res.status(500).send({
                message: 'Error retrieving Book with id ' + id,
                error: err
            })
        })
}

const lists = async (req, res) => {
    Book.find()
        .select('-__v')
        .then((books) => {
            return res.status(200).json(books)
        })
        .catch((err) => {
            console.log({err})

            return res.status(500).json({
                message: 'Error!!!',
                error: err
            })
        })
}

const deleteList = async (req, res) => {
    const {id} = req.params
    Book.findByIdAndDelete(id)
        .select('-__v-_id')
        .then((book) => {
            if (!book) {
                return res.status(404).json({
                    message: 'No Inventory found with id = ' + id,
                    error: "404"
                })
            }
        })
        .catch((err) => {
            return res.status(500).json({
                message: 'Error -> Can\'t delete inventory with id =' + id,
                error: err
            })
        })
}

const updateList = async (req, res) => {
    const {id, title, author} = req.body
    // Find Inventory and update it
    Book.findByIdAndUpdate(id, {id, title, author}, {new: false})
        .select('-__v')
        .then((book) => {
            if (!book) {
                return res.status(404).json({
                    message: 'Can\'t update inventory with id =' + id,
                    error: "Not Found"
                })
            }
            res.status(200).json(book)
        })
        .catch((err) => {
            return res.status(500).json({
                message: 'Error -> Can\'t update inventory with id =' + id,
                error: err
            })
        })

}

module.exports = {
    createList,
    getList,
    lists,
    updateList,
    deleteList
}
