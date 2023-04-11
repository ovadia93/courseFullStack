const express = require('express')
import { strictEqual } from "assert"
import {con} from "./sqlConnect"


const app = express()
const port = 3000

app.get('/', (req, res) => {

    con.query("SELECT * FROM contacts", (err, res) => {
        console.log(res);
    })

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

sqlconnect

import mysql from "mysql"

export const con = mysql.createConnection({
    host: 'localhost',
    user: 'ben',
    password: '123456',
    database: 'BenCrm',
    port: 8889,
});

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('DB Connected');
});
