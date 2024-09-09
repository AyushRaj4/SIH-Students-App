import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      student: parseInt(document.getElementById("student").value, 10),
      attendance: parseFloat(document.getElementById("attendance").value),
      grades: parseFloat(document.getElementById("grades").value),
      behavior_score: parseInt(
        document.getElementById("behavior_score").value,
        10
      ),
      extracurricular_activities: parseInt(
        document.getElementById("extracurricular_activities").value,
        10
      ),
      parent_involvement: parseInt(
        document.getElementById("parent_involvement").value,
        10
      ),
      socioeconomic_status: document.getElementById("socioeconomic_status")
        .value,
    };

    // Handle submission logic here
    navigate("/result", { state: formData });
  };

  return (
    <div class="container">
      <h1>Student Data Form</h1>
      <form id="student-data-form" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="student">Student ID (numeric):</label>
          <input
            type="number"
            id="student"
            name="student"
            placeholder="Enter Student ID"
            required
          />
        </div>

        <div class="form-group">
          <label for="attendance">Attendance (%):</label>
          <input
            type="number"
            id="attendance"
            name="attendance"
            placeholder="Enter Attendance"
            required
          />
        </div>

        <div class="form-group">
          <label for="grades">Grades:</label>
          <input
            type="number"
            id="grades"
            name="grades"
            placeholder="Enter Grades"
            required
          />
        </div>

        <div class="form-group">
          <label for="behavior_score">Behavior Score (1-10):</label>
          <input
            type="number"
            id="behavior_score"
            name="behavior_score"
            placeholder="Enter Behavior Score"
            required
          />
        </div>

        <div class="form-group">
          <label for="extracurricular_activities">
            Extracurricular Activities:
          </label>
          <input
            type="number"
            id="extracurricular_activities"
            name="extracurricular_activities"
            placeholder="Enter Activities"
            required
          />
        </div>

        <div class="form-group">
          <label for="parent_involvement">Parent Involvement (1-5):</label>
          <input
            type="number"
            id="parent_involvement"
            name="parent_involvement"
            placeholder="Rate Parent Involvement"
            required
          />
        </div>

        <div class="form-group">
          <label for="socioeconomic_status">Socioeconomic Status:</label>
          <select
            id="socioeconomic_status"
            name="socioeconomic_status"
            required
          >
            <option value="">Select Status</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
