import React, { useEffect, useState } from "react";
import { navMenu } from "../Lists/lists";
import "../results.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const url =
  "https://dropout-backend-8xce.onrender.com/api/process-student-data/";
const Results = () => {
  // State to hold student data
  const [studentData, setStudentData] = useState(null);
  const [fetched, setFetched] = useState(false);

  const location = useLocation();
  const formData = location.state;
  useEffect(() => {
    // document.querySelector("nav").classList.add("navbar3");
    console.log(formData);
    const fetchReport = async () => {
      const res = await axios.post(url, formData);
      console.log(res);
      setStudentData(res.data);
      setFetched(true);
    };
    fetchReport();
  }, []);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="left-nav-menu">
            <ul>
              <h2>Your LOGO</h2>
              {navMenu.map(({ id, page, href }) => {
                return (
                  <li id={`li${id}`} key={id}>
                    <a href={href}>{page}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="login-menu" style={{ color: "#ef2851" }}>
            &copy; Copyright 2024 - Team Parashar
          </div>
        </nav>
      </header>

      <div className="container container2">
        <h1>Student Analysis</h1>

        <div className="risk-level">
          Dropout Risk:{" "}
          <span id="dropoutRisk">
            {fetched && studentData.analysis.dropout_risk.toUpperCase()}
          </span>
        </div>

        <div className="risk-level">
          Dropout Probability:{" "}
          <span id="dropoutProbability">
            {fetched && (studentData.analysis.dropout_probability * 100).toFixed(1)}%
          </span>
        </div>

        <div className="risk-factors">
          <h2>Risk Factors:</h2>
          <ul id="riskFactors">
            {fetched && (studentData.analysis.risk_factors.length !== 0 ? studentData.analysis.risk_factors.map((factor, index) => (
              <li key={index}>{factor}</li>
            )) : <li>No risk factors!</li>)}
          </ul>
        </div>

        <div className="recommendations">
          <h2>Recommendations:</h2>
          <ul id="recommendations">
            {fetched && studentData.analysis.recommendations.map(
              (recommendation, index) => (
                <li key={index}>{recommendation}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Results;
