/** Exercises from 1.6 to 1.11 */
// import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

// const StatisticLine = (props) => (
//   <tr>
//     <td>{props.text}</td> <td>{props.value}</td>
//   </tr>
// )

// const Statistics = ({ good, neutral, bad }) => {
//   const total = good + neutral + bad

//   const average = (good - bad) / total

//   const positivePercentage = (good * 100) / total
//   return total != 0 ? (
//     <table>
//       <StatisticLine text='good' value={good} />
//       <StatisticLine text='neutral' value={neutral} />
//       <StatisticLine text='bad' value={bad} />
//       <StatisticLine text='total' value={total} />
//       <StatisticLine text='average' value={average ? average : 0} />
//       <StatisticLine
//         text={'positive'}
//         value={`${positivePercentage ? positivePercentage : 0}%`}
//       />
//     </table>
//   ) : (
//     <>
//       No feedback given
//     </>
//   )
// }

// const App = () => {
//   // guarda los clics de cada botón en su propio estado
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <Header text={'give feedback'} />
//       <Button handleClick={() => setGood(good + 1)} text={'good'} />
//       <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
//       <Button handleClick={() => setBad(bad + 1)} text={'bad'} />
//       <Header text={'statistics'} />
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }

// export default App

/** Exercises from 1.12 to 1.14 */
import { useState } from 'react'

const Votes = ({ votesNumber }) => <div>has {votesNumber} votes</div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const anecdoteMostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Header text='Anecdote of the day' />
      <div>{anecdotes[selected]}</div>
      <Votes votesNumber={votes[selected]} />
      <Button
        handleClick={() => {
          const copy = [...votes]
          copy[selected] += 1
          return setVotes(copy)
        }}
        text="vote"
      />
      <Button
        handleClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
        text="Next anecdote"
      />
      <Header text='Anecdote with most votes' />
      <div>{anecdotes[anecdoteMostVoted]}</div>
      <Votes votesNumber={votes[anecdoteMostVoted]} />
    </div>
  )
}

export default App
