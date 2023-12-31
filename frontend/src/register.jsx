import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const url = '/register';

  const [data, setData] = useState({});

  let navigate = useNavigate();
  const onRegister = () =>{
    // let path = `/success`; 
    // navigate(path);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log('result',response);
    console.log('data',data);

  }


  return (
    <div className="App">
      <div className="container">
      <h2>Login and register form with Node.js, Express.js and MySQL</h2>
      <h3>Register form</h3>
      <form action="/register" method="POST" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" name="firstName" onChange={e => setData({...data, firstName: e.target.value})}/>
        </div>
        <div className="form-group mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" name="lastName" onChange={e => setData({...data, lastName: e.target.value})}/>
        </div>
        <div className="form-group mb-3">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" name="userName" onChange={e => setData({...data, userName: e.target.value})}/>
        </div>
        <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password" onChange={e => setData({...data, password: e.target.value})}/>
          </div>
        <div className="d-grid mt-3">
        <button onClick={onRegister} type="submit" className="btn btn-primary form-control">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Register;