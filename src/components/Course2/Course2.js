import React from "react";
import { Link } from "react-router-dom";

const Course2 = ({ course }) => {
  const { id, image, title, info } = course;

  return (
    <div className="card w-96 glass shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{info}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success text-white mx-auto">
            <Link to={`/enroll-page/${id}`}>Enroll Now</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Course2;
