import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    // If there's no token, return 401 Unauthorized
    if (!token) {
      return res.status(401).json({ success: false, message: "Token is missing" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Attach user ID to request
    req.id = decoded.userId;

    // Proceed to the next middleware/route handler
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: "Token expired" });
    }
    console.log(error);
    return res.status(500).json({ success: false, message: "Authentication failed" });
  }
};

export default isAuthenticated;
