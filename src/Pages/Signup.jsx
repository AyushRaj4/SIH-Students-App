import { useEffect } from "react";
import { navMenu } from "../Lists/lists";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { role } = location.state || {};
  useEffect(() => {
    document.body.classList.add("body2");
    document.querySelector("header").classList.add("admin-header");
    document.querySelector("nav").classList.add("admin-navbar");
    document.querySelector("nav").classList.add("navbar2");
  }, []);
  return (
    <>
      <header>
        <nav>
          <div class="logo"> LOGO</div>
          <ul class="nav-links">
            {navMenu.map(({ id, page, href }) => {
              return (
                <li key={id}>
                  <a href={href}>{page}</a>
                </li>
              );
            })}
          </ul>
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      <div class="curved-rectangle">
        <div class="register">
          <h2>{role} Registration</h2>
          <div class="inputBx">
            <input type="text" placeholder="First Name" />
          </div>
          <div class="inputBx">
            <input type="text" placeholder="Last Name" />
          </div>
          <div class="inputBx">
            <input type="text" placeholder="Organisation Name" />
          </div>
          <div class="inputBx">
            <input type="email" placeholder="Email ID" />
          </div>
          <div class="inputBx">
            <input type="submit" value="Register" onClick={() => navigate("/login")}/>
          </div>
          <div class="links">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
