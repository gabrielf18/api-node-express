import user from '../../models/userModels.js'






const listUsers = async(req, res) => {
    try {
        const [rows, fields] = await user.list()
        if (rows.lenght === 0 ) {
            res.status(404).json({message: 'User not found!'})
        } else {
            res.json(rows)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error'})
    }{}
}

export default listUsers