import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

export const Register = () => {
  const url = 'http://localhost:3000/customerRegistration';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();


  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Perform registration logic here (e.g., API call)
    try {

      const userData={
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }
          const response = await axios.post(url,userData); //work on this/........
    
          if (response.status === 200) {
            let path = `/success`;
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
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='label' htmlFor="firstName">First Name:</label>
          <input
            className='input'
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value)}}
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
}

