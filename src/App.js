import logo from "./logo.svg";
import "./App.css";
import Restaurant from "./components/Restaurant/Restaurant";
import Header from "./components/Header/Header";
import SearchFood from "./components/SearchFood/SearchFood";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchFood></SearchFood>
      <Restaurant></Restaurant>
    </div>
  );
}

export default App;
