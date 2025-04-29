import express from 'express'
import { getMyProfile, login, logout, register } from '../controller/UserInformation.js'
import isAuthenticated from '../middleware/middleware.js'


const router = express.Router()


router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout)


//Protected Route
router.route('/me').get(isAuthenticated,getMyProfile)


export default router;