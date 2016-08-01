var Viking     = require('../models/viking');

function getAllVikings(req,res){
  console.log('Lisiting down all vikings');
  var response = {};
  Viking.find({},'vikingId name images', function(err, vikings){
      if(!err){
        response.success = true;
        response.vikings = vikings;
      }else{
        console.log(err);
        response.success = false;
        response.message = 'Alas No Vikings Found, may be they went in Search of Dragons';
      }
      return res.send(response);
  });

}

function getVikingDetails(req,res){
  var vikingId = req.params.id;
  var response = {};
  console.log('Getting details for Viking',vikingId);
  Viking.findOne( {'vikingId' : vikingId }, function(err, viking){
        if(!err){
          response.success = true;
          response.viking = viking;
        }else{
          console.log(err);
          response.success = false;
          response.message = 'No Details available for the queried Viking';
        }
        return res.send(response);
    });
}

function saveVikingDetails(req,res){
  var viking = req.body;
  var NewViking = new Viking(viking);
  var response = {};
  NewViking.save(function(err,viking) {
    if(!err){
      response.success = true;
      response.message = 'Saved Viking data';
    }else{
      console.log(err);
      response.success = false;
      response.message = 'Failed while saving viking';
    }

   return res.send(response);
 });
}

module.exports = {
    getAllVikings     :getAllVikings,
    getVikingDetails  :getVikingDetails,
    saveVikingDetails :saveVikingDetails
};
