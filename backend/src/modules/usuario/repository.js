import { pool } from '../../database.js';


export async function create({
    nome, 
    email, 
    senha, 
    cidade_id, 
    moderador
}) {
    const result = await pool.query(`
            INSERT INTO usuarios 
            (nome, email, senha, cidade_id, moderador)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `, 
        [nome, email, senha, cidade_id, moderador]
    );

    return result.rows[0];
}

export async function readAll() {
    const result = await pool.query(`
        SELECT * 
        FROM usuarios;
    `);

    return result.rows;
}

export async function readById(id) {
    const result = await pool.query(`
        SELECT * 
        FROM usuarios 
        WHERE id = $1;
    `, [id]);

    return result.rows[0];
}

export async function update({
    id,
    nome, 
    email,
    cidade_id,
    moderador
}) {
    const result = await pool.query(`
        UPDATE usuarios 
        SET nome = $1, 
        email = $2, 
        cidade_id = $3, 
        moderador = $4
        WHERE id = $5
        RETURNING *;
    `, [nome, email, cidade_id, moderador, id]);

    return result.rows[0];
}

export async function updatePassword(id, senha) {
    await pool.query(`
        UPDATE usuarios 
        SET senha = $1 
        WHERE id = $2;
    `, [senha, id]);
}

export async function deleteById(id) {
    const result = await pool.query(`
        DELETE FROM usuarios 
        WHERE id = $1;
    `, [id]);

    return result.rows[0];
}