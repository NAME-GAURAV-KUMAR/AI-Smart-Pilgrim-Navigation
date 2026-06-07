import {
  FaHome,
  FaCar,
  FaRoute,
  FaRobot
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">
        🚦 MahaMove AI
      </div>

      <div className="menu">

        <button>
          <FaHome /> Dashboard
        </button>

        <button>
          <FaCar /> Parking
        </button>

        <button>
          <FaRoute /> Routes
        </button>

        <button>
          <FaRobot /> AI Assistant
        </button>

      </div>

    </div>
  );
}

export default Navbar;