import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./pages/Home"
import CreateUser from "./components/CreateUser"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/createuser" element={<CreateUser />} />
      </Routes>
    </Router>
  )
}

export default App;
