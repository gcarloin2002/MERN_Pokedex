const express = require("express")
const {
    getDexNumbers,
    getDexNumber,
    createDexNumber
} = require('../controllers/dexNumberController')


const router = express.Router()

// GET all data entries
router.get('/', getDexNumbers)

// GET a single data entry
router.get('/:id', getDexNumber)

// POST a data entry
router.post('/', createDexNumber)

// DELETE a data entry
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a data entry'})
})

// UPDATE a data entry
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a data entry'})
})



module.exports = router