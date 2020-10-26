import express from 'express'
import {
    getProduct,
    getProducts,
    deleteProduct,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProduct).delete(protect, admin, deleteProduct)

export default router