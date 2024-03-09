import { Link } from "react-router-dom"

export default function CourseCard({courseId,image, title, desc}) {
    return (
        <div className="card mb-4" style={{width: "25rem"}}>
            <img src={image} className="card-img-top" alt="Course 1" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <Link to={`/courses/${courseId}`} className="btn btn-primary">Learn More</Link>
            </div>
        </div>
    )
}