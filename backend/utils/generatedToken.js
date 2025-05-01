import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const generatePreviewCode = () => {

  return crypto.randomBytes(3).toString('hex').toUpperCase();
};

export const generateToken = (res, user, message) => {
 
  const previewCode = generatePreviewCode();

 
  const token = jwt.sign({
    userId: user._id,
    previewCode
  }, process.env.SECRET_KEY, {
    expiresIn: '1d',
  });

  res
    .cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({
      success: true,
      message,
      user,
      sessionCode: previewCode // Send the preview code to the client
    });
};
