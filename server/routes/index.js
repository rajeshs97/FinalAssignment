/*var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
/*router.post('/', function(req, res, next) {
console.log(req.body.from);
console.log(req.body.subject);
});

module.exports = router;*/
////////////////////////////////////////////////////////////////
var express = require('express');
var router = express.Router();
var form = require('../model/form');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/save',function(req, res, next){
   if(req.body){
     var myform = new form();
    myform.name= req.body.name;
    myform.email= req.body.email;
    myform.phone= req.body.phone;
    myform.giturl= req.body.giturl;
    myform.empcode= req.body.empcode;
    myform.empdesg= req.body.empdesg;
    myform.skills= req.body.skills;
    myform.experience= req.body.experience;

    myform.save(function (err, myform) {
      if (err) {
        return console.log(err);
      }
      else {
        res.send({myform : "Data saved successfully"});
      }
    });
// var pomo = email(body);
//      pomo.save(function (err) {
//         if(err){
//           return console.log(err);
//         }
//        else{
//          console.log("Successsssss");
//        }
//     });
   }
else{
  console.log("Data err");
}
});


module.exports = router;
