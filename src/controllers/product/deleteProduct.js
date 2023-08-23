import product from "../../models/productModels.js"

const deleteUser =  async (req, res) => {
    try {
    const id = req.body.id
    const [result] = await product.remove(id)
    if(result.affectedRows === 1) {
        res.status(201).json({message: `Product id: ${id} deleted Successfully`})
    }else{
        res.status(204).json({message: `Product id: ${id} not found`})
    }
   } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Server Error'})
   }
}

export default deleteUser