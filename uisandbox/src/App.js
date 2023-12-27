import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import HeaderC from "./components/HeaderC/NavBelt";
import MainNav from "./components/HeaderC/MainNav";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderC />
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
