import { useEffect, useState } from 'react'
import countriesService from '../services/countries'
import Country from './Country'

const Countries = ({countries, setCountries, setSearch}) => {
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        countriesService
            .getAll()
            .then(allCountires => {
                setCountries(allCountires)
            })
    })

    const handleShow = (event) => {
        event.preventDefault()
        setFlag(!flag)
    }

    const length = Object.keys(countries).length

    if (length === 250 || (length <= 10 && length > 1)) {
        return (
            <div>
                {countries.map((c, i) =>                  
                    <li key={i}>
                        {c.name.common}
                        <button onClick={() => setSearch(c.name.common)}>Show</button>                     
                    </li>
                )}
            </div>
        )
    } else if (length > 10 ) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (length === 1) {
        return (
            <div>
                <Country country={countries[0]}/>
            </div>
        )
    }
    
}

export default Countries
