import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Register() {
  const url = 'http://localhost:3000/register';

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
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
  // const onRegister = () => {
  //   let path = `/success`; 
  //   navigate(path);
  // }

  localStorage.setItem('userData', JSON.stringify(userData));
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, userData);

      if (response.status === 200) {
        // const newUser = response.data;
        // const users = JSON.parse(localStorage.getItem('users')) || [];
        // users.push(newUser);
        // localStorage.setItem('users', JSON.stringify(users));
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
  };


  return (
    <div className="App">
      <div className="container">
        <h2>Login and register form with Node.js, Express.js and MySQL</h2>
        <h3>Register form</h3>
        <form action="/register" method="POST" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" name="firstName" value={userData.firstName}
              onChange={handleInputChange} />
          </div>
          <div className="form-group mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" name="lastName" value={userData.lastName}
              onChange={handleInputChange} />
          </div>
          <div className="form-group mb-3">
            <label>Email ID</label>
            <input type="text" className="form-control" placeholder="Email" name="email" value={userData.email}
              onChange={handleInputChange} />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password" value={userData.password}
              onChange={handleInputChange} />
          </div>
          <div className="d-grid mt-3">
            <button type="submit" className="btn btn-primary form-control">Submit </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;