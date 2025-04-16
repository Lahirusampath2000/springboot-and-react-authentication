import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Home from './Components/home';
import Navbar from './Components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check session status on initial load
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('http://localhost:8080/req/login/check', {
          credentials: 'include'
        });
        setIsAuthenticated(response.ok);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkSession();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8080/req/logout', {
        method: 'POST',
        credentials: 'include'
      });
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;