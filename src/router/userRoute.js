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
    const dados = req.body
    console.log(dados.nome)
    res.json({
        message: "Usuario criado com sucesso",
        dados: dados
    })
})
router.put('/', (req, res) => {
    res.json({message: "Usuario atualizado com sucesso. NOVOS DADOS:"})
    const dados = req.body
    console.log( "Usuario atualizado com sucesso. NOVOS DADOS:")
    console.log(dados.nome)
    console.log(dados.idade)
    console.log(dados.email)
})
router.delete('/', (req, res) => {
    res.json({message: "Usuario deletado com sucesso"})
})

export default router