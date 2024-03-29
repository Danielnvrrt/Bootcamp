import { useState } from "react"

const Display = (props) => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Comment = (props) => (
  <div>
    {props.text} {props.total}
  </div>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  const average = (good - bad) / total

  const positivePercentage = (good * 100) / total
  return (
    <>
      <Display text={"statistics"} />
      <Comment text={"good"} total={good} />
      <Comment text={"neutral"} total={neutral} />
      <Comment text={"bad"} total={bad} />
      <Comment text={"total"} total={total} />
      <Comment text={"average"} total={average ? average : 0} />
      <Comment
        text={"positive"}
        total={`${positivePercentage ? positivePercentage : 0}%`}
      />
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
      <Display text={"give feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
