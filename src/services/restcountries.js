import axios from "axios";

const BASE_URL = "https://restcountries.com";

const getCountryInfo = async (name) => {
  const response = await axios.get(`${BASE_URL}/v3.1/name/${name}`);
  const country = response.data[0];
  return country;
};

const restCountriesService = { getCountryInfo };

export default restCountriesService;
