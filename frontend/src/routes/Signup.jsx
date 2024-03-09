import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const createUserAccount = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/api/user", formData)
    .then(() => console.log("user created"))
    .catch((err) => console.log(err))

    navigate("/login")
  }


  return (
    <div className="container mb-5">
      <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://th.bing.com/th/id/R.8af15eea83cea0e2f2bc62b57c4d9cdb?rik=zJSxWY%2fkIJSG4g&riu=http%3a%2f%2fwww.langoly.com%2fwp-content%2fuploads%2f2021%2f09%2fcoursera-logo.png&ehk=BNFRmeu9xHm%2fjFKFLUSWat9KlDnM9nf16dUlC3tDNJU%3d&risl=&pid=ImgRaw&r=0" alt="" width="72" height="60"/>
        <h2>Sign Up</h2>
        <p className="lead">Please fill in the form to create your account.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={createUserAccount}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="firstName" name='username' value={formData.username} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" name='email' value={formData.email} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name='password' value={formData.password} onChange={handleChange} required />
            </div>

            <button className="w-100 btn btn-primary btn-lg" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
