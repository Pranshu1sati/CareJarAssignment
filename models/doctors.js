const mongoose = require('mongoose');

// Define the Schema for the combined doctors
const combinedDoctorSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
  specialist_doctors: [
    {
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      experience_years: {
        type: Number,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      fee: {
        type: String,
        required: true,
      },
      image_url: {
        type: String,
        required: true,
      },
      contact: {
        email: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
      },
      assurance: {
        type: Number,
        required: true,
      },
    },
  ],
});

// Create a model for the combined doctors
const CombinedDoctor = mongoose.model('CombinedDoctor', combinedDoctorSchema);

// Export the model
module.exports = CombinedDoctor;
