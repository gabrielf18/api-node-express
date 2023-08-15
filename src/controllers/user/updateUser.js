const updateUser = (req, res) => {
    res.json({message: "Usuario atualizado com sucesso. NOVOS DADOS:"})
    const dados = req.body
    console.log( "Usuario atualizado com sucesso. NOVOS DADOS:")
    console.log(dados.nome)
    console.log(dados.idade)
    console.log(dados.email)
}

export default updateUser