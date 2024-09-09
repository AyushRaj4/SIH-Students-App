import { useNavigate } from "react-router-dom";
import { navMenu } from "../Lists/lists";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="navbar">
        <div className="left-nav-menu">
          <ul>
            {" "}
            <h2>Your LOGO</h2>
            {navMenu.map(({ id, page, href }) => {
              return (
                <li key={id} id={`li${id}`}>
                  <a href={href}>{page}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="login-menu">
          <button
            className="btn"
            id="login"
            onClick={() => {
              const data = { type: "login" };
              navigate("/role", { state: data });
            }}
          >
            login
          </button>
          <button
            className="btn signup"
            onClick={() => {
              const data = { type: "signup" };
              navigate("/role", { state: data });
            }}
          >
            sign up
          </button>
          <div className="icon-container">
          <i className="fa-solid fa-bars animated-icon"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
