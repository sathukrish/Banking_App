import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './AccountDetails.css'; // Import the CSS file

const AccountDetails = () => {
  const [accountDetails, setAccountDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const {username} = useParams();
  const navigate = useNavigate();
// console.log(username);
  useEffect(() => {
    axios.get(`http://localhost:3000/account/${username}`)
      .then((response) => {
        setAccountDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Happy Customer. Please Create Your Fixed Deposits.');
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h3>Account Details</h3>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>NIC Number</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Amount</th>
            <th>Duration (in months)</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {accountDetails.map((account) => (
            <tr key={account.id}>
              <td>{account.username}</td>
              <td>{account.Nicnum}</td>
              <td>{account.Address}</td>
              <td>{account.Phonenum}</td>
              <td>{account.amount}</td>
              <td>{account.duration}</td>
              <td>{parseFloat(account.amount) + parseFloat(account.duration) * 0.15 * parseFloat(account.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate(`/${username}`)}>Home</button>
    </div>
    
  );
};

export default AccountDetails;
