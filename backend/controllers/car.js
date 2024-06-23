const {createVehicle} = require('../services/car');


module.exports.vehicleController = async (req, res) => {
    const vehicle = await createVehicle(req.body);
    if (!vehicle)
      return res
        .status(400)
        .json({
          success: false,
          message: "Failed to create new vehicle",
          data: null,
        });
    return res
      .status(201)
      .json({ message: true, message: "vehicle Created Successfully", data: vehicle });
  };
