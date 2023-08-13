import { BrowserRouter, Routes,Route, } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Planet from './pages/planet';
import IncrementButton from './pages/IncrementButton';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="incrementButton" element={<IncrementButton />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
