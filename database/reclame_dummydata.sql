-- =========================
-- ESTADOS
-- =========================
INSERT INTO estados (uf, regiao, nome_completo)
VALUES
('SC', 'Sul', 'Santa Catarina');

-- =========================
-- CIDADES
-- =========================
INSERT INTO cidades (id, nome, uf)
VALUES
(1, 'Chapecó', 'SC');

-- =========================
-- USUÁRIOS
-- =========================
INSERT INTO usuarios (id, nome, email, senha, cidade_id, moderador)
VALUES
(1, 'João Silva', 'joao@email.com', '123456', 1, FALSE),
(2, 'Maria Oliveira', 'maria@email.com', '123456', 1, FALSE),
(3, 'Carlos Souza', 'carlos@email.com', '123456', 1, FALSE),
(4, 'Ana Pereira', 'ana@email.com', '123456', 1, FALSE),
(5, 'Moderador Sistema', 'moderador@email.com', 'admin123', 1, TRUE);

-- =========================
-- CATEGORIAS
-- =========================
INSERT INTO categorias (id, nome)
VALUES
(1, 'Buraco na via'),
(2, 'Iluminação pública'),
(3, 'Lixo urbano'),
(4, 'Esgoto'),
(5, 'Trânsito'),
(6, 'Praças e parques');

-- =========================
-- RECLAMAÇÕES
-- Coordenadas reais aproximadas de Chapecó/SC
-- =========================
INSERT INTO reclamacoes (
    id,
    titulo,
    descricao,
    latitude,
    longitude,
    descricao_localizacao,
    anexo,
    categoria_id,
    cidadao_id,
    cidade_id,
    status
)
VALUES

(
    1,
    'Buraco enorme na Avenida Getúlio Vargas',
    'O buraco está causando risco para motoristas e motociclistas.',
    -27.1004,
    -52.6152,
    'Próximo ao cruzamento com a Rua Marechal Bormann',
    'foto_buraco_1.jpg',
    1,
    1,
    1,
    'aberta'
),

(
    2,
    'Poste sem iluminação há dias',
    'A rua fica totalmente escura durante a noite.',
    -27.0958,
    -52.6189,
    'Bairro Jardim Itália',
    'poste_escuro.png',
    2,
    2,
    1,
    'em análise'
),

(
    3,
    'Acúmulo de lixo em terreno baldio',
    'O local está atraindo insetos e gerando mau cheiro.',
    -27.1115,
    -52.6041,
    'Rua Florianópolis',
    NULL,
    3,
    3,
    1,
    'aberta'
),

(
    4,
    'Esgoto vazando na calçada',
    'Há vazamento constante de esgoto próximo às residências.',
    -27.0897,
    -52.6244,
    'Bairro Efapi',
    'esgoto.jpg',
    4,
    4,
    1,
    'resolvida'
),

(
    5,
    'Semáforo com defeito',
    'O semáforo fica piscando amarelo o dia inteiro.',
    -27.1021,
    -52.6107,
    'Centro de Chapecó',
    NULL,
    5,
    2,
    1,
    'aberta'
),

(
    6,
    'Praça abandonada',
    'Os brinquedos estão quebrados e o mato muito alto.',
    -27.1068,
    -52.6202,
    'Praça no Bairro Palmital',
    'praca.png',
    6,
    1,
    1,
    'em análise'
);

-- =========================
-- COMENTÁRIOS
-- =========================
INSERT INTO comentarios (
    reclamacao_id,
    usuario_id,
    comentario
)
VALUES
(1, 2, 'Passei por ali ontem, realmente está perigoso.'),
(1, 3, 'Quase danifiquei meu carro nesse local.'),
(2, 1, 'A iluminação está ruim faz semanas.'),
(3, 4, 'O cheiro no local está muito forte.'),
(4, 5, 'Equipe da prefeitura já foi acionada.'),
(6, 2, 'As crianças não conseguem mais usar a praça.');

-- =========================
-- AVALIAÇÕES
-- TRUE = upvote
-- FALSE = downvote
-- =========================
INSERT INTO avaliacoes (
    reclamacao_id,
    usuario_id,
    voto
)
VALUES
(1, 2, TRUE),
(1, 3, TRUE),
(1, 4, TRUE),

(2, 1, TRUE),
(2, 3, TRUE),

(3, 1, TRUE),
(3, 2, FALSE),

(4, 1, TRUE),
(4, 2, TRUE),

(5, 3, TRUE),
(5, 4, FALSE),

(6, 1, TRUE),
(6, 3, TRUE),
(6, 4, TRUE);
