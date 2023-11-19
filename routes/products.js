const express =  require("express")

const router = express.Router();

const {getAllDocbyid,getAllProductStatic, getDoctorById} = require('../controllers/products');



router.route('/static').get(getAllProductStatic)
router.route('/:id').get(getAllDocbyid);

module.exports = router