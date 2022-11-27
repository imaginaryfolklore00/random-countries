import CountryTable from "./components/CountryTable";
import NumberForm from "./components/NumberForm";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="container">
      <Title />
      <NumberForm />
      <CountryTable />
    </div>
  );
};

export default App;
