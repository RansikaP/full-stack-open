import { useState } from 'react'
import './App.css'

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const StatisticsLine = ({ text, stat}) => {
  return (
    <tr>
      <td>{ text }</td>
      <td>{ stat }</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad}) => {
  const total = good + neutral + bad
  if (total == 0) {
    return(
      <div>No feedback given</div>
    )
  }
  return(
    <table>
      <StatisticsLine text='good' stat={ good }/>
      <StatisticsLine text='neutral' stat={ neutral }/>
      <StatisticsLine text='bad' stat={ bad }/>
      <StatisticsLine  text='all' stat={ total }/>
      <StatisticsLine  text='average' stat={ (good-bad)/(total) }/>
      <StatisticsLine  text='positive' stat={ good/(total) * 100 + ' %' }/>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => setGood(good + 1)
  const clickNeutral = () => setNeutral(neutral + 1)
  const clickBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text='give feedback'/>
      <div className='inline'>
        <Button handleClick={ clickGood } text='good'/>
        <Button handleClick={ clickNeutral } text='neutral'/>
        <Button handleClick={ clickBad } text='bad'/>
      </div>
      <Header text='statistics'/>      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App