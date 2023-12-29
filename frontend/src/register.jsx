

function Register() {
  
  return (
    <div className="App">
      <div class="container">
      <h2>Login and register form with Node.js, Express.js and MySQL</h2>
      <h3>Register form</h3>
      <form action="/register" method="POST">
        <div class="form-group mb-3">
            <label>First name</label>
            <input type="text" class="form-control" placeholder="First name" name="firstName"/>
        </div>
        <div class="form-group mb-3">
            <label>Last name</label>
            <input type="text" class="form-control" placeholder="Last name" name="lastName"/>
        </div>
        <div className="form-group mb-3">
            <label>Username</label>
            <input type="text" class="form-control" placeholder="Username" name="userName"/>
        </div>
        <div class="form-group mb-3">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password"/>
          </div>
        <div class="d-grid mt-3">
        <button type="submit" class="btn btn-primary form-control">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Register;