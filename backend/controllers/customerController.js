
const CustomerModel = require("../models/user")

const listCustomers = (req,res,next) =>{
    try {
        const users = CustomerModel.find({}).then(response =>{
            res.json({
                response
            })
        })
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
      }
}

const customerRegistration = async (req,res,next) =>{
  try {
      const { firstName, lastName, email, password } = req.body;
      let newCustomer = new CustomerModel({ firstName, lastName, email, password  });
      
      newCustomer.password = newCustomer.generateHash(password)
      
      const savedUser = await newCustomer.save();
      res.json(savedUser);
      //res.send(savedUser)
    } catch (error) {
      console.error('Error creating User:', error);
      res.status(500).send('Internal Server Error');
    }
}

const customerLogin = async(req,res,next) =>{

      try {
        // check if the customer exists
        const { email, password } = req.body;
        let customer = await CustomerModel.findOne({ email: req.body.email });
        if (customer) {
          //check if password matches
          const result = customer.validPassword(req.body.password);
          if (result) {
            res.json("customer validated");
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


module.exports={listCustomers, customerRegistration, customerLogin}