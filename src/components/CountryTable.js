import { useSelector } from "react-redux";
import { Table, Fade } from "react-bootstrap";

const Country = ({ country, listId }) => {
  const order = listId + 1;

  if (country.hasOwnProperty("notFound")) {
    return (
      <tr>
        <td>{order}</td>
        <td>{country.name}</td>
        <td>{country.notFound}</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{order}</td>
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
    <Fade in={countries.length > 0}>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Languages</th>
          </tr>
        </thead>
        <tbody>
          {countriesToDisplay.map((country, index) => (
            <Country key={index} country={country} listId={index} />
          ))}
        </tbody>
      </Table>
    </Fade>
  );
};

export default CountryTable;
