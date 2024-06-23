const jwt = require('jsonwebtoken');
const {Login,Signup} = require('../services/auth');


module.exports.SignupController = async (req, res) => {
    const admin = await Signup(req.body);
    if (!admin)
      return res
        .status(400)
        .json({
          success: false,
          message: "Failed to create new admin",
          data: null,
        });
    delete admin.password;
    return res
      .status(201)
      .json({ message: true, message: "admin Created Successfully", data: admin });
  };


  module.exports.LoginController = async (req, res) => {
    const admin = await Login(req.body.email, req.body.password);
  
    if (!admin)
      return res
        .status(400)
        .json({ success: false, message: "invalid credentials", data: admin });
  
        const id = admin._id;
        let payload = {id};
  
        let accessToken = jwt.sign(payload,process.env.SECRET,{
          algorithm:process.env.ALGORITHM,
          expiresIn:process.env.EXPIRESIN
        });
  
        res.cookie("jwt",accessToken,{secure:true,httpOnly:true});
        return res.status(200).json({
          success:true,
          token:accessToken,
          message:"Login Successfully completed..",
          user:admin
        })
    
  };