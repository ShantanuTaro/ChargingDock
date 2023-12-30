let express=require("express");
let bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ChargingDock');
let db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

let app=express()


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
             
        return res.redirect('/success');
})


app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('index.html');
}).listen(3000)


console.log("server listening at port 3000");
