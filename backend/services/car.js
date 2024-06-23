const Car = require('../models/car.model');

module.exports.createVehicle = async(req)=>{
    const {model,price,plate,year,chasingNumber} = req;
    const newCar = new Car();
    newCar.model = model;
    newCar.price = price;
    newCar.plate = plate;
    newCar.year = year;
    newCar.chasingNumber =chasingNumber;
    await newCar.save();
    return newCar;
 }