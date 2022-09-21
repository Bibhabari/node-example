
const mysql =require("mysql");
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root0527",
    database:"edureka",
    multipleStatements: true


});


mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }
    else
    {
        console.log(err);

    }

});

module.exports = mysqlConnection;