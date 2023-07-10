const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dataSchema = new Schema({
    dexNumber: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Data', dataSchema)