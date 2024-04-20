import { useState, useEffect } from 'react'
import countryService from './services/country.service'
import SearchBar from './components/SearchBar'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [countrySearched, setCountrySearched] = useState('')
  const [countriesShown, setCountriesShown] = useState(null)

  useEffect(() => {
    countryService
      .getAllCountries()
      .then((countries) => setCountries(countries))
      .catch((error) => {
        console.log('Error retrieving countries' + error)
      })
  }, [])

  const handleCountrySearchedChange = (event) => {
    const introducedCountry = event.target.value

    if (countries != null) {
      const filteredCountries = countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(introducedCountry.toLowerCase()) ||
        country.name.official
          .toLowerCase()
          .includes(introducedCountry.toLowerCase())
      )
      setCountriesShown(filteredCountries)
    }
    setCountrySearched(introducedCountry)
  }

  return (
    <div>
      <SearchBar
        country={countrySearched}
        onChange={handleCountrySearchedChange}
      />
      <CountryList countries={countriesShown} />
    </div>
  )
}

export default App
