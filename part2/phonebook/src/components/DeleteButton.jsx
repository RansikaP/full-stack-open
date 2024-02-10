import personService from '../services/persons'

const Delete = ({ id, name }) => {
    const deleteNumber = (event) => {
        event.preventDefault()
        if (window.confirm(`Delete ${name}?`)) {
            personService
                .remove(id)
                .then(response => {
                    console.log(response)
                })
        }   
    }

    return(
        <button onClick={deleteNumber}>
            delete
        </button>        
    )
}

export default Delete