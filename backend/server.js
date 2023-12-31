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


// const userSchema = new mongoose.Schema({
//    firstName: String,
//    lastName : String,
//    email : String,
//    password : String,
// });

// const UserModel = mongoose.model('User', userSchema);

// app.get('/users', async (req, res) => {
//   try {
//     const users = await UserModel.find({});
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.post('/register', async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;
//     const newUser = new UserModel({ firstName, lastName, email, password  });
//     const savedUser = await newUser.save();
//     res.json(savedUser);
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).send('Internal Server Error');
//   }
// })




// app.get('/', (req, res) => {
//   let results = db.registration.find({});
//   res.send(results);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


console.log("server listening at port 3000");

app.use('/',userRoute)