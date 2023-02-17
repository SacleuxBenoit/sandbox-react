import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'
import { NavBar } from './pages/NavBar'
import { useState } from 'react'
function App() {
  let [username, setUsername] = useState("Benoît");

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home username={username}/>}/>
          <Route path="/profile" element={<Profile username={username} />} />
          <Route path="/menu" element={<Menu username={username}/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
