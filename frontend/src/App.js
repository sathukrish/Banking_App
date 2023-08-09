import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FixedDepositForm from './components/FixedDepositForm';
import Login from './components/login';
import Home from './components/main';
import SignUp from './components/signup';
import AccountDetails from './components/AccountDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/fixed-deposit" element={<FixedDepositForm />} />
        <Route path="/:username" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-details/:username" element={<AccountDetails />} />
      </Routes>
      {/* Add other routes for other pages if needed */}
    </Router>
  );
};

export default App;
