const mysql = require('mysql');

let connection = {
    host: 'localhost',
    user: 'ben',
    password: '123456',
    database: 'BenCrm',
    port: 8889,
};

 if (process.env.NODE_ENV !== 'development') {
    connection = {
        host: 'localhost',
        user: 'shipap_tasks',
        password: 'd%T54[19j!76',
        database: 'shipap_tasks',
    };
}

const con = mysql.createConnection(connection);

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('DB Connected');
});

exports.con = con;