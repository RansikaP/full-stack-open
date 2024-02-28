import { useEffect } from "react"
import personService from "../services/persons"
import Delete from "./DeleteButton"

const Persons = ({ people, setPersons }) => {
    useEffect(() => {
        personService
          .getAll()
          .then(initialNumbers => {
            setPersons(initialNumbers)
          })
      }, [])

    return (
        <div>
            {people.map(p =>
                <li key={p.id}>
                    {p.name} {p.number} <Delete id={p.id} name={p.name}/>
                </li>
            )}
        </div>
    )
}

export default Persons