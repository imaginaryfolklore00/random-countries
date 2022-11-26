const NumberForm = () => {
  const MIN_NUMBER_VALUE = 5;
  const MAX_NUMBER_VALUE = 20;

  const handleNumSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.inputNumber.value);
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
        />
      </div>
      <button type="submit">Go</button>
    </form>
  );
};

export default NumberForm;
