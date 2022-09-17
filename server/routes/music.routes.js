const MusicController = require('../controllers/music.controller');

module.exports = (app) => {
    app.get('/api/music', MusicController.displayAll);
    app.post('/api/music/create', MusicController.addSong);
    app.get('/api/music/:id', MusicController.getSongbyID);
    app.put('/api/music/update/:id', MusicController.updateSong);
    app.delete('/api/music/:id', MusicController.deleteSong);
}