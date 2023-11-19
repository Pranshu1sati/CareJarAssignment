require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./db/connect');
const CombinedDoctor = require('./models/doctors');
const jsonDoctors = require('./0b32abfc-c425-429d-9da4-ecc36119fd20.json');

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
  
      // Delete existing data
      await CombinedDoctor.deleteMany();
  
      // Insert data
      await CombinedDoctor.create(jsonDoctors.doctors);
  
      console.log('Data inserted successfully');
    } catch (error) {
      console.error(error);
    } finally {
      // Ensure to close the database connection after the operations
      await mongoose.connection.close();
    }
  };
  
  start();
