var Dragon      = require('../models/dragon');
var dragonsData = require('../mocks/dragons');

function getAllDragons(req,res){
  console.log('Lisiting down all dragons');
  var response = {};
  Dragon.find({}, function(err, dragons){
      if(!err){
        response.success = true;
        response.dragons = dragons;
      }else{
        response.success = false;
        response.message = 'Alas No Dragons Found, may be they went in Search for New Land';
      }
      return res.send(response);
  });
}

function getDragonDetails(req,res){
  var dragonId = req.params.id;
  var response = {};
  console.log('Getting details for Dragons',dragonId);
  Dragon.findOne( {'dragonId' : dragonId }, function(err, dragon){
        if(!err){
          response.success = true;
          response.dragon = dragon;
        }else{
          response.success = false;
          response.message = 'No Details available for the queried Dragon';
        }
        return res.send(response);
    });
}

function recordAllDragons(req,res){
  var response = {};
  Dragon.collection.insertMany(dragonsData, function(err,response) {
      if(!err){
        response.success = true;
        response.message = 'All Dragons are recorded';
      }else{
        response.success = false;
        response.message = 'Error while recording dragons';
        response.error   = err;
      }
      return res.send(response);
  });
}

function saveDragonDetails(req,res){
  var dragon = req.body;
  var NewDragon = new Dragon(dragon);
  var response = {};
  NewDragon.save(function(err,dragon) {
    if(!err){
      response.success = true;
      response.message = 'Saved Dragon data';
    }else{
      response.success = false;
      response.message = 'Failed while saving dragon';
    }

   return res.send(response);
 });
}

module.exports = {
    getAllDragons     :getAllDragons,
    getDragonDetails  :getDragonDetails,
    saveDragonDetails :saveDragonDetails,
    recordAllDragons  :recordAllDragons
};
