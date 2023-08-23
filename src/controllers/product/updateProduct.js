import product from '../../models/productModels.js'

const updateUser = async (req, res) => {
    try {
        const [result] = await product.update(req.body)
        if(result.affectedRows === 1) {
            res.status(201).json({
                message: `product id: ${req.body.id} updated Successfully`, 
                product: {...req.body}
        })
        }else{
            res.status(204).json({message: `product id: ${req.body.id} not found`})
        }
       } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
       }
}

export default updateUser