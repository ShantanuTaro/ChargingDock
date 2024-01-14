
const User = require("../models/user")

const listChargers = (req,res,next) =>{
    try {
        const users = User.ChargerModel.find({}).then(response =>{
            res.json({
                response
            })
        })
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
      }
}

const chargerRegistration = async (req,res,next) =>{
  try {
      const { uniqueId, dockNumber, chargerStatus, pricePerWatt, currentType, chargerType, chargerTiming } = req.body;
      let newCharger = new User.ChargerModel({ uniqueId, dockNumber, chargerStatus, pricePerWatt, currentType, chargerType, chargerTiming  });
      
      const savedUser = await newCharger.save();
      res.json(savedUser);
      //res.send(savedUser)
    } catch (error) {
      console.error('Error creating Charger:', error);
      res.status(500).send('Internal Server Error');
    }
}


module.exports= {listChargers, chargerRegistration}