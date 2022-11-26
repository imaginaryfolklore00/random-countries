import randomDataService from "../services/randomData";

const NumberForm = () => {
  const MIN_NUMBER_VALUE = 5;
  const MAX_NUMBER_VALUE = 20;

  const handleNumSubmit = async (event) => {
    event.preventDefault();
    const address = await randomDataService.getAddress(
      event.target.inputNumber.value
    );
    console.log(address);
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
