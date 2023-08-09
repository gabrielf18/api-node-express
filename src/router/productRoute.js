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
    const dados = req.body
    console.log(dados.nome)
    console.log(dados.tipoProd)
    console.log(dados.validade)
    console.log("Produto criado com sucesso")
    res.json({message: "Produto criado com sucesso"})
})
router.put('/', (req, res) => {
    const dados = req.body
    res.json(
        {message: "Produto atualizado com sucesso. NOVOS DADOS:",
        nome: dados.nome,
        tipo: dados.tipoProd,
        validade: dados.validade
    })
    console.log("Produto Editado com sucesso. NOVOS VALORES: ")
    console.log(dados.nome)
    console.log(dados.tipoProd)
    console.log(dados.validade)
})
router.delete('/', (req, res) => {
    res.json({message: "Produto deletado com sucesso"})
})

export default router