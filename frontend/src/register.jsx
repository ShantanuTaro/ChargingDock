import { useNavigate } from "react-router-dom";


function Register() {
  let navigate = useNavigate();
  const onRegister = () =>{
    let path = `/success`; 
    navigate(path);
  }
  return (
    <div className="App">
      <div className="container">
      <h2>Login and register form with Node.js, Express.js and MySQL</h2>
      <h3>Register form</h3>
      <form action="/register" method="POST">
        <div className="form-group mb-3">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" name="firstName"/>
        </div>
        <div className="form-group mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" name="lastName"/>
        </div>
        <div className="form-group mb-3">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" name="userName"/>
        </div>
        <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password"/>
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