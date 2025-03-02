import React from "react";
import StateList from "./StateList";

function CountryList({ countries, editCountry, deleteCountry, setCountries }) {
  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <h2>{country.name}</h2>
          <button onClick={() => editCountry(index)}>Edit</button>
          <button onClick={() => deleteCountry(index)}>Delete</button>
          <StateList countryIndex={index} countries={countries} setCountries={setCountries} />
        </div>
      ))}
    </div>
  );
}

export default CountryList;
