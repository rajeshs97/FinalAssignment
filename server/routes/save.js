var express = require('express');
var router = express.Router();

var myForm=require('../model/form');
router.post('/',function(req,res,next){
 var data=req.body;

 var change=new myForm(req.body);

 change.save(function(err){
   if(err){
     return handleError(err);
   }
   else{
     console.log("Data saved successfully");
   }
 });
 });



module.exports = router;
