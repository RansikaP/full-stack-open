import { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, setMessage}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNewName = (event) => {    
        setNewName(event.target.value)
    }
    
    const handleNewNumber = (event) => { 
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        
        if (persons.some(p => p.name === newName)) {
            if (window.confirm(`${newName} us already added to phonebook, replace the old number with a new one?`)) {
                const person = persons.find(p => p.name === newName)
                const changedPerson = {...person, number: newNumber}
                personService
                    .update(changedPerson.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
                        setMessage(
                            `Updated ${newName} updated to ${newNumber}`
                        )
                        setTimeout(() => {
                            setMessage(null)
                        }, 5000)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        } else {            
            const newPerson = {
                name: newName,
                number: newNumber
            }

            personService
                .create(newPerson)
                .then(response => {
                    setPersons(persons.concat(newPerson))
                    setMessage(
                        `Added ${newName}`
                    )
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                })
                .catch(error => {
                    setMessage(error.response.data.error)
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                })
        }        
        setNewName('')
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: 
                <input 
                    value={newName}
                    onChange={handleNewName}
                />
            </div>
            <div>
                number:
                <input
                    value={newNumber}
                    onChange={handleNewNumber}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm