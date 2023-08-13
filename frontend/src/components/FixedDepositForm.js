import React, { useState } from 'react';
import axios from 'axios';
import './FixedDepositForm.css';
import { useNavigate } from 'react-router-dom';

const FixedDepositForm = () => {
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [username, setUsername] = useState('');
  const [Nicnum, setNicnum] = useState('');
  const [Address, setAddress] = useState('');
  const [Phonenum, setPhonenum] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const totalAmount = parseFloat(amount) + parseFloat(duration) * 0.15 * parseFloat(amount);

  const isFormValid = () => {
    if (!username.trim() || !Nicnum.trim() || !Address.trim() || !Phonenum.trim()) {
      setMessage('Please fill in all the fields.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    const data = { amount, duration, username, Nicnum, Address, Phonenum };

    axios.post('http://ec2-13-49-240-240.eu-north-1.compute.amazonaws.com/fixed-deposit', data)
      .then((response) => {
        alert(response.data.message);
        navigate(`/${username}`)
      })
      .catch((error) => {
        console.error('Error creating fixed deposit:', error);
      });
  };

  return (
    <div className="glass fixed-deposit-container">
      <h3>Create Fixed Deposit</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="NIC Number"
          value={Nicnum}
          onChange={(e) => setNicnum(e.target.value)}
        />
        <textarea
          placeholder="Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={Phonenum}
          onChange={(e) => setPhonenum(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="">Select Duration (in months)</option>
          <option value="3">3 months</option>
          <option value="6">6 months</option>
          <option value="12">12 months</option>
        </select>
        <p>After {duration} months, you will be able to get {totalAmount} RS</p>
        <button type="submit">Create</button>
        <p className="message">{message}</p>
      </form>
    </div>
  );
};

export default FixedDepositForm;
