import logo from "./logo.svg";
import "./App.css";
import { TestComponent, HomeComponent } from "./testmodule";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="test" element={<TestComponent />} />
      </Routes>
    </div>
  );
}

export default App;
