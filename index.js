/*console.log('Hello World!');

require("dotenv").config();
console.log("Host: " + process.env.DATABASE_HOST);          // Host: localhost
console.log("Database: " + process.env.DATABASE_NAME);      // Database: testDB
console.log("Username: " + process.env.DATABASE_USER);      // Username: test
console.log("Password: " + process.env.DATABASE_PASSWORD);  // Password: 123456 

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (request, response) => {
  response.send('Nosso primeiro servidor Node.js');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/:yourName', (req, res) => {
  res.send('Your name: ' + req.params.yourName);
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/html-example", (req, res) => {
  try {
    res.sendFile("public/example-page.html", { root: __dirname });
  } catch (err) {
    console.log(err);
  }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/


const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

