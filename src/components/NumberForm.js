import {
  addCountryNameWithInfo,
  clearCountries,
} from "../reducers/countryReducer";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import configData from "../config.json";

const NumberForm = () => {
  const dispatch = useDispatch();

  const handleNumSubmit = (event) => {
    event.preventDefault();
    dispatch(clearCountries());
    const numOfCountries = event.target.inputNumber.value;
    for (let i = 0; i < numOfCountries; i++) {
      dispatch(addCountryNameWithInfo(numOfCountries));
    }
  };

  return (
    <form onSubmit={handleNumSubmit}>
      <div>
        Number of countries:
        <input
          type="number"
          name="inputNumber"
          min={configData.MIN_NUMBER_VALUE}
          max={configData.MAX_NUMBER_VALUE}
          defaultValue={configData.MIN_NUMBER_VALUE}
        />
      </div>
      <Button variant="primary" type="submit">
        Enter
      </Button>
    </form>
  );
};

export default NumberForm;
