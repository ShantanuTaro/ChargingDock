const mongoose = require("mongoose");
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs');

//Customer Logic
const customerSchema = new Schema({
    firstName: String,
    lastName : String,
    email : String,
    password : String,
 });

 //hash password
 customerSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
 }

 //check pass is valid
 customerSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
 
 const CustomerModel = mongoose.model('CustomerDetails', customerSchema);


 //Agent Logic
 const agentSchema = new Schema({
   firstName: String,
   lastName : String,
   email : String,
   password : String,
   chargerLocation : String,
   chargerLocationCode: String, //Longetitude and Latitude
   noOfChargers : Number,
   uniqueId : String
});
 //hash password
 agentSchema.methods.generateHash = function(password){
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

//check pass is valid
agentSchema.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.password);
 };

const AgentModel = mongoose.model('AgentDetails', agentSchema);


 //Charger Logic
 const chargerSchema = new Schema({
   uniqueId : String,
   dockNumber: Number,
   chargerStatus : String,
   pricePerWatt : Number,
   currentType: String,
   chargerType : String,
   chargerTimingFrom: String,
   chargerTimingTo: String,
   available24hrs: Boolean
});

const ChargerModel = mongoose.model('ChargerDetails', chargerSchema);

///


 module.exports = {CustomerModel, AgentModel, ChargerModel}