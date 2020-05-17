const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./models/contact');

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static('build'));

app.use(cors());

// Custom morgan format
morgan.token('data', (req) => JSON.stringify(req.body));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'));

app.get('/api/contacts', (req, res, next) => {
    Contact.find({})
        .then(contacts => {
            res.json(contacts);
        })
        .catch(error => next({ ...error, status:500 }));
});

app.get('/api/contacts/:id', (req,res,next) => {
    const id = req.params.id;

    Contact.findById(id)
        .then(person => {
            if (person.length > 0){
                res.json(person[0]);
            }else {
                res.status(404).send({ error: `Person with id ${id} not found` });
            }
        })
        .catch(error => next({ ...error, status:404 }));
});

app.get('/info', (req, res, next) => {

    Contact.count({})
        .then(value => {
            const message = `Phonebook has info for ${value} people </br>`;
            const message2 = new Date();
            res.send(message + message2);
        })
        .catch(error => next({ ...error, status:404 }));

});


app.delete('/api/contacts/:id', (req, res, next) => {
    const id = req.params.id;

    Contact.deleteOne({ '_id' : id })
        .then((response) => {
            if (response.deletedCount && response.deletedCount > 0){
                return res.status(200).send();
            }else {
                return res.status(204).send();
            }
        })
        .catch(error => next({ ...error, status:204 }));
});

app.post('/api/contacts', (req, res, next) => {
    const person = req.body;

    if (!person){
        res.status(400).json({ error:'Request body was empty' });
        return;
    }
    if (!person.name || person.name.length === 0){
        res.status(400).json({ error:'Name is required' });
        return;
    }
    if (!person.phone || person.phone.length === 0){
        res.status(400).json({ error:'Phone is required' });
        return;
    }

    var contact = new Contact({ name: person.name, phone: person.phone });
    contact.save()
        .then((newContact) => {
            console.log('contact saved!');
            console.log('newContact: ', newContact);
            res.status(200).json(newContact);
        })
        .catch(error => next({ ...error, status:500 }));

});

app.put('/api/contacts/:id', (req, res, next) => {
    const id = req.params.id;
    const person = req.body;

    if (!person){
        res.status(400).json({ error:'Request body was empty' });
        return;
    }
    if (!person.name || person.name.length === 0){
        res.status(400).json({ error:'Name is required' });
        return;
    }
    if (!person.phone || person.phone.length === 0){
        res.status(400).json({ error:'Phone is required' });
        return;
    }
    const opts = { runValidators: true, new: true };
    Contact.findOneAndUpdate({ '_id': id }, { 'phone':person.phone },opts)
        .then((response) => {
            console.log(response);
            if (response){
                return res.status(200).json(response);
            }else {
                return res.status(204).send();
            }
        })
        .catch(error => next({ ...error, status:204 }));
});


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response) => {
    console.error(error.message);

    if (error.name === 'CastError') {
        return response.status(400).send({ message: 'malformatted id' });
    }
    if (error.name === 'ValidationError'){
        return response.status(400).send({ message: error.message });
    }
    if (error.status){
        return response.status(error.status).end();
    }

    return response.status(500).end();

};

app.use(errorHandler);


app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
