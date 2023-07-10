const express = require("express")
const {
    getDexNumbers,
    getDexNumber,
    createDexNumber,
    deleteDexNumber,
    updateDexNumber
} = require('../controllers/dexNumberController')


const router = express.Router()

// GET all data entries
router.get('/', getDexNumbers)

// GET a single data entry
router.get('/:id', getDexNumber)

// POST a data entry
router.post('/', createDexNumber)

// DELETE a data entry
router.delete('/:id', deleteDexNumber)

// UPDATE a data entry
router.patch('/:id', updateDexNumber)



module.exports = router