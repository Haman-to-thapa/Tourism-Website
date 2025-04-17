
import bcrypt from 'bcrypt'
import { User } from '../modules/userModel.js';
import { generateToken } from '../utils/generatedToken.js';


export const register  = async(req, res) => {
try {
  const {name, email, password} = req.body;
  if(!name || !email || !password) {
    return res.status(404).json({
      success:false,message:"All field are required"
    })
  };

  const user = await User.findOne({email});
  if(user) {
    return res.status(404).json({success:false, message:"User already exist with this email"})
  }

  const hashPassword = await bcrypt.hash(password,10);

  await User.create({
    name,
    email,
    password:hashPassword})

  return res.status(201).json({success:true, message:"Account Create successFully"})

} catch (error) {
  console.log(error)
  return res.status(500).json({success:false, message:"Failed to register"})
}
}


export const login = async(req,res) => {
  try {
    const {email,password} = req.body;

    if(!email || !password) {
      return res.status(404).json({success:false, message:"Please enter a both email and password"})
    }

    let user = await User.findOne({email});

    if(!user) {
      return res.status(404).json({success:false, message:"Invaiid Email try again"})
    }


    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch){
      return res.status(404).json({success:false, message:"Password not match "})
    }
    return generateToken(res, user, `Welcome back ${user.name}`)
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false, message:"Failed to login"})
  }
}


export const logout = async(_, res) => {

  try {
    return res.status(200).cookie("token","",{maxAge:0})
    .json({success:true, message:"Logged out successfully"})

  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false, message:"Failed to logout"})
  }
  
}