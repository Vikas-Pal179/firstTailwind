import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
