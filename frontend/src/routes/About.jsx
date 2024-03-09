import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {

  return (
    <div>
      <main>
        <section className="py-5">
          <div className="container">
            <h1>About Coursera</h1>
            <p className="lead">Coursera is an online learning platform that offers courses, certificates, and degrees from top universities and institutions around the world. Our mission is to provide universal access to the world’s best education, partnering with universities and organizations to offer courses online.</p>
            <p>We believe in connecting learners to the best instructors and courses in a variety of subjects, ranging from arts and humanities to computer science and engineering. With Coursera, you can learn at your own pace, from anywhere in the world.</p>
            <p>Join millions of learners today and start your journey to success with Coursera.</p>
            <Link className="btn btn-primary btn-lg" to="/signup">Join For Free</Link>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-light py-4">
        <div className="container text-center">
          <p>&copy; 2024 Coursera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

