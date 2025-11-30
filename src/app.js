// app.js

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;





// Test DB connection
// db

// middleware
app.use(express.json());


// sample route
app.get('/', (req, res) => {
  res.send('Wagwan Chiboy Bigman! Node.js dey run🔥');
});

app.get('/about', (req, res) => {
  res.send('We are building a Node.js app with Express!');
});

app.get('/address', (req, res) => {
  res.send('We are located at 123 Main St, Lagos, Nigeria.');
});

app.get('/comment', (req, res) => {
  res.send('This is a comment route responding from the server.');
});


// start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
