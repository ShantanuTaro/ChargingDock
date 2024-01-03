
const User = require("../models/user")

const listAgents = (req,res,next) =>{
    try {
        const users = User.AgentModel.find({}).then(response =>{
            res.json({
                response
            })
        })
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
      }
}

const agentRegistration = async (req,res,next) =>{
  try {
      const { firstName, lastName, email, password, chargerLocation, noOfChargers } = req.body;
      let newAgent = new User.AgentModel({ firstName, lastName, email, password, chargerLocation, noOfChargers  });
      
      newAgent.password = newAgent.generateHash(password)
      
      const savedUser = await newAgent.save();
      res.json(savedUser);
      //res.send(savedUser)
    } catch (error) {
      console.error('Error creating User:', error);
      res.status(500).send('Internal Server Error');
    }
}

const agentLogin = async(req,res,next) =>{

      try {
        // check if the agent exists
        const { email, password } = req.body;
        let agent = await User.AgentModel.findOne({ email: req.body.email });
        if (agent) {
          //check if password matches
          const result = agent.validPassword(req.body.password);
          if (result) {
            res.json("Agent validated");
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


module.exports={listAgents, agentRegistration, agentLogin}