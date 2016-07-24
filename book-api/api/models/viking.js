// grab the packages we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Viking_Schema = new Schema({
    vikingId: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    fullName: String,
    tribe: String,
    images:{
      thumbnail:String,
      hero:String
    },
    details: {
        height: String,
        eyes: String,
        hair: String,
        weapons: [
            String
        ],
        location: String
    },
    about: {
        descriptionOne: String,
        descriptionTwo: String
    },
    relationShips: [{
        type: Schema.Types.Mixed
    }]
});

var relationShipSchema = new mongoose.Schema({
    name: String,
    description: String,
    id: String,
    type: String,
    thumbnail:String
});

// the schema is useless so far
// we need to create a model using it
var Viking = mongoose.model('Viking', Viking_Schema);
// make this available to our users in our Node applications
module.exports = Viking;
