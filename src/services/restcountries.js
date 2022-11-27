import axios from "axios";

const RESTCOUNTRIES_URL = "https://restcountries.com";

const getCountryInfo = async (name) => {
  const notFoundMessage = "No information found!";
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
      capital: country.capital.join(", ") || notFoundMessage,
      population: country.population || 0,
      languages:
        Object.keys(country.languages)
          .map((key) => country.languages[key])
          .join(", ") || notFoundMessage,
    };
    return countryInfo;
  } catch {
    return {
      notFound: notFoundMessage,
      population: 0,
    };
  }
};

const restCountriesService = { getCountryInfo };

export default restCountriesService;
