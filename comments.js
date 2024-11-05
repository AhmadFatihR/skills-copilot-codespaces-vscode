//create web server
//require express
const express = require('express');
const app = express(); //create an instance of express
const port = 3000;

//require module
const comments = require('./comments.json');

//create a route
app.get('/comments', (req, res) => {
  res.json(comments);
});

//start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});