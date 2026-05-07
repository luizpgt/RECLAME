-- =========================
-- ESTADOS
-- =========================
CREATE TABLE estados (
    uf CHAR(2) PRIMARY KEY,
    regiao VARCHAR(50),
    nome_completo VARCHAR(100) NOT NULL
);

-- =========================
-- CIDADES
-- =========================
CREATE TABLE cidades (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    uf CHAR(2) NOT NULL,

    CONSTRAINT fk_cidade_estado
        FOREIGN KEY (uf)
        REFERENCES estados(uf)
);

-- =========================
-- USUÁRIOS
-- =========================
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cidade_id INT,
    moderador BOOLEAN DEFAULT FALSE,

    CONSTRAINT fk_usuario_cidade
        FOREIGN KEY (cidade_id)
        REFERENCES cidades(id)
);

-- =========================
-- CATEGORIAS
-- =========================
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) UNIQUE NOT NULL
);

-- =========================
-- RECLAMAÇÕES
-- =========================
CREATE TABLE reclamacoes (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT NOT NULL,

    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,

    descricao_localizacao TEXT,
    anexo TEXT,

    categoria_id INT NOT NULL,
    cidadao_id INT NOT NULL,
    cidade_id INT NOT NULL,

    status VARCHAR(50) DEFAULT 'aberta',

    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_reclamacao_categoria
        FOREIGN KEY (categoria_id)
        REFERENCES categorias(id),

    CONSTRAINT fk_reclamacao_usuario
        FOREIGN KEY (cidadao_id)
        REFERENCES usuarios(id),

    CONSTRAINT fk_reclamacao_cidade
        FOREIGN KEY (cidade_id)
        REFERENCES cidades(id)
);

-- =========================
-- COMENTÁRIOS
-- =========================
CREATE TABLE comentarios (
    id SERIAL PRIMARY KEY,

    reclamacao_id INT NOT NULL,
    usuario_id INT NOT NULL,

    comentario TEXT NOT NULL,

    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_comentario_reclamacao
        FOREIGN KEY (reclamacao_id)
        REFERENCES reclamacoes(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_comentario_usuario
        FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id)
);

-- =========================
-- AVALIAÇÕES (UPVOTE/DOWNVOTE)
-- =========================
CREATE TABLE avaliacoes (
    id SERIAL PRIMARY KEY,

    reclamacao_id INT NOT NULL,
    usuario_id INT NOT NULL,

    -- TRUE = upvote / FALSE = downvote
    voto BOOLEAN NOT NULL,

    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_avaliacao_reclamacao
        FOREIGN KEY (reclamacao_id)
        REFERENCES reclamacoes(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_avaliacao_usuario
        FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id),

    -- impede múltiplos votos do mesmo usuário
    CONSTRAINT unique_usuario_reclamacao
        UNIQUE (reclamacao_id, usuario_id)
);
