
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
} 

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.content[0].part} exercise={props.content[0].exercise} />  
      <Part part={props.content[1].part} exercise={props.content[1].exercise} />
      <Part part={props.content[2].part} exercise={props.content[2].exercise} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )

}

const App = () => {
  const course = 'Half Stack Application development'
  const part1 = 'Fundamentals of React'
  const exercises = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course} />
      <Content content={
        [
          {part: part1, exercise: exercises},
          {part: part2, exercise: exercises2},
          {part: part3, exercise: exercises3}
        ]} />
      <Total total={exercises + exercises2 + exercises3} />
    </div>
  )
}

export default App
