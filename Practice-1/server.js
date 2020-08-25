const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection ({
host : "localhost",
user : "root",
password : "",
database : "test2",
multiplestatements : true
});

mysqlConnection.connect((err)=>{
if(!err)
{
console.log("connected");
}
else{
console.log("connection failed");

}
}); 
app.get('/', (req, res) => {
    res.send('Hello Root')
  });
app.get('/abc', (req, res) => {
   //return all data from table 3 
   /*con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });*/
   //return all data from table 3 
   mysqlConnection.query("select * from table3",function(err,result){
   if(err){console.log('Errr',err);}
   else{
    var reresult={
        "status":200,
        "data":result
    };  
   //console.log('logff',result); 
   res.send(reresult);
   }}
   );
   // res.send('Hello Abc')
  });
  

app.listen(3000)




