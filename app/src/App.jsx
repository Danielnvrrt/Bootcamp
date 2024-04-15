import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Agenda from './components/Agenda'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [valueFiltered, setValueFiltered] = useState('')
  const [personsShown, setPersonsShown] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data)
      setPersonsShown(response.data)
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
        setPersons(persons.concat({ name: newName, number: newNumber }))
        setPersonsShown(persons.concat({ name: newName, number: newNumber }))
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
      <Agenda personsShown={personsShown} />
    </div>
  )
}

export default App