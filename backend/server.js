const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const mongoose= require("mongoose");
const cors =require('cors')
const userRoute = require('./routes/userRoute')
let app = express()
const user = require("./models/user");





connectDB()
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {console.log('Connected to MongoDB',)});
const port = 3000

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


console.log("server listening at port 3000");

app.use('/',userRoute)

app.use(cors({
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));