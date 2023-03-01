const mysql = require("mysql2");

const connection=mysql.createConnection(
    {
        host: "sql.freedb.tech",
        user: "freedb_Jas_1234",
        password: "K7@RybQqSA%WFr6",
        database: "freedb_Jaspreet Singh",
    }
);

connection.connect((err) =>{
    if (err){
        console.log(err);
    }
    else{
        console.log("Connected to database");
    }
});


module.exports = connection;