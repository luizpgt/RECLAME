import { pool } from "../../config/database.js";


export async function create({
    reclamacaoId,
    usuarioId,
    voto
}) {
    const result = await pool.query(`
        INSERT INTO avaliacoes
        (reclamacao_id, usuario_id, voto)
        VALUES ($1, $2, $3)
        RETURNING *
    `, [reclamacaoId, usuarioId, voto]);

    return result.rows[0];
}

export async function readAll() {
    const result = await pool.query(`
        SELECT *
        FROM avaliacoes
    `);

    return result.rows;
}

export async function readById(id) {
    const result = await pool.query(`
        SELECT *
        FROM avaliacoes
        WHERE id = $1;
    `, [id]);

    return result.rows.length > 0 
        ? result.rows[0] 
        : null;
}

export async function deleteById(id) {
    await pool.query(`
        DELETE FROM avaliacoes
        WHERE id = $1;
    `, [id]);
}