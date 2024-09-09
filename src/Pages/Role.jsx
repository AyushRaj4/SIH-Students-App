import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { roles } from "../Lists/lists";
import Navbar from "../Components/Navbar";

const Role = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = location.state || {};
  const handleRoleClick = (role) => {
    const data = { role: role };
    navigate(`/${type}`, { state: data });
  };

  useEffect(() => {
    document.body.classList.remove("body2");
  }, []);

  return (
    <>
      <Navbar />
      <main className="roles">
        <article className="choice">
          {roles.map(({ id, role, image }) => {
            return (
              <div
                key={id}
                className="role"
                onClick={() => handleRoleClick(role)}
              >
                <img src={image} alt={role} />
                <span>{role}</span>
              </div>
            );
          })}
        </article>
      </main>
    </>
  );
};

export default Role;
