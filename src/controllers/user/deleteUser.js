import user from "../../models/userModels.js"

const deleteUser =  async (req, res) => {
    try {
    const id = req.body.id
    const [result] = await user.remove(id)
    if(result.affectedRows === 1) {
        res.status(201).json({message: `User id: ${id} deleted Successfully`})
    }else{
        res.status(204).json({message: `User id: ${id} not found`})
    }
   } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Server Error'})
   }
}

export default deleteUser