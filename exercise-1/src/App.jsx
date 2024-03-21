
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
        {props.part.name} {props.part.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.content[0]} />
      <Part part={props.content[1]} />
      <Part part={props.content[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total.reduce((a,b) => a+b, 0)}</p>
    </>
  )

}

const App = () => {
  const course = 'Half Stack Application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },  
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header course={course} />
      <Content content={parts} />
      <Total total={parts.map(part => part.exercises)} />
    </div>
  )
}

export default App
