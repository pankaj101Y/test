const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs=require('fs');

const app = express();
const port=process.env.PORT||3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
  res.send('Welcome To Future');
});

app.listen(port,()=>{
  console.log(`server running on ${port}`);
});

module.exports = app;
