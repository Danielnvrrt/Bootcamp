import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '656624498' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      }
    } else if (existName) {
      alert(`${newName} name already exists`)
    } else {
      alert(`${newNumber} number already exists`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}

export default App
