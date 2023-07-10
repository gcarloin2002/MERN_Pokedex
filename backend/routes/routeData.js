const express = require("express")
const Data = require('../models/dataModel')


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
router.post('/', async (req, res) => {
    const {dexNumber} = req.body

    try {
        const data = await Data.create({dexNumber})
        res.status(200).json(data)
    }

    catch (error) {
        res.status(400).json({error: error.message})
    }
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