const express = require('express');
const app = express();

app.use(express.json());

var db =  [
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

app.get('/api/persons', (req, res) => {
  res.json(db);
});

app.get('/api/persons/:id', (req,res) => {
    const id = req.params.id;
    const person = db.find(item => item.id == id);

    if (person){
        res.json(person);
    }else {
        res.status(404).send({ error: `Person with id ${id} not found`});
    }
});

app.get('/info', (req, res) => {
    const message = `Phonebook has info for ${db.length} people </br>`;
    const message2 = new Date();
    res.send(message + message2);
});


app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const person = db.find(item => item.id == id);

    if (person){
        db = db.filter(item => item.id != id);
        res.status(200).send();
    } else {
        res.status(204).send();
    }
});

app.post('/api/persons', (req, res) => {
    const person = req.body;

    if (!person){ 
        res.status(400).json({error:"Request body was empty"});
        return;
    }
    if (!person.name || person.name.length === 0){
        res.status(400).json({error:"Name is required"});
        return;
    }
    if (!person.phone || person.phone.length === 0){
        res.status(400).json({error:"Phone is required"});
        return;
    }
    if ( db.find(item => item.name == person.name)){
        res.status(409).json({error:`The name ${person.name} already exists in the phonebook`});
        return;
    }

    const id = Math.round(Math.random()*1000);
    db.push({...person, id});
    res.send();

    
});


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});