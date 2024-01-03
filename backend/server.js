const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const { default: mongoose } = require("mongoose");
const userRoute = require('./routes/userRoute')
let app = express()

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


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


console.log("server listening at port 3000");

app.use('/',userRoute)