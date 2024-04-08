import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [valueFiltered, setValueFiltered] = useState('')
  const [personsShown, setPersonsShown] = useState(persons)

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
      <div>
        filter shown with{' '}
        <input value={valueFiltered} onChange={handleValueFilteredChange} />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsShown.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}

export default App
