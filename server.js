require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const TaskRoute = require('./routes/Task');
const port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
    //console.log(process.env);
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.use('/task',TaskRoute)
app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});
app.listen(port, () => {
    console.log("Server is listening on port 3000");
});