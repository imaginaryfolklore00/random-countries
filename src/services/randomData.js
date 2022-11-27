import axios from "axios";

const RANDOM_DATA_URL = "https://random-data-api.com";

const getCountry = async () => {
  const response = await axios.get(`${RANDOM_DATA_URL}/api/v2/addresses`, {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
  const countryObject = { name: response.data.country };
  return countryObject;
};

const randomDataService = { getCountry };

export default randomDataService;
