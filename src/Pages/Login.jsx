import { useEffect } from "react";
import { navMenu } from "../Lists/lists";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Login = () => {
  useEffect(() => {
    document.body.classList.add("body2");
    document.querySelector("header").classList.add("admin-header");
    document.querySelector("nav").classList.add("admin-navbar");
    document.querySelector("nav").classList.add("navbar2");
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || {};

  return (
    <>
      <header>
        <nav>
          <div class="logo">LOGO</div>
          <ul class="nav-links">
            {navMenu.map(({ id, page, href }) => {
              return (
                <li key={id}>
                  <a href={href}>{page}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <div class="curved-rectangle">
        <div class="login">
          <h2>{role} Login</h2>
          <div class="inputBx">
            <input type="text" placeholder="Username" />
          </div>
          <div class="inputBx">
            <input type="password" placeholder="Password" />
          </div>
          <div class="inputBx">
            <input type="submit" value="Sign in" onClick={() => navigate("/form")}/>
          </div>
          <div class="links">
            <a href="#">Forget Password</a>
            <a href="/signup">Signup</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
