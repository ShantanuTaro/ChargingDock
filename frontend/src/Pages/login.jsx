import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from '@mui/material/Alert';
import { Stack } from "@mui/material";

export const Login = () => {
  let isValid = true
  const url = 'http://localhost:3000/login';

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(url, userData);
      console.log(response);
        const token = response.data.token;
        localStorage.setItem('token', token);

        console.log('Login successful');
    } catch (error) {
      console.error('Error creating user:', error.response.data);
      const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : 'An error occurred. Please try again.';

    // Display an alert with the error message
    alert(errorMessage);
    }
  };


  return (
    <div className="container">
     
    <h3>Login Form</h3>
      <form action="/login" method="POST" onSubmit={handleSubmit}>
      {!isValid && <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>}
        <div className="form-group mb-3">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" name="email" value={userData.email}
              onChange={handleInputChange}/>
        </div>
        <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password" value={userData.password}
              onChange={handleInputChange}/>
          </div>
        <div className="d-grid mt-3">
        <button type="submit" className="btn btn-primary form-control">Submit</button>
        </div>
      </form>
    </div>
  )
}