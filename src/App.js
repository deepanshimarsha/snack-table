import "./App.css";
import SnackTable from "./SnackTable";

function App() {
  return (
    <div className="App">
      <h1>Snack Table</h1>
      <SnackTable />
      <p style={{ color: "grey" }}>
        sort by any column by clicking on a column...
      </p>
    </div>
  );
}

export default App;
