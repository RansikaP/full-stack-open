import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length == 0) {
    return (
      <div>
        the app is used by pressing the buttions
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    setAll(allClicks.concat('L'))
    setClicks(newClicks)
    setTotal(newClicks.right + newClicks.left)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setAll(allClicks.concat('R'))
    setClicks(newClicks)
    setTotal(newClicks.right + newClicks.left)
  }

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {clicks.right}
      <History allClicks={allClicks}/>
      <p>total {total}</p>
    </div>
  )
}

export default App