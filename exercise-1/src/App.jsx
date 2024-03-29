import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td> <td>{props.value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  const average = (good - bad) / total

  const positivePercentage = (good * 100) / total
  return total != 0 ? (
    <table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='total' value={total} />
      <StatisticLine text='average' value={average ? average : 0} />
      <StatisticLine
        text={'positive'}
        value={`${positivePercentage ? positivePercentage : 0}%`}
      />
    </table>
  ) : (
    <>
      No feedback given
    </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={'give feedback'} />
      <Button handleClick={() => setGood(good + 1)} text={'good'} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button handleClick={() => setBad(bad + 1)} text={'bad'} />
      <Header text={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
