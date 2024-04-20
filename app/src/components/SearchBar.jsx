const SearchBar = ({country, onChange}) => {
  return (
    <div>
      Find countries: 
      <input type="text" value={country} onChange={onChange}></input>
    </div>
  )
}

export default SearchBar