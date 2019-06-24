const express = require('express');

const serveStatic = require('serve-static')

const path = require('path')

//create express app
const app = express()

//create middle name to handle the serving the app
app.use("/", serveStatic(path.join(__dirname, '/public')))

//serve index by defualt  
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html')

})

//create default port to serve the app on 
//or 3000
const port = process.env.PORT || 3000

app.listen(port)

//Log to feedback that this is actually running 

console.log('Server started on port' + port)