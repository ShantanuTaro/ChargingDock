const express=require("express");
const bodyParser=require("body-parser");
const connectDB = require("./config/db")

let app=express()
connectDB()
const port = 3000
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/register', function(req,res){
 	    let firstName = req.body.firstName;
        let lastName =req.body.lastName;
        let userName = req.body.userName;
        let password =req.body.password;

        let data = {
            "firstName": firstName,
            "lastName":lastName,
            "userName":userName,
            "password":password
        }
        console.log(data)
        db.collection('registration').insertOne(data,function(err, collection){
            if (err) throw err;
            console.log("Record inserted Successfully");
                 
        });

             
          res.send(results).status(200);
        })

     
        

        app.get('/', (req, res) => {
          let results = db.collection('registration').find({firstName : "Shantanu"});
          res.send(results);
        });
        
        // Start the server
        app.listen(port, () => {
          console.log(`Server is running on http://localhost:${port}`);
        });


console.log("server listening at port 3000");
