const mysql=require("mysql")
 
var pool=mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'',
    database:'dessert',
    connectionLimit:15,
})

model.export.pool=pool