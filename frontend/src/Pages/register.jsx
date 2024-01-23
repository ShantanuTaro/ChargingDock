import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

export const Register = () => {
  const url = 'http://localhost:3000/customerRegistration';

  // const [userData, setUserData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(url, userData);

  //     if (response.status === 200) {
  //       let path = `/success`;
  //       navigate(path);
  //       console.log('User created successfully');
  //       // Optionally, you can reset the form or perform any other action
  //     } else {
  //       console.error('Failed to create user');
  //     }
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //   }
  // };


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
}






// import React from "react";
// import "./register.css";


// export const Register = () => {
//   return (
//     <div className="register-page">
//       <div className="div">
//         <div className="overlap-group">
//           <div className="page-heading">
//             <p className="date-august">
//               <span className="text-wrapper">Date</span>
//               <span className="span">&nbsp;&nbsp;—&nbsp;&nbsp;August 21, 2023</span>
//             </p>
//             <div className="text-wrapper-2">Register</div>
//             <img className="divider" alt="Divider" src="divider.svg" />
//           </div>
//           <div className="navbar">
//             <div className="text-wrapper-3">Charging Dock</div>
//             <div className="text-wrapper-4">Home</div>
//             <div className="text-wrapper-5">Testimonials</div>
//             <div className="text-wrapper-6">Who we are</div>
//             <div className="text-wrapper-7">My profile</div>
//             <button className="cart-button">
//               <div className="text-wrapper-8">Login</div>
//               <img className="ellipse" alt="Ellipse" src="ellipse-280.svg" />
//             </button>
//           </div>
//         </div>
//         <div className="text-wrapper-9">First Name</div>
//         <div className="text-wrapper-10">Last Name</div>
//         <div className="rectangle" />
//         <div className="rectangle-2" />
//         <div className="text-wrapper-11">Email</div>
//         <div className="rectangle-3" />
//         <div className="text-wrapper-12">Password</div>
//         <div className="text-wrapper-13">Confirmation</div>
//         <div className="rectangle-4" />
//         <div className="rectangle-5" />
//         <div className="overlap">
//           <div className="text-wrapper-14">Register</div>
//           <p className="already-have-an">
//             <span className="text-wrapper-15">Already have an account?</span>
//             <span className="text-wrapper-16"> Sign In</span>
//           </p>
//         </div>
//         <div className="div-wrapper">
//           <div className="text-wrapper-17">Register</div>
//         </div>
//       </div>
//     </div>
//   );
// };
