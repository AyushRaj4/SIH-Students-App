import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./form.css";
// import "./results.css";
import Home from "./Pages/Home";
import Role from "./Pages/Role";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Form from "./Pages/Form";
import Results from "./Pages/Results";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role" element={<Role />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
