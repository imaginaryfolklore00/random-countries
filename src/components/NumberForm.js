import { addCountryNameWithInfo } from "../reducers/countryReducer";
import { useDispatch } from "react-redux";

const NumberForm = () => {
  const MIN_NUMBER_VALUE = 5;
  const MAX_NUMBER_VALUE = 20;
  const dispatch = useDispatch();

  const handleNumSubmit = (event) => {
    event.preventDefault();
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
      <button type="submit">Go</button>
    </form>
  );
};

export default NumberForm;
