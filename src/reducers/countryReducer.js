import { createSlice } from "@reduxjs/toolkit";
import randomDataService from "../services/randomData";
import restCountriesService from "../services/restcountries";

const initialState = [];

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    appendCountry(state, action) {
      state.push(action.payload);
    },
    setCountries(state, action) {
      return action.payload;
    },
    updateCountry(state, action) {
      const updatedCountry = action.payload;
      return state.map((country) =>
        country.name !== updatedCountry.name ? country : updatedCountry
      );
    },
  },
});

export const { appendCountry, setCountries, updateCountry } =
  countrySlice.actions;

export const addCountryNameWithInfo = () => {
  return async (dispatch, getState) => {
    let country = await randomDataService.getCountry();
    const currentCountries = getState().countries;
    while (currentCountries.find((e) => e.name === country.name)) {
      country = await randomDataService.getCountry();
    }
    dispatch(appendCountry(country)); //first, get random countries and append them to the state

    const countryInfo = await restCountriesService.getCountryInfo(country.name);
    const updatedCountry = {
      ...country,
      ...countryInfo,
    };
    dispatch(updateCountry(updatedCountry)); //then, update those entries with fetched info
  };
};

export const clearCountries = () => {
  return (dispatch) => {
    dispatch(setCountries(initialState));
  };
};

export default countrySlice.reducer;
