var mysql=require('mysql')
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password'
})

con.connect(function(err){
  if(err) throw er;
  console.log("Connected to Local MySql Database!")
})


//build database

//add user score

//remove user score


