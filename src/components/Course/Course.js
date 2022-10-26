import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const {id, image, info, title } = course;

  return (
    <div className="card w-52 card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{info}</p>
        <div className="card-actions justify-end">
        <Link className="btn btn-success text-white mx-auto" to={`/enroll-page/${id}`}>Enroll Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Course;
