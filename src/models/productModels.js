import db from "../database/db.js";

const list = async () => {
    return await db.query('SELECT * FROM products')
}

const get = async (product) => {
    const {name} = product
    return await db.query('SELECT * FROM products WHERE name=?', [name])
}

const create = async (product) => {
    const {name, price} = product
    return await db.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price])
}

const remove = async (id) => {
    return await db.query('DELETE FROM products WHERE id = ?', [id])
}

const update = async (product) => {
    const { id, name, price} = product
    return await db.query('UPDATE products SET name = ?, price = ? WHERE id=?', [name, price, id])
}
export default {list, get, create, remove, update}