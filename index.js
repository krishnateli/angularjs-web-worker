// content of index.js

const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
/*
const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}*/

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
