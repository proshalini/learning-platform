import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const athenticateUserAccount = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/api/user/auth", formData)
    .then(() => console.log("user logged in"))
    .catch((err) => console.log(err))

    navigate("/explore")
  }
  return (
    <div className="container mb-5">
      <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://th.bing.com/th/id/R.8af15eea83cea0e2f2bc62b57c4d9cdb?rik=zJSxWY%2fkIJSG4g&riu=http%3a%2f%2fwww.langoly.com%2fwp-content%2fuploads%2f2021%2f09%2fcoursera-logo.png&ehk=BNFRmeu9xHm%2fjFKFLUSWat9KlDnM9nf16dUlC3tDNJU%3d&risl=&pid=ImgRaw&r=0" alt="" width="72" height="57" />
        <h2>Login</h2>
        <p className="lead">Please enter your credentials to log in.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={athenticateUserAccount}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" name='email' onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name='password' onChange={handleChange} required />
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>

            <button className="w-100 btn btn-primary btn-lg" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
