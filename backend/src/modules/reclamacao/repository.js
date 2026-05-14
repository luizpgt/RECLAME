import { pool } from "../../config/database.js";

export async function create({
    cidadaoId,
    cidadeId,
    categoriaId,
    anexo,
    titulo,
    latitude,
    longitude,
    descricao,
    descricaoLocalizacao
}) {
    const result = await pool.query(`
            INSERT INTO reclamacoes
            (cidadao_id, cidade_id, categoria_id, anexo, titulo, 
            latitude, longitude, descricao, descricao_localizacao)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
        `,
        [cidadaoId, cidadeId, categoriaId, anexo, titulo, 
        latitude, longitude, descricao, descricaoLocalizacao]
    );

    return result.rows[0];
}


export async function readAll() {
    const result = await pool.query(`
        SELECT r.*
        FROM reclamacoes r;
    `);

    return result.rows;
}


export async function readById(id) {
    const result = await pool.query(`
        SELECT r.*
        FROM reclamacoes r
        WHERE r.id = $1;
    `, id);

    return result.rows.length > 0 ? result.rows[0] : null;
}


export async function update({
    id,
    cidadao_id,
    cidade_id,
    categoria_id,
    anexo,
    titulo,
    latitude,
    longitude,
    descricao,
    descricaoLocalizacao
}) {
    const result = await pool.query(`
            UPDATE reclamacoes
            SET
            cidadao_id = $2, 
            cidade_id = $3, 
            categoria_id = $4, 
            anexo = $5, 
            titulo = $6, 
            latitude = $7, 
            longitude = $8, 
            descricao = $9, 
            descricao_localizacao = $10
            WHERE id = $1
            RETURNING *;
        `,
        [id, cidadao_id, cidade_id, categoria_id, anexo, titulo, 
        latitude, longitude, descricao, descricaoLocalizacao]
    );

    return result.rows[0];
}


export async function deleteById(id) {
    await pool.query(`
        DELETE FROM reclamacoes
        WHERE id = $1;
    `, id);
}