const express = require('express');
const app = express();

const db =  [
      {
        "name": "Arto Hellas",
        "phone": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "phone": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "phone": "12-43-234345",
        "id": 3
      }
    ];

app.get('/api/persons', function (req, res) {
  res.json(db);
});

app.get('/info', (req, res) => {
    const message = `Phonebook has info for ${db.length} people </br>`;
    const message2 = new Date();
    res.send(message + message2);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});