import {
  addCountryNameWithInfo,
  clearCountries,
} from "../reducers/countryReducer";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const NumberForm = () => {
  const MIN_NUMBER_VALUE = 5;
  const MAX_NUMBER_VALUE = 20;
  const dispatch = useDispatch();

  const handleNumSubmit = (event) => {
    event.preventDefault();
    dispatch(clearCountries());
    const numOfCountries = event.target.inputNumber.value;
    for (let i = 0; i < numOfCountries; i++) {
      dispatch(addCountryNameWithInfo());
    }
  };

  return (
    <form onSubmit={handleNumSubmit}>
      <div>
        Number of countries:
        <input
          type="number"
          name="inputNumber"
          min={MIN_NUMBER_VALUE}
          max={MAX_NUMBER_VALUE}
          defaultValue={MIN_NUMBER_VALUE}
        />
      </div>
      <Button variant="primary" type="submit">
        Enter
      </Button>
    </form>
  );
};

export default NumberForm;
