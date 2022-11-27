import { useSelector } from "react-redux";

const Country = ({ country }) => {
  if (country.hasOwnProperty("notFound")) {
    return (
      <tr>
        <td>{country.name}</td>
        <td>{country.notFound}</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{country.name}</td>
      <td>{country.capital}</td>
      <td>
        {country.population
          ? country.population.toLocaleString("en", { useGrouping: true })
          : ""}
      </td>
      <td>{country.languages}</td>
    </tr>
  );
};

const CountryTable = () => {
  const countries = useSelector((state) => state.countries);

  const countriesToDisplay = [...countries].sort(
    (a, b) => b.population - a.population
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Languages</th>
          </tr>
        </thead>
        <tbody>
          {countriesToDisplay.map((country) => (
            <Country key={country.name} country={country} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
