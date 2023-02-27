import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./pages/Home"
import CreateUser from "./components/CreateUser"
import CreateLaunch from './components/CreateLaunch';
import CreateSquad from './components/CreateSquad'
import MainPage from './pages/Main'



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/createlaunch" element={<CreateLaunch />} />
        <Route path="/createSquad" element={<CreateSquad />} />
        <Route path="/mainpage" element={<MainPage />} />

      </Routes>
    </Router>
  )
}

export default App;
