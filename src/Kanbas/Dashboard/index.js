import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
    const courses = db.courses;
    return (
      <div className="container" style={{paddingLeft: '3%'}}>
        <link href="../vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css" rel="stylesheet"/>
        <h1>Dashboard</h1><hr />
        <h4>Published Courses({courses.length})</h4>
        <div className="text-center">
          <div className="row">
            {courses.map((course, index) => (
              <div key={course._id} className="col-4" style={{paddingTop: '1.5%'}}>
                <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text">{course.number} - Starts on: {course.startDate}</p>
                    <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-danger">Go to {course.name}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
export default Dashboard;

