import React from 'react'
import {Link} from 'react-router-dom'
export default function home() {
  return (

    <main>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Welcome to Coursera</h1>
              <p className="lead">Learn from the world's best universities and institutions.
              Coursera is an online learning platform featuring courses, degrees, certificate programs, and tutorials in a wide range of subjects. Over 300 leading universities and companies provide instruction, including Stanford, Duke, Google, and IBM. Learning experiences range from targeted hands-on projects to comprehensive, job-ready certificates and degrees.</p>
              <a href="#" className="btn btn-primary btn-lg">Get Started</a>
            </div>
            <div className="col-md-6">
              <img src="https://149357281.v2.pressablecdn.com/wp-content/uploads/2021/06/Coursera-Plus-evergreen-animated-1-1024x536.gif" className="img-fluid" alt="Learning" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h2>Popular Courses</h2>
          <div className="row">
            {/* Example course cards */}
            <div className="col-md-4 mb-4">
              <div className="card">
                {/* <img src="course-image1.jpg" className="card-img-top" alt="Course" /> */}
                <div className="card-body">
                  <h5 className="card-title">Programming Languages(DSA)</h5>
                  <p className="card-text">learn DSA from Basic to advance in any programming language of your choice(C,C++,Java,Python) and become interview ready with our expert faculty .</p>
                  <Link to="/Login" className="btn btn-primary">Enroll</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              {/* Another course card */}
            </div>
            <div className="col-md-4 mb-4">
              {/* Another course card */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
