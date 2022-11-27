import { useSelector } from "react-redux";

const Country = ({ country }) => {
  let languages = [];
  if (country.hasOwnProperty("languages")) {
    languages = Object.keys(country.languages)
      .map((key) => country.languages[key])
      .join(", ");
  }

  return (
    <div>
      {country.name} has population of {country.population}. The capital is {country.capital}.
      Speaks {languages}
    </div>
  );
};

const CountryTable = () => {
  const countries = useSelector((state) => state.countries);

  const countriesToDisplay = [...countries].sort(
    (a, b) => b.population - a.population
  );
  return (
    <div>
      {countriesToDisplay.map((country) => (
        <Country country={country} key={country.name} />
      ))}
    </div>
  );
};

export default CountryTable;
