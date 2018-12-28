const express = require('express');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config =require('../config/dev');
const app = express();
mongoose.connect(config.DB_URI);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser())


//Models
const {Rental} = require('../models/rental');


//ROUTES

app.post('/api/rental/detail',(req, res) => {
     const rental  = new Rental(req.body);

     rental.save((err,doc) => {
          if(err) return res.json({
               success:false,
               err
          });

         return res.status(200).json({
               success:true,
               userData:doc
           })  

     })

});


const port = process.env.PORT || 3002;

app.listen(port, () => {
     console.log(`Server Lising on port ${port}`);
})