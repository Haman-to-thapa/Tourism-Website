import express from 'express'
import { getAllPlaces, getPlaceById } from '../controller/userSearchController.js'

const router = express.Router()

router.route('/').get(getAllPlaces)
router.route('/:id').get(getPlaceById)





export default router;