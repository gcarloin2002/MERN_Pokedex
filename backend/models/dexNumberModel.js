const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dexNumberSchema = new Schema({
    dexNumber: {
        type: String,
        required: true
    },

    speciesName: {
        type: String,
        required: true
    },

    form: {
        type: String,
        required: true
    },

    appearance: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    shiny: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('DexNumber', dexNumberSchema)