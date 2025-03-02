import React, { useState } from "react";
import CountryList from "./CountryList";


function App() {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { name: countryName, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const newName = prompt("Edit country name:", countries[index].name);
    if (newName) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container">
      <h1>Country, State & City Management</h1>
      <button className="add-btn" onClick={addCountry}>Add Country</button>
      <CountryList countries={countries} editCountry={editCountry} deleteCountry={deleteCountry} setCountries={setCountries} />
    </div>
  );
}

export default App;