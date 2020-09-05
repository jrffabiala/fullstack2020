import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={ props.onClick }>
    { props.text }
  </button>
)

const Statistics = (props) => {
  if (props.all > 0) {
    return (
    <table>
      <tbody>
        <Statistic text="good" value={ props.good } />
        <Statistic text="neutral" value={ props.neutral } />
        <Statistic text="bad" value={ props.bad } />
        <Statistic text="all" value={ props.all } />
        <Statistic text="average" value={ props.average } />
        <Statistic text="positive" value={ props.positive } />
      </tbody>
    </table>
    )
  }
  
  return <div>No Feedback given</div>
  
}

const Statistic = (props) => (
  <tr>
    <td>{ props.text }</td>
    <td>{ props.value }</td>
  </tr>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  let all = good + neutral + bad
  let average = (good * 1 + bad * -1) / all
  let positive = good / all * 100 + ' %'

  console.log(good)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={ handleGoodClick } text='Good' />
      <Button onClick={ handleNeutralClick } text='Netural' />
      <Button onClick={ handleBadClick } text='Bad' />
      <h1>Statistics</h1>
      <Statistics good={ good } bad={ bad } neutral={ neutral }
                  all={ all } average={ average } positive={ positive }
      />
    </div>

  )
}

ReactDOM.render(<App />, document.querySelector('#root'))