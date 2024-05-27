// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css"; // Updated to import App.css
import logo from "./assets/logo.png"; // Import the logo image
import manImage from "./assets/man.jpg"; // Import the new image
import employees from "./employeeData"; // Import the employee data

const EmployeeRow = ({
  rank,
  name,
  designation,
  hoursWorked,
  changes,
  isIncrease,
}) => (
  <tr>
    <td>{rank}</td>
    <td>{name}</td>
    <td>{designation}</td>
    <td>{hoursWorked}</td>
    <td className={isIncrease ? "increase" : "decrease"}>
      {isIncrease ? `▲ ${changes}` : `▼ ${changes}`}
    </td>
  </tr>
);

const App = () => {
  // Using useState for updating the time
  const [dateTime, setDateTime] = useState(new Date());

  // Here we are using useEffect hook for rechecking the time for every 1000ms
  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Here we give the format of Date and Time:
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h1>
          <img src={logo} alt="Logo" className="logo" />
          Employees Activity Dashboard
        </h1>
        <div className="date-time">
          <p>{formatDate(dateTime)}</p>
          <p>{formatTime(dateTime)}</p>
        </div>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Designation</th>
              <th>No. of hours worked</th>
              <th>Changes</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <EmployeeRow key={index} {...employee} />
            ))}
          </tbody>
        </table>

        <div className="employee-of-the-month">
          <img src={manImage} alt="Rakesh Kumar" />
          <div>
            <h2>Employee of the Week</h2>
            <h3>Rakesh Kumar</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

