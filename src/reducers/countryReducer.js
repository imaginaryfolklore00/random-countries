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
  return async (dispatch) => {
    const address = await randomDataService.getAddress();
    dispatch(appendCountry(address.country));
  };
};

export default countrySlice.reducer;
