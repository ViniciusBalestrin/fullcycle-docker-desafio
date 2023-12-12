USE nodedb;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL
);

INSERT INTO usuarios (nome, sobrenome) VALUES
    ('Albert', 'Einstein'),
    ('Galileu', 'Galilei'),
    ('Isaac', 'Newton');