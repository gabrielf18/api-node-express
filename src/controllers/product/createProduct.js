const createProduct =  (req, res) => {
    const dados = req.body
    console.log(dados.nome)
    console.log(dados.tipoProd)
    console.log(dados.validade)
    console.log("Produto criado com sucesso")
    res.json({message: "Produto criado com sucesso"})
}

export default createProduct