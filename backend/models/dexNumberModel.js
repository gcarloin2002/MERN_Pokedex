const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dexNumberSchema = new Schema({
    dexNumber: {
        type: Number,
        required: true
    },

    chosenSpecies: {
        type: String,
        required: true
    },

    chosenForm: {
        type: String,
        required: true
    },

    chosenGender: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('DexNumber', dexNumberSchema)