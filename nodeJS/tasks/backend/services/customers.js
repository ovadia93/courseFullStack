const con = require("../sqlConnect").con;

exports.getCustomers = function(req, res) {
    
    // let isDeleted = 0;

    // if (req.query.deleted) {
    //     isDeleted = 1;
    // }
    con.query("SELECT * FROM `costomers`", (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}