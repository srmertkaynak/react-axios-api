import "./App.css";
import Search from "./Components/Search.jsx";

function App() {
  return (
    <div className="App">
      <Search search={handleSubmit} />
    </div>
  );
}

export default App;
