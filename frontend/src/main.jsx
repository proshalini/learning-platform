import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Root from './routes/Root.jsx'
import Explore from './routes/Explore.jsx'
import Signup from './routes/Signup.jsx'
import Coursedetails from './routes/Coursedetails.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="explore" element={<Explore />} />
        <Route path="signup" element={<Signup />} />
        <Route path="courses/:courseId" element={<Coursedetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
