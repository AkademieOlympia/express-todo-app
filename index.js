const express = require('express');
const nodemon = require('nodemon');
const notes = [];

// Create an express application

const app = express();


// Setting up a basic route

app.get('/', index((req, res) => {
  res.send('Hello World');
}));


// Example get all todos notes
app.get('/todos', index((req, res) => {
  res.send(notes);
}));

// Example add a new todo note
app.post('/todos', index(((req, res) => {
  const newhote = nodemon();
notes.push(newhote);
  rest.send(newhote);
}));

// Start the server listening on port 3000


let server = app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = server;
