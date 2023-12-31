const mongoose = require("mongoose");
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs');


const userSchema = new Schema({
    firstName: String,
    lastName : String,
    email : String,
    password : String,
 });

 //hash password
 userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
 }

 //check pass is valid
 userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
 
 const UserModel = mongoose.model('User', userSchema);
 module.exports = UserModel