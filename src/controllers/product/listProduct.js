const listProduct = (req, res) => {
    const doces = [
        {id: 1, name: "Biz"},
        {id: 2, name: "Alpino"},
        {id: 3, name: "Nutella"}
    ]
    res.json(doces)
}

export default listProduct