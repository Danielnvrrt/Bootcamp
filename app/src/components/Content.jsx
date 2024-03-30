import Part from './Part'
import Total from './Total'

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total
        total={parts
          .map((part) => part.exercises)
          .reduce((p1, p2) => p1 + p2)}
      />
    </>
  )
}

export default Content
