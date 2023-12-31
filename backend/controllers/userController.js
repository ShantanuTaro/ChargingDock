
const UserModel = require("../models/user")

const index = (req,res,next) =>{
    try {
        const users = UserModel.find({}).then(response =>{
            res.json({
                response
            })
        })
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
      }
}

const show = (req,res,next) =>{
    try {
        const { firstName, lastName, email, password } = req.body;
        const newUser = new UserModel({ firstName, lastName, email, password  });
        const savedUser =  newUser.save();
        
        res.json(savedUser);
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
      }
}



module.exports={index, show}