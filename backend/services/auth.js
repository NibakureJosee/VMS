const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const {hashPassword} = require('../utils/password');
const {verifyPassword} = require('../utils/password');


module.exports.Signup = async(req)=>{
    const {nationalID,names,email,password,phoneNumber} = req;
    const hashedPassword = await hashPassword(password);
    const newAdmin = new Admin();
    newAdmin.nationalID = nationalID;
    newAdmin.names = names;
    newAdmin.email = email;
    newAdmin.phoneNumber = phoneNumber;
    newAdmin.password =hashedPassword;
 
    await newAdmin.save();
 
    return newAdmin;
 }

 module.exports.Login = async(email,password)=>{
    const admin = await Admin.findOne({email:email});
    if(!admin) return false;
    const passwordMatch = verifyPassword(password,admin.password);
    if(!passwordMatch) return false;
    return admin;
}