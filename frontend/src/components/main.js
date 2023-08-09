import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import bankImage from './bank.jpg'; // Import the bank image file

const Home = () => {
  const { username } = useParams();
  console.log(`/account-details/${username}`);
  return (
    <div className="container">
      <div className="image-container">
        <img src={bankImage} alt="Bank" className="bank-image" />
      </div>
      <h1>Welcome to My Banking App</h1>
      <p>
        This is a simple banking app where you can create fixed deposits and view account details.
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/fixed-deposit">Create Fixed Deposit</Link>
          </li>
          <li>
            <Link to={`/account-details/${username}`}>View Your Account Details</Link>
          </li>
          {/* Add other links to different pages if needed */}
        </ul>
      </nav>
      {/* Add other routes for other pages if needed */}
    </div>
  );
};

export default Home;
