import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <div>
        <a
          href="https://github.com/LarissaGu/react-week-4"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repository
        </a>{" "}
        for this project
      </div>
    </div>
  );
}

export default App;
