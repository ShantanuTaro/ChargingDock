const mongoose = require("mongoose");
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs');


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
 module.exports = CustomerModel