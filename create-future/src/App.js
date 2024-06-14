import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Login from './Page/Login';
import Signup from './Page/Signup';
import Find from './Page/Find';
import Honey from './Page/Honey.';
import Recommend from './Page/Recommend';
import List from './Page/List';
import ProfileDetail from './Page/ProfileDetail';
import InDetail from './Page/InDetail';
import SchoolList from './Page/SchoolList';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Find" element={<Find />} />
          <Route path="/Honey" element={<Honey />} />
          <Route path="/Recommend" element={<Recommend />} />
          <Route path="/List" element={<List />} />
          <Route path="/ProfileDetail" element={<ProfileDetail />} />
          <Route path="/InDetail" element={<InDetail />} />
          <Route path="/SchoolList" element={<SchoolList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
