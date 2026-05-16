import { pool } from "../../config/database.js";


export async function create({ nome }) {
    const result = await pool.query(`
        INSERT INTO categorias
        (nome)
        VALUES
        ($1)
        RETURNING *
    `, [nome]);

    return result.rows[0];
}

export async function readAll() {
    const result = await pool.query(`
        SELECT *
        FROM categorias;
    `);

    return result.rows;
}

export async function readById(id) {
    const result = await pool.query(`
        SELECT *
        FROM categorias
        WHERE id = $1;
    `, [id]);

    return result.rows.length > 0 
        ? result.rows[0] 
        : null;
}

export async function update({ id, nome }) {
    const result = await pool.query(`
        UPDATE categorias
        SET nome = $1
        WHERE id = $2
        RETURNING *;
    `, [nome, id]);

    return result.rows.length > 0
        ? result.rows[0]
        : null;
}

export async function deleteById(id) {
    await pool.query(`
        DELETE FROM categorias
        WHERE id = $1;
    `, [id]);
}