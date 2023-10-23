import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
    return (
        <div >
          <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a className=" wd-fg-color-red text-decoration-none" href={`https://northeastern.instructure.com/courses/${courseId}/assignments`}>{courseId}</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Assignments</li>
            </ol>
          </nav>
          <input type="text" placeholder="Search for Assignments" />
          <div className="float-end">
            <button className="btn btn-secondary">+Group</button>
            <button className="btn btn-danger">+Assignment</button>
            <button className="btn btn-secondary">
              <Link className="wd-fg-color-white" to={`./edits`}><i className="fa fa-bars" aria-hidden="true"></i></Link>
            </button>
          </div>
          <hr />
          <div className="list-group">
            <button type="button" className="list-group-item list-group-item-secondary list-group-item-action">
              Assignments
            </button>
            {courseAssignments.map((assignment, index) => (
              <button key={index} type="button" className="list-group-item list-group-item-action" style={{ paddingLeft: "8%" }}>
                <Link className="text-decoration-none wd-fg-color-black" to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <br />
                <font size="-1" color="grey">{assignment.week} | Date: {assignment.date}</font>
                <i className="fa fa-check-circle float-end wd-fg-color-green" aria-hidden="true"></i>
              </button>
            ))}
            {/* Add Quizzes and Exams similarly */}
          </div>
        </div>
      );
    }
    
    export default Assignments;

