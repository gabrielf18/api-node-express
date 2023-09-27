import user from '../../models/userModels.js'

const createUser = async (req, res) => {
   try {
    const [result] = await user.create(req.body)
    if(result.affectedRows === 1) {
        res.status(201).json({
            success: 'User Created',
            user:{
                id: result.insertId,
                ...req.body
            }
        })
    }
   } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Server Error'})
   }
}

export default createUser