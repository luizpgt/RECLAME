import { pool } from "../../config/database.js";


export async function readAll() {
    const result = await pool.query(`
        SELECT *
        FROM estados;
    `);

    return result.rows;
}

export async function readById(id) {
    const result = await pool.query(`
        SELECT *
        FROM estados
        WHERE id = $1;
    `, [id]);

    return result.rows[0];
}
