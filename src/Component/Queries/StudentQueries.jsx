import React from "react";
import "./StudentQueries.css";
const StudentQueries = () => {
  const query = [
    {
      name: {
        image: "maclea.jpg",
        text: "Machine Learning BootCamp",
      },
      option1: "View",
      option2: "Decline",
    },
    {
      name: {
        image: "python.jpg",
        text: "Python & R in Data Science",
      },
      option1: "Approve",
      option2: "Decline",
    },
    {
      name: {
        image: "maclea1.jpg",
        text: "Super Data Science Support",
      },
      option1: "Approve",
      option2: "Decline",
    },

    {
      name: {
        image: "cs1.jpg",
        text: "Analyst Bootcamp 2020",
      },
      option1: "Approve",
      option2: "Decline",
    },
  ];
  return (
    <div className="query">
      <table>
        <thead>
          <tr>
            <th>Student Queries</th>
          </tr>
        </thead>

        <tbody>
          {query.map((course) => (
            <tr>
              <td>
                <div className="course">
                  <div>
                    <img
                      src={course.name.image}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="texty">{course.name.text}</div>
                </div>
              </td>

              <td>
                <button className="button-41" role="button">
                  {course.option1}
                </button>
              </td>
              <br />
              <br />
              <td>
                <button className="button-45" role="button">
                  {course.option2}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentQueries;
