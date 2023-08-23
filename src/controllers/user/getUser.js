import user from '../../models/userModels.js'

const getUser = async (req, res) => {
    try {
        const [row] = await user.get(req.body)
        res.status(200)
        delete row[0].pass
        res.json(row)
        
    } catch (error) {
        
    }
}

export default getUser