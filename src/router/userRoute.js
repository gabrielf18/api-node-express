import express from 'express'

const router = express.Router()


router.get('/', (req, res) => {
    const users = [
        {id: 1, name: "João"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Gabriel"}
    ]
    res.json(users)
})

router.post('/', (req, res) => {
    res.json({message: "Usuario criado com sucesso"})
})
router.put('/', (req, res) => {
    res.json({message: "Usuario atualizado com sucesso"})
})
router.delete('/', (req, res) => {
    res.json({message: "Usuario deletado com sucesso"})
})

export default router