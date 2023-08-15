const getUser = (req, res) => {
    const users = [
        {id: 1, name: "João"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Gabriel"}
    ]
    res.json(users)
}

export default getUser