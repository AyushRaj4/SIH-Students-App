import { navMenu } from "../Lists/lists";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="left-nav-menu">
          <ul>
            {" "}
            <h2>Your LOGO</h2>
            {navMenu.map(({ id, page }) => {
              return (
                <li key={id} id={`li${id}`}>
                  {page}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="login-menu">
          <button className="btn" id="login">
            login
          </button>
          <button className="btn signup">
            sign up
          </button>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
