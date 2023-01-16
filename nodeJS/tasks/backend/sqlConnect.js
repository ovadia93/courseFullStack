import mysql from 'mysql';

export const con = mysql.createConnection({
    host: 'localhost',
    user: 'ben',
    password: '123456',
    database: 'full-stack-w020222er',
    port: 8889,
});

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('DB Connected');
});