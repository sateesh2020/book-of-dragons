var express               = require('express'),
    router                = express.Router();
var dragonController      = require('../controllers/dragons');
var vikingController      = require('../controllers/vikings');

module.exports = function(app) {

    // REGISTER OUR ROUTES ---------------
    // All of our routes will be prefixed with /api
    app.use('/api', router);
    // Route to handle all angular requests
    router.get('/', function(req, res) {
        res.json({
            message: 'Hello Viking Welcome to Book of Dragons'
        });
    });

    router.get('/dragons',dragonController.getAllDragons);

    router.get('/dragons/record',dragonController.recordAllDragons);

    router.get('/dragons/:id',dragonController.getDragonDetails);

    router.post('/dragons',dragonController.saveDragonDetails);

    router.get('/vikings',vikingController.getAllVikings);

    router.get('/vikings/record',vikingController.recordAllVikings);

    router.get('/vikings/:id',vikingController.getVikingDetails);

    router.post('/vikings',vikingController.saveVikingDetails);
};
