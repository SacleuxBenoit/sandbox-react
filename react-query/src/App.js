import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'
import { NavBar } from './pages/NavBar'
import { useState, createContext } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export let AppContext = createContext();
function App() {
  let client = new QueryClient({defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
    }
  }});
  let [username, setUsername] = useState("Benoît");

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{username, setUsername}}>   
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home username={username}/>}/>
              <Route path="/profile" element={<Profile/>} />
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
