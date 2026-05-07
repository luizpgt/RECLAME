import { pool } from "../../config/database";

export async function readAll() {
    const result = await pool.query(`
        SELECT r.*
        FROM reclamacao r;
    `);

    return result.rows;
}

export async function create({
    cidadao,
    cidade,
    categoria,
    anexo,
    titulo,
    latitude,
    longitude,
    descricao,
    descricaoLocalizacao
}) {
    const result = await pool.query(`
            INSERT INTO reclamacao
            (cidadao, cidade, categoria, anexo, titulo, 
            latitude, longitude, descricao, descricao_localizacao)
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
        `,
        [cidadao, cidade, categoria, anexo, titulo, latitude, 
        longitude, descricao, descricaoLocalizacao]
    );

    return result.rows[0];
}


export async function update({
    idReclamacao,
    cidadao,
    cidade,
    categoria,
    anexo,
    titulo,
    latitude,
    longitude,
    descricao,
    descricaoLocalizacao
}) {
    const result = await pool.query(`
            UPDATE reclamacao
            SET
            cidadao = $2, 
            cidade = $3, 
            categoria = $4, 
            anexo = $5, 
            titulo = $6, 
            latitude = $7, 
            longitude = $8, 
            descricao = $9, 
            descricao_localizacao = $10
            WHERE id_reclamacao = $1
            RETURNING *;
        `,
        [idReclamacao, cidadao, cidade, categoria, anexo, titulo, 
        latitude, longitude, descricao, descricaoLocalizacao]
    );

    return result.rows[0];
}
