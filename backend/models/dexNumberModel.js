const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dexNumberSchema = new Schema({
    dexNumber: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('DexNumber', dexNumberSchema)