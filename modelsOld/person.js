const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const personName = process.argv[3]
const personNumber = process.argv[4]
 

const url = `mongodb+srv://fullstack:${password}@cluster0.p7dbl.mongodb.net/phonebook?retryWrites=true&w=majority&ssl=true`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: personName,
  number: personNumber,
})

if(personName !== undefined && personNumber !== undefined) {

person.save().then(response => {
  console.log(`added ${personName} number ${personNumber} to phonebook`)
  mongoose.connection.close()
})
} else {

Person.find({}).then(result => {
  console.log(`phonebook:`)
  result.forEach(person => {
    console.log(person)
  })
  mongoose.connection.close()
})
}

