const express = require('express')
const app = express()

var con = require('./model/mysql_connector.js')

app.set('views','./views');
app.set('view engine', 'pug');

app.get('/', function (req, res){
  console.log("Home page accessed")
  res.render('home', {guestname: ''})
})

app.get('/login', function (req, res){
  console.log("User at /login")
  res.render('login')
})

//list of available subjects  
app.get('/quizzes', function (req, res){
  console.log("Quizzes page accessed")
  res.render('quizzes')
})

app.get('/math', function (req, res){
  console.log("Math page accessed")
})

//list of cool hobbies such as gardening cam, security cam
app.get('/hobbies', function (req, res){
  console.log("Hobbies page accessed")
})

app.get('/garden', function (req, res){
  console.log("Garden page accessed")
  res.render('garden')
})





app.listen(3000, () => console.log ('Hello world app listening on port 3000!'))
