import { pool } from "../../config/database.js";


export async function create({
    reclamacaoId,
    usuarioId,
    comentario
}) {
    const result = await pool.query(`
        INSERT INTO comentarios
        (reclamacao_id, usuario_id, comentario)
        VALUES
        ($1, $2, $3)
        RETURNING *
    `, [reclamacaoId, usuarioId, comentario]);

    return result.rows[0];
}

export async function readAll() {
    const result = await pool.query(`
        SELECT *
        FROM comentarios;
    `);

    return result.rows;
}

export async function readById(id) {
    const result = await pool.query(`
        SELECT *
        FROM comentarios
        WHERE id = $1;
    `, [id]);

    return result.rows.length > 0 
        ? result.rows[0] 
        : null;
}

export async function update({
    id,
    reclamacaoId,
    usuarioId,
    comentario
}) {
    const result = await pool.query(`
        UPDATE comentarios
        SET reclamacao_id = $1, 
        usuario_id = $2, 
        comentario = $3
        WHERE id = $4
        RETURNING *;
    `, [reclamacaoId, usuarioId, comentario, id]);

    return result.rows.length > 0
        ? result.rows[0]
        : null;
}

export async function deleteById(id) {
    await pool.query(`
        DELETE FROM comentarios
        WHERE id = $1;
    `, [id]);
}