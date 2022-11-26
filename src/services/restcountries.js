import axios from "axios";

const BASE_URL = "https://restcountries.com";

const getCountryInfo = async (name) => {
  const response = await axios.get(`${BASE_URL}/v3.1/name/${name}`);
  const country = response.data[0];
  const countryInfo = {
    capital: country.capital,
    population: country.population,
    languages: country.languages,
  };
  return countryInfo;
};

const restCountriesService = { getCountryInfo };

export default restCountriesService;
