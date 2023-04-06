const express = require('express')
const app = express()
const port = 3000

app.use((req,res,next)=>{
    console.log('requête éffectuée:'+Date().toString());
    next()
})

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/',function(req, res){
    res.status(200).sendFille('/HTML/index.html', {root:_dirname})
})

app.get('/',function(req, res){
    res.status(200).sendFille('/HTML/profil.html', {root:_dirname})
})

app.get('/',function(req,res){
    res.status(200).sendFille('/HTML/contact.html', {root:_dirname})
})

app.get('/',function(req,res){
    res.status(200).sendFille('/HTML/product.html',{root:_dirname})
})

app.get('/',function(req,res){
    res.status(301).redirect('/home')
})


app.listen(port,()=>{
    console.log("server listening on port" + port);
})
