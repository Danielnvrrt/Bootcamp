const CountryList = ({ countries }) => {
  if (countries?.length === 1) {
    const country = countries.pop()
    return (
      <div>
        <h1>{country.name.common}</h1>
        <section id="info">
          capital {country.capital.pop()} <br />
          area {country.area}
        </section>
        <section id="languages">
          <h5>languages</h5>
          <ul>
            {Object.values(country.languages).map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </section>
        <section id="flag">
          <img src={country.flags.svg} alt={country.flags.alt}></img>
        </section>
      </div>
    )    
  } else if (countries?.length > 1 && countries?.length <= 10) {
    return (
      <div>
        {countries.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
      </div>
    )
  } else {
    return <div>Too many matches, specify another filter</div>
  }
}
export default CountryList
