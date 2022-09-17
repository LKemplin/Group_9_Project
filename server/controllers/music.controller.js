const Music = require('../models/music.model');

module.exports.addSong = (req, res) => {
    Music.create(req.body)
    .then(song => {
        console.log(song)
        res.json(song)
    }).catch((err) => {
        res.status(400).json({message: 'Something went wrong with create', error: err.errors})
    })
}

module.exports.displayAll = (req, res) => {
    Music.find({})
    .then((allSongs) => {
        console.log(allSongs)
        res.json(allSongs)
    }).catch((err) => {
        res.status(400).json({message: 'Something went wrong with displayAll', error: err.errors})
    })
}

module.exports.getSongbyID = (req, res) => {
    Music.findOne({_id: req.params.id})
    .then((song) => {
        console.log(song)
        res.json(song)
    }).catch((err) => {
        res.status(400).json({message: "Something went wrong with findOne", error: err.errors})
    })
}

module.exports.updateSong = (req, res) => {
    Music.findOneandUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updatedSong) => {
        console.log(updatedSong)
        res.json(updatedSong)
    }).catch((err) => {
        res.status(400).json({message: 'something went wrong with update', error: err.errors})
    })
}

module.exports.deleteSong = (req, res) => {
    Music.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch((err) => {
        res.status(400).json({message: 'something went wrong with delete', error: err.errors})
    })
}