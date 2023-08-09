import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const doces = [
        {id: 1, name: "Biz"},
        {id: 2, name: "Alpino"},
        {id: 3, name: "Nutella"}
    ]
    res.json(doces)
})

router.post('/', (req, res) => {
    res.json({message: "Produto criado com sucesso"})
})
router.put('/', (req, res) => {
    res.json({message: "Produto atualizado com sucesso"})
})
router.delete('/', (req, res) => {
    res.json({message: "Produto deletado com sucesso"})
})

export default router