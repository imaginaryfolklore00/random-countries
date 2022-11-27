import axios from "axios";

const RESTCOUNTRIES_URL = "https://restcountries.com";

const getCountryInfo = async (name) => {
  try {
    const response = await axios.get(`${RESTCOUNTRIES_URL}/v3.1/name/${name}`, {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
    const country = response.data[0];
    const countryInfo = {
      capital: country.capital,
      population: country.population || 0,
      languages: country.languages,
    };
    return countryInfo;
  } catch {
    return null;
  }
};

const restCountriesService = { getCountryInfo };

export default restCountriesService;
