const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'ben',
    password: '123456',
    database: 'full-stack',
    port: 8889,
});

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("connected to database");
});

exports.con = con;