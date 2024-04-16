import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Agenda from './components/Agenda'
import agendaService from './services/agenda.service'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [valueFiltered, setValueFiltered] = useState('')
  const [personsShown, setPersonsShown] = useState([])

  useEffect(() => {
    agendaService.getAllPersons().then((data) => {
      setPersons(data)
      setPersonsShown(data)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const existName = persons.find((p) => p.name === newName)
    const existNumber = persons.find((p) => p.number === newNumber)

    if (!existName && !existNumber) {
      if (newName === '') {
        alert(`Name can't be empty`)
      } else if (newNumber === '') {
        alert(`Number can't be empty`)
      } else {
        agendaService
          .saveNewPerson({name: newName, number: newNumber})
          .then((newPerson) => {
            setPersons(persons.concat(newPerson))
            setPersonsShown(persons.concat(newPerson))
          })
      }
    } else if (existName) {
      alert(`${newName} name already exists`)
    } else {
      alert(`${newNumber} number already exists`)
    }
    setNewName('')
    setNewNumber('')
    setValueFiltered(valueFiltered)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      agendaService
        .deletePerson(id)
        .then(() => {
          const updatedPersons = persons.filter((person) => person.id !== id)
          setPersons(updatedPersons)
          setPersonsShown(updatedPersons)
        })
        .catch((error) => {
          console.log('Error deleting person:', error)
        })
    }
  }

  const handleValueFilteredChange = (event) => {
    if (event.target.value === '') {
      setPersonsShown([...persons])
    } else {
      let pe = []
      persons.forEach((p) => {
        if (
          p.name.toLowerCase().startsWith(event.target.value.toLowerCase(), 0)
        ) {
          pe.push(p)
        }
      })
      setPersonsShown([...pe])
    }
    setValueFiltered(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterValue={valueFiltered}
        handleValueFiltered={handleValueFilteredChange}
      />
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Agenda personsShown={personsShown} handleDelete={handleDelete} />
    </div>
  )
}

export default App
