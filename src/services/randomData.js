import axios from "axios";

const BASE_URL = "https://random-data-api.com";

const getCountry = async () => {
  const response = await axios.get(`${BASE_URL}/api/v2/addresses`);
  const countryObject = { name: response.data.country };
  return countryObject;
};

const randomDataService = { getCountry };

export default randomDataService;
