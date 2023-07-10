const express = require("express")


const router = express.Router()

// GET all data entries
router.get('/', (req, res) => {
    res.json({mssg: 'GET all data'})
})

// GET a single data entry
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single data entry'})
})

// POST a data entry
router.post('/', (req, res) => {
    res.json({mssg: 'POST new data entry'})
})

// DELETE a data entry
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a data entry'})
})

// UPDATE a data entry
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a data entry'})
})



module.exports = router