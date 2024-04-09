const Agenda = ({ personsShown }) => (
  <div>
    {personsShown.map((person) => (
      <div key={person.name}>
        {person.name} {person.number}
      </div>
    ))}
  </div>
)

export default Agenda
