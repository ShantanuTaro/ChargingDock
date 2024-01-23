import React, { useState } from 'react';
import './Agent.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AgentRegistration = () => {
  const url = 'http://localhost:3000/agentRegistration';

  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [chargerLocation, setChargerLocation] = useState('');
  const [chargerLocationCode, setChargerLocationCode] = useState('');
  const [noOfChargers, setNoOfChargers] = useState(0);
  const [uniqueId, setUniqueId] = useState('');
// firstName
// lastName
// email
// password
// chargerLocation
// chargerLocationCode
// noOfChargers
// uniqueId

  let navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Perform registration logic here (e.g., API call)
    try {
      const userData={
        firstName: firstName,
        lastName: lastName,
        email:email,
        password:password,
        chargerLocation: chargerLocation,
        chargerLocationCode: chargerLocationCode,
        noOfChargers: noOfChargers,
        uniqueId: uniqueId
      }
      const response = await axios.post(url,userData); //work on this/........

      if (response.status === 200) {
        let path = `/chargerRegistration`;
        navigate(path);
        console.log('User created successfully');
        // Optionally, you can reset the form or perform any other action
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
    // Clear form fields after submission
    // setFullName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <div className="registration-container">
      <h2>Agent Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='label' htmlFor="firstName">First Name:</label>
          <input
            className='input'
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className='label' htmlFor="lastName">Last Name:</label>
          <input
            className='input'
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className='label' htmlFor="chargerLocation">Charger Location:</label>
          <input
            className='input'
            type="text"
            id="chargerLocation"
            name="chargerLocation"
            value={chargerLocation}
            onChange={(e) => setChargerLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className='label' htmlFor="chargerLocationCode">Charger Location Code:</label>
          <input
            className='input'
            type="text"
            id="chargerLocationCode"
            name="chargerLocationCode"
            value={chargerLocationCode}
            onChange={(e) => setChargerLocationCode(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className='label' htmlFor="noOfChargers">No Of Chargers:</label>
          <input
            className='input'
            type="text"
            id="noOfChargers"
            name="noOfChargers"
            value={noOfChargers}
            onChange={(e) => setNoOfChargers(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className='label' htmlFor="uniqueId">Unique Id:</label>
          <input
            className='input'
            type="text"
            id="uniqueId"
            name="uniqueId"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className='label' htmlFor="email">Email:</label>
          <input
            className='input'
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className='label' htmlFor="password">Password:</label>
          <input
            className='input'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default AgentRegistration;








