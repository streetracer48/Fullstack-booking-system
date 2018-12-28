const express = require('express');
const mongoose = require('mongoose');
const config =require('../config/dev')
mongoose.connect(config.DB_URI);
const app = express();


const port = process.env.PORT || 3002;

app.listen(port, () => {
     console.log(`Server Lising on port ${port}`);
})