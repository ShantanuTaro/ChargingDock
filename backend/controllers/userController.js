
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

const register = async (req,res,next) =>{
  try {
      const { firstName, lastName, email, password } = req.body;
      let newUser = new UserModel({ firstName, lastName, email, password  });
      
      newUser.password = newUser.generateHash(password)
      
      const savedUser = await newUser.save();
      res.json(savedUser);
      //res.send(savedUser)
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send('Internal Server Error');
    }
}

const login = async(req,res,next) =>{

      try {
        // check if the user exists
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: req.body.email });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.json("User validated");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
    } 
}


module.exports={index, register, login}