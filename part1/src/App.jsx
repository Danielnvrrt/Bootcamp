import { useState } from "react"

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const  [counter, setCounter]= useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)


  return (
    <div>
      {counter}
      <button onClick={increaseByOne}>
      plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
    
  )
}

export default App