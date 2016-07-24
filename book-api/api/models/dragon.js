// grab the packages we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Dragon_Schema = new Schema({
    dragonId: String,
    name: String,
    class: String,
    details: {
        attack: String,
        speed: String,
        armor: String,
        firePower: String,
        shortLimit: String,
        venom: String,
        jawStrength: String,
        stealth: String
    },
    images:{
        thumbnail:String,
        hero:String
    },
    about: {
        descriptionOne: String,
        descriptionTwo: String
    },
    fireType: String,
    hiddenAbilities: {
        description: String
    },
    relationShips: [{
        type: Schema.Types.Mixed
    }]
});

// the schema is useless so far
// we need to create a model using it
var Dragon = mongoose.model('Dragon', Dragon_Schema);
// make this available to our users in our Node applications
module.exports = Dragon;
