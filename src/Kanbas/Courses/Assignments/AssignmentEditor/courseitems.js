import React from 'react';
import { useParams } from "react-router-dom";
import db from "../../../Database";


function CourseItems() {
    const { courseId } = useParams();
  const courseData = db.assignments.find(course => course.courseId === courseId);
    return (
        <div>
            {courseData.map(course => (
                <div key={course.courseId}>
                    <h2>{course.courseId}</h2>
                    {course.sections.map(section => (
                        <div key={section.title}>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.items.map(item => (
                                    <li key={item.text}>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default CourseItems;