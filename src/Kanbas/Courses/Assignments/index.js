import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const courseData = db.assignments.find(course => course.courseId === courseId);

  return (
    <div>
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="wd-fg-color-red text-decoration-none" href={`https://northeastern.instructure.com/courses/${courseId}/assignments`}>{courseId}</a>
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
      {courseData.sections.map((section, sectionIndex) => (
        <div className="list-group" key={sectionIndex}>
          <button type="button" className="list-group-item list-group-item-secondary list-group-item-action">
            {section.title}
          </button>
          {section.items.map((item, itemIndex) => (
            <button key={itemIndex} type="button" className="list-group-item list-group-item-action" style={{ paddingLeft: item.padding }}>
              <Link className="text-decoration-none wd-fg-color-black" to={`/Kanbas/Courses/${courseId}/Assignments/${courseId}`}>{item.text}</Link>
              <br />
              {item.subText && <font size="-1" color="grey">{item.subText}</font>}
              {item.icon && <i className={`fa fa-check-circle float-end ${item.iconColor}`} aria-hidden="true"></i>}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Assignments;
