const express = require('express');
const parser = require('body-parser');
const bodyParser = require('body-parser');
const https = require("https")

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const port = 3000;

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get('/sign-up', (req, res) => {
  res.sendFile(__dirname + "/sign-up.html");
});

app.post('/contact', (req, res) => {
  const email = req.body.Email;
  const password = req.body.Password;
  console.log(email, password);
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})