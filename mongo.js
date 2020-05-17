const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@juanvr0-rvp98.mongodb.net/phonebook-app?retryWrites=true&w=majority`
//   `mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/test?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String
})

const Contact = mongoose.model('Contact', contactSchema)

if ( process.argv.length<5 ) {
    Contact
      .find({})
      .then(result => {
        result.forEach(contact => {
            console.log(contact)
        })
        mongoose.connection.close()
      });
} 
else {
    const contact = new Contact({
      name: process.argv[3],
      phone: process.argv[4],
    })

    contact.save().then(response => {
      console.log('contact saved!')
      mongoose.connection.close()
    })
}




