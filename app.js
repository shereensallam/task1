const express = require('express');
const path = require('path');
const mongoose = require ('mongoose');

var app = express();

const logging = require('./module/auth/route');
const request = require('./module/request/route');

//connecting to mongoDB
const mongoConn = 'task1DB://127.0.0.1/one';
mongoose.connect(mongoConn);

app.use('/auth', logging.authRouter);
app.use('/request', request.reqRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`lInstening on port ${port}`));