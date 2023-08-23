import product from '../../models/productModels.js'

const createProduct = async (req, res) => {
   try {
    const [result] = await product.create(req.body)
    if(result.affectedRows === 1) {
        res.status(201).json({
            message: 'Product Created',
            user:{
                id: result.insertId,
                ...req.body
            }
        })
    }
   } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Server Error'})
   }
}

export default createProduct