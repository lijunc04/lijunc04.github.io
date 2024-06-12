
const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");
const cors = require('cors');
const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.SERVER_LINK;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Successful");
});

const projectRouter = require('./backend/routes/project');
app.use('/', projectRouter);

app.listen(port, ()=>{
    console.log("Server running at "+port);
})