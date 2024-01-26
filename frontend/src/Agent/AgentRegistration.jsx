import React, { useState } from 'react';
import './Agent.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { register } from '../store/reducers/auth';

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
  let navigate = useNavigate(); 
  const dispatch = useDispatch() 

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    let path = `/chargerRegistration`;
    const userData={
      firstName: firstName,
      lastName: lastName,
      email:email,
      password:password,
      chargerLocation: chargerLocation,
      chargerLocationCode: chargerLocationCode,
      noOfChargers: noOfChargers,
    }
    dispatch(register({userData})).then((action)=>{
      //localStorage.setItem("accessToken",action.payload.token)
      navigate(path);
    })
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
        <center>
        <button className="button" type="submit">Register</button>
        </center>
      </form>
    </div>
  );
};

export default AgentRegistration;








