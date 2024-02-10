import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Country = ({country}) => {
    const [temp, setTemp] = useState(null)
    const [wind, setWind] = useState(null)
    const [icon, setIcon] = useState(null)
    
    const lat = country.capitalInfo.latlng[0]
    const lon = country.capitalInfo.latlng[0]
    
    useEffect(() => {
        weatherService
            .getWeather(lat, lon)
            .then(data => {
                setTemp(data.main.temp)
                setWind(data.wind.speed)
                setIcon(data.weather[0].icon)
                console.log(`https://openweathermap.org/img/wn/${icon}@2x.png`)
            })
            .catch(
                console.log("error")
            )
    }, [lat, lon])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <h4>languages:</h4>
            <ul>
                {Object.values(country.languages).map(l => <li key={l.name}>{l}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}></img>
            <h2>Weather in {country.capital[0]}</h2>
            <div> temperature {temp} Celcius</div>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"></img>
            <div>wind {wind} m/s</div>
        </div>
    )
}

export default Country