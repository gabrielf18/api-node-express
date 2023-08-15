const updateProduct =  (req, res) => {
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
}

export default updateProduct