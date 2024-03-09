import React from 'react';
import {Link, useParams} from 'react-router-dom'
import courses from '../courses';

export default function Coursedetails() {
  const {courseId} = useParams()
  
  const course = courses.find((item) => item.courseId === courseId)

  return (
    <div className='container'>
      <h1 className='display-1 card-header text-center'>
        {course.title}
      </h1>
      <div className='d-flex gap-5 justify-content-center align-items-center mt-5'>
        <div className='col-md-6'>
          <img
            src={course.image}
            alt='Computer Science'
            className='img-fluid'
          />
        </div>
        <div className='col-md-6 fs-4'>
          <p>
           {course.desc}
          </p>
          <Link className="btn btn-primary btn-lg" to="/signup">Join For Free</Link>
        </div>
      </div>
    </div>
  );
}