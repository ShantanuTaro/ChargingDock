const mongoose = require('mongoose');
const url = 'mongodb+srv://shantanutaro:shantanutaro@chargingdock.piulw1d.mongodb.net/ChargingDock'
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Connected to MongoDB');
        } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;