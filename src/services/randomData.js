import axios from "axios";

const BASE_URL = "https://random-data-api.com";

const getAddress = async (size) => {
  const response = await axios.get(`${BASE_URL}/api/v2/addresses`);
  return response.data;
};

const randomDataService = { getAddress };

export default randomDataService;
