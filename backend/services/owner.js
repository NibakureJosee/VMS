const Owner = require('../models/owner.model');

module.exports.createOwner = async(req)=>{
    const {names,nationalId,phoneNumber,address} = req;
    const newOwner = new Owner();
    newOwner.names = names;
    newOwner.nationalId = nationalId;
    newOwner.phoneNumber = phoneNumber;
    newOwner.address = address;
    await newOwner.save();
    return newOwner;
 };

 module.exports.getAllOwners = async(req)=>{
    const owners = await Owner.find();
    if(!owners) return false;
    return owners;
 }