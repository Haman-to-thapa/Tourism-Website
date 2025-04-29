
import bcrypt from 'bcrypt'
import { User } from '../modules/userModel.js';
import { generateToken } from '../utils/generatedToken.js';


export const register = async(req, res) => {
  try {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
      return res.status(404).json({
        success:false,message:"All fields are required"
      })
    };

    const user = await User.findOne({email});
    if(user) {
      return res.status(404).json({success:false, message:"User already exists with this email"})
    }

    const hashPassword = await bcrypt.hash(password,10);

    await User.create({
      name,
      email,
      password:hashPassword})

    return res.status(201).json({success:true, message:"Account created successfully"})

  } catch (error) {
    return res.status(500).json({success:false, message:"Failed to register"})
  }
}


export const login = async(req,res) => {
  try {
    // Check if req.body exists
    if (!req.body) {
      // Try to parse from rawBody if available
      if (req.rawBody) {
        try {
          req.body = JSON.parse(req.rawBody);
        } catch (e) {
          return res.status(400).json({success:false, message:"Invalid JSON in request body"});
        }
      } else {
        return res.status(400).json({success:false, message:"Request body is missing"});
      }
    }

    const {email,password} = req.body;

    if(!email || !password) {
      return res.status(404).json({success:false, message:"Please enter both email and password"})
    }

    let user = await User.findOne({email});

    if(!user) {
      return res.status(404).json({success:false, message:"Invalid Email try again"})
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch){
      return res.status(404).json({success:false, message:"Password not match"})
    }
    return generateToken(res, user, `Welcome back ${user.name}`)

  } catch (error) {
    return res.status(500).json({success:false, message:"Failed to login"})
  }
}


export const logout = async(_, res) => {
  try {
    return res.status(200).cookie("token","",{maxAge:0})
    .json({success:true, message:"Logged out successfully"})
  } catch (error) {
    return res.status(500).json({success:false, message:"Failed to logout"})
  }
}


export const getMyProfile = async (req, res) => {
  try {
    // Find user by the id from the token
    const user = await User.findById(req.id).select("-password");

    // If no user is found
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Send back the user's profile information without the password
    return res.status(200).json({
      success: true,
      user,
      sessionCode: req.sessionCode || null // Include session code if available
    });
  } catch (error) {
    // Send a generic error message for security
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching your profile",
    });
  }
};
