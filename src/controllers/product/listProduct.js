import user from '../../models/productModels.js'






const listProduct = async(req, res) => {
    try {
        const [rows, fields] = await user.list()
        if (rows.lenght === 0 ) {
            res.status(404).json({message: 'products not found!'})
        } else {
            res.json(rows)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }{}
}

export default listProduct