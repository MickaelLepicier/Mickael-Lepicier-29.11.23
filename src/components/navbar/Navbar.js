import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <h2>Weather Task</h2>
      <div className="buttons">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/favorites")}>Favorites</button>
      </div>
    </div>
  );
};

export default Navbar;
