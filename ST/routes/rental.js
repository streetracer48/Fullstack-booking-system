const express = require('express');
const router = express.Router();
const {Rental} = require('../models/rental')


router.get('', function(req,res){

    Rental.find({}, (err, docs) => {
        if(err) {
              return res.status(400).send(err);
        }
        res.status(200).send(docs) 
  })

})

module.exports = router;