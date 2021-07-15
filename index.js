const { response, json } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :body'))

let people = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
  ]

  app.get('/info', (req, res) => {
    res.send(`<div><p>Phonebook has info for ${people.length} people </p><p>${new Date()}</p> </div>`)
    })
  
  app.get('/api/persons', (req, res) => {
    res.json(people)
  })

  app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = people.find(person => person.id === id)
    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    people = people.filter(person => person.id !== id)
  
    response.status(204).end()
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'name or number missing' 
      })
    }
  
    if (people.map(people => people.name).includes(body.name)) {
        return response.status(400).json({ 
          error: 'name taken' 
        })
      }  

    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
  
    people = people.concat(person)
  
    response.json(person)
  })

  const generateId = () => {
    const maxId = people.length > 0
      ? Math.max(...people.map(n => n.id))
      : 0
    return maxId + 1
  }
  

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })