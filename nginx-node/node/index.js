const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    port: 3306,
    password: 'root',
    database:'nodedb'
};

const connection = mysql.createConnection(config)

const sql = "SELECT * FROM usuarios;"

connection.query(sql, (error, results, fields) => {
    if (error) {
        console.error('Erro ao executar a consulta:', error);
        throw error;
    }

    const userList = results.map(user => `<li>${user.nome}</li>`);

    app.get('/', (req, res) => {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Full Cycle</title>
            </head>
            <body>
            <h1>Full Cycle Rocks</h1>
            <h1>Lista de Usuários</h1>
            <ul>${userList.join('')}</ul>
            </body>
            </html>
        `);
    });

    connection.end();
});

app.listen(port, () => {
    console.log("Rodando na porta " + port);
})