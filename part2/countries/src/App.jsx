import { useState } from "react"
import Countries from "./components/Countries"

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const countriesToShow = search === '' ? countries : countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))

  const handleSeach = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <form>
        <div>
          find countries
          <input
            filter={search}
            value={search}
            onChange={handleSeach}
          />
        </div>
      </form>
      <Countries countries={countriesToShow} setCountries={setCountries} setSearch={setSearch}/>
    </div>
  )
}

export default App
