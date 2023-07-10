const DexNumber = require('../models/dexNumberModel')
const mongoose = require('mongoose')


// get all dexNumbers
const getDexNumbers = async (req, res) => {
    const dexNumbers = await DexNumber.find({}).sort({dexNumber: 1})

    res.status(200).json(dexNumbers)
}


// get a single dexNumber
const getDexNumber = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such dexNumber'})
    }

    const dNum = await DexNumber.findById(id)

    if (!dNum) {
        return res.status(404).json({error: 'No such dexNumber'})
    }

    res.status(200).json(dNum)
}



// create new dexNumber
const createDexNumber = async (req, res) => {
    const {dexNumber} = req.body

    // add doc to db
    try {
        const dN = await DexNumber.create({dexNumber})
        res.status(200).json(dN)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}



// delete a dexNumber



// update a dexNumber





module.exports = {
    getDexNumbers,
    getDexNumber,
    createDexNumber
}