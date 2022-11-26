import { createSlice } from "@reduxjs/toolkit";
import randomDataService from "../services/randomData";

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
  },
});

export const { appendCountry, setCountries } = countrySlice.actions;

export const addCountryName = () => {
  return async (dispatch, getState) => {
    let country = await randomDataService.getCountry();
    const currentCountries = getState().countries;
    while (currentCountries.find((e) => e.name === country.name)) {
      country = await randomDataService.getCountry();
    }
    dispatch(appendCountry(country));
  };
};

export default countrySlice.reducer;
