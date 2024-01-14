import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

export const Register = () => {
  const url = 'http://localhost:3000/customerRegistration';

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

  localStorage.setItem('userData', JSON.stringify(userData));
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, userData);

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
  };


  return (
    <div className="">
      <div className="container">
        <h3>Register form</h3>
        <form action="/customerRegistration" method="POST" onSubmit={handleSubmit}>
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
