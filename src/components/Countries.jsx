import React from 'react'

function Countries() {
    const [countries, setCountries] = React.useState([])
    function getAllCountries(){
        fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }
  return (
    <div className='betterview'>
        Countries
        <button onClick={getAllCountries}>GetCountries</button>
        {
            countries && countries.map((c,i)=>{
                return <li key={i}>{c.name}</li>
            })
        }
    </div>
  )
}

export default Countries