// All fields added and validation to require form entry

const mongoose = require('mongoose')

const MusicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must enter song title."]
    },
    artist: {
        type: String,
        required: [true, "Must enter song title."]
    },
    description: {
        type: String,
        required: [true, "Must enter description."]
    },
    quote: {
        type: String,
        required: [true, "Must enter quote."]
    }
}, {timestamps: true})

module.exports = mongoose.model("Music", MusicSchema)