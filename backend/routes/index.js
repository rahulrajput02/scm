var express = require('express');
var router = express.Router();
var db = require('../connection.js');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var jsonParser = bodyParser.json()
const {
  wrap
} = require('co');
const {
  join
} = require('path');
const moment = require('moment');
const pdf = require('html-pdf');
const thunkify = require('thunkify');
const read = thunkify(require('fs').readFile);
const handlebars = require('handlebars');
var path = "../certificateddocs/";
const pdf_options = {
  format: 'A4',
  quality: 150,
  orientation: "landscape",
  zoomFactor: "0.5"
};
var Cryptr = require('cryptr'),
  cryptr = new Cryptr('myTotalySecretKey');

var hash;
var async = require('asyncawait/async');
var await = require('asyncawait/await');

// var count = 0;
var pdfFile;

router.get('/getdebtor', function (err, res) {


  db.query('SELECT Debtor FROM ucc.Participants;', function (err, result) {
    if (err) throw err;
    else
      console.log(result);
    res.send(result);
  });

})


router.get('/getcollaterol', function (err, res) {

  db.query('SELECT Collaterol FROM ucc.Participants;', function (err, result) {
    if (err) throw err;
    else
      console.log(result);
    res.send(result);
  });

})

router.get('/getsecuredparties', function (err, res) {

  db.query('SELECT Seuredparty FROM ucc.Participants;', function (err, result) {
    if (err) throw err;
    else
      console.log(result);
    res.send(result);
  });

})

router.get('/showFilling', function (err, res) {

  db.query('SELECT * FROM ucc.Documents;', function (err, result) {
    if (err) throw err;
    else
      console.log(result);
    res.send(result);
  });

})

router.post('/getpdf', jsonParser, async (req, res) => {
  var file = req.body.Pdf_Path;
  pdfFile = file.replace('../certificateddocs/', "");

  res.send('OK');
});

router.get('/getpdf', function (err, res) {
  console.log(pdfFile);
  res.download('./certificateddocs/' + pdfFile, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  })
});

router.get('/getstates', function (err, res) {

  db.query('SELECT state FROM ucc.Drop_downs;', function (err, result) {
    if (err) throw err;
    else
      console.log(result);
    res.send(result);
  });

})


// router.post('/getstates', jsonParser,function(req,res){

//   var data= req.body.country;
//   console.log(data);
//   db.query("SELECT state FROM ucc.Drop_downs where country =" + "'" + data + "'", function(err, result) {
//     if (err) throw err;
//     else
//     console.log(result);
//     res.send(result);
//   });

// })


router.post('/getjurisdictions', jsonParser, async (req, res) => {

  var data = req.body.state;
  console.log(data);
  db.query("SELECT jurisdiction FROM ucc.Drop_downs where state=" + "'" + data + "'", function (err, result) {
    if (err) throw err;
    else
      console.log(result);
    res.send(result);
  });

})


router.post('/postorder', jsonParser, async (req, res) => {

  const data = {
    Order_Type: req.body.type,

    Current_Owner: req.body.currentOwner,

    Quantity_Type: req.body.quantityType,

    Quantity: req.body.quantity,
  };

  console.log(data);

  db.query("insert into scm.packageData (orderType,currentOwner,quantiyType, quantiyType) VALUES('" + Order_Type + "','" + Current_Owner + "', '" + Quantity_Type + "','" + Quantity + "')", function (err, result) {
    if (err) {
      console.log(err);
    } else
      console.log(result);
    res.send("DONE");
  });
});

router.post('/postTransactionId', function (req, res) {

  var data = req.body.transactionId;
  console.log(data);
  console.log(hash);

  db.query("update ucc.Documents SET Transaction_ID =" + "'" + data + "' where PDF_Hash = '" + hash + "'", function (err, result) {
    if (err) throw err;
    else
      console.log(result);
    res.send('Transaction ID Succesfully Saved in DB');
  });
});




module.exports = router;