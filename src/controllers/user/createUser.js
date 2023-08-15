const createUser = (req, res) => {
    const dados = req.body
    console.log(dados.nome)
    res.json({
        message: "Usuario criado com sucesso",
        dados: dados
    })
}

export default createUser