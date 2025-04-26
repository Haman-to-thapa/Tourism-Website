import express from 'express'
import isAuthenticated from '../middleware/middleware.js';
import isAdmin from '../middleware/ownerMiddleware.js';
import { createPlaces } from '../controller/searchController.js';

const router = express.Router();

router.route('/').post(isAuthenticated,isAdmin,createPlaces)



export default router;