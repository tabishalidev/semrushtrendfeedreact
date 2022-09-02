import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import SavedTrends from "./Pages/SavedTrends";

import BackendTest from "./Pages/BackendTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedtrends" element={<SavedTrends />} />

        <Route path="/backendtest" element={<BackendTest />} />
      </Routes>
    </Router>
  );
}

export default App;
