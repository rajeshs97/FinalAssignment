var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var forms=new Schema({
  batch: String,
  name : String,
  email : String,
  phone : String,
  giturl : String,
  empcode : String,
  empdesg : String,
  skills : String,
  experience : String
});
module.exports = mongoose.model('formList',forms);//gmailList is document name
