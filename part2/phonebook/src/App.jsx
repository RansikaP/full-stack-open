import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState (null)
  const personsToShow = showAll ? persons : persons.filter(p => p.name.includes(filter)) 

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <Filter setShowAll={setShowAll} filter={filter} setFilter={setFilter}/>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setErrorMessage}/>
      <h3>Numbers</h3>
      <Persons people={personsToShow} setPersons={setPersons}/>
    </div>
  )
}

export default App