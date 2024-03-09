import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import course from "../courses"

export default function ExplorePage() {
  return (
    <div className="container">
      <h2 className="text-center my-4">Explore Courses</h2>
      <div className='d-flex justify-content-center gap-3' style={{flexWrap: "wrap"}}>
        {
          course.map((item) => (
            <CourseCard courseId= {item.courseId} image={item.image} title={item.title} desc={item.desc} />
          ))
        }
      </div>
    </div>
  );
}