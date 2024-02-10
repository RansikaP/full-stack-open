import { useState } from 'react'

const Filter = ({ setShowAll, filter, setFilter }) => {    

    const handleSearch = (event) => {
        if (event.target.value === '')
          setShowAll(true)
        else 
          setShowAll(false)
        setFilter(event.target.value)
    }

    return (
        <form>
            <div>
                filter shown with
                <input
                    value={filter}
                    onChange={handleSearch}
                />
            </div>
      </form>
    )
}

export default Filter