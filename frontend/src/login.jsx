import React from "react";

export const Login = () => {
  return (
    <div className="container">
      <h2>Login and register form with Node.js, Express.js and MySQL</h2>
      <h3>Login form</h3>
      <form action="/dashboard" method="POST">
        <div className="form-group mb-3">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" name="userName"/>
        </div>
        <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password"/>
          </div>
        <div className="d-grid mt-3">
        <button type="submit" className="btn btn-primary form-control">Submit</button>
        </div>
      </form>
    </div>
  )
}