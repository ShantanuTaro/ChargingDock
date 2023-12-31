
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


module.exports={index, register}