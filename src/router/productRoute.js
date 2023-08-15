import express from 'express'
import listProduct from '../controllers/product/listProduct.js'
import createProduct from '../controllers/product/createProduct.js'
import updateProduct from '../controllers/product/updateProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'

const router = express.Router()

router.get('/', listProduct)

router.post('/', createProduct)

router.put('/', updateProduct)

router.delete('/', deleteProduct)

export default router