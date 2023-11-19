const combinedDoctorSchema = require('../models/doctors')
const getAllProductStatic = async(req,res) =>{
    const doctors = await combinedDoctorSchema.find({})
    res.status(200).json({doctors})
}
const getAllDocbyid = async(req,res) =>{
    const idToFind = req.params.id;; // Change this value to the desired id
      // Find doctors with matching id in the specialist_doctors array
      const doctor = await combinedDoctorSchema.findOne({id : idToFind})
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
    
      res.status(200).json({ doctor});
}

module.exports = {
    getAllDocbyid,
    getAllProductStatic,

}