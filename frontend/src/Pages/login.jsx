import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MuiAlert from '@mui/material/Alert';
import './register.css'
import { Box, Button, Grid, Snackbar, Stack } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Login = () => {
  let isValid = true
  const url = 'http://localhost:3000/customerLogin';

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

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
        setIsRegistrationSuccessful(true);
        setSnackbarMessage('Login successful!');
        setSnackbarOpen(true);
        console.log('Login successful');
      let path = `/success`;
        navigate(path);
    } catch (error) {
        console.error('Error creating user:', error.response.data);
        const errorMessage =
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'An error occurred. Please try again.';

        setIsRegistrationSuccessful(false);
        setSnackbarMessage('Login failed. Please try again.');
        setSnackbarOpen(true);
    }
  };


  return (
    <div className="registration-container">

      <h3>Login Form</h3>
        <form action="/login" method="GET" onSubmit={handleSubmit}>
          {!isValid && <Alert onClose={() => { }}>This is a success alert — check it out!</Alert>}
            <div className="form-group mb-3">
              <label>Username</label>
              <input type="text" className="input" placeholder="Username" name="email" value={userData.email}
                onChange={handleInputChange} />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input type="password" className="input" placeholder="Password" name="password" value={userData.password}
                onChange={handleInputChange} />
            </div>
            <div className="d-grid mt-3">
              <button type="submit" className="button">Submit</button>
                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={6000}
                  onClose={handleSnackbarClose}
                >
                  <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleSnackbarClose}
                    severity={isRegistrationSuccessful ? 'success' : 'error'}
                  >
                  {snackbarMessage}
                </MuiAlert>
              </Snackbar>

            </div>
      </form>
    </div>
  )
}