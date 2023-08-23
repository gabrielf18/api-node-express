import product from '../../models/productModels.js'

const getProduct = async (req, res) => {
    try {
        const [result] = await product.get(req.body)
        res.status(200)
        res.json(result)
        
    } catch (error) {
        
    }
}

export default getProduct