import { User } from "../modules/userModel.js"


const isAdmin = async (req, res, next) => {
  try {
    
    const user = await User.findById(req.id);

    if(user && user.role === "owner"){
      next()
    } else {
      return res.status(403).json({success:false, message:"Access denied: Admin"})
    }

  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false,message:"Admin checked failed"})
  }
}

export default isAdmin;