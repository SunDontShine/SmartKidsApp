const express = require('express')
const app = express()

var con = require('./model/mysql_connector.js')

/*var mysql = require('mysql')
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password'
})

con.connect(function(err){
 if(err) throw err;
 console.log("Connected to Local Database!")
})
*/

app.set('views','./views');
app.set('view engine', 'pug');

app.get('/', function (req, res){
  console.log("Home page accessed")
  res.render('home', {guestname: ''})
})

app.get('/login', function (req, res){
  res.send('Hello world at /login')
  console.log("User at /login")
})

//list of available subjects  
app.get('/subject', function (req, res){
  res.send('Hello world at /subject')
  console.log("User at /subject")
})

app.get('/math', function (req, res){
  res.send('Hello world at /math')
  console.log("User at /math")
})

//list of cool hobbies such as gardening cam, security cam
app.get('/hobbies', function (req, res){
  res.send('Hello world at /hobbies')
  console.log("User at /hobbies")
})





app.listen(3000, () => console.log ('Hello world app listening on port 3000!'))
