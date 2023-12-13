import { NavLink } from "react-router-dom";
import "../../scss/_reset.scss";
import "./information.scss";

function Information() {
  return (
    <div className="information">
      <div className="venue">
        <h3 className="venue-content">Venue information:</h3>
        <div className="venue-container">
          <div className="venue-clock">
            <img
              className="venue-clock_image"
              src="src/assets/img/clock.svg"
              alt="clock"
            />
            <div className="venue-clock_container">
              <p className="venue-clock_content">Working hours:</p>
              <p className="venue-clock_hours">09:00 - 00:00</p>
            </div>
          </div>
          <div className="venue-map">
            <img
              className="venue-map_image"
              src="src/assets/img/map-pin.svg"
              alt="map"
            />
            <div className="venue-map_container">
              <p className="venue-map_content">Address:</p>
              <p className="venue-map_address">9 Islam Safarli Street</p>
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <h3 className="menu-content">Menu:</h3>
        <div className="menu-container">
          <NavLink
            to="/hotdrinks"
            className={({ isActive }) =>
              isActive ? "menu-hot design active" : "menu-hot design"
            }
          >
            Hot drinks
          </NavLink>
          <NavLink
            to="/snacks"
            className={({ isActive }) =>
              isActive ? "menu-snacks design active" : "menu-snacks design"
            }
          >
            Snacks
          </NavLink>
          <NavLink
            to="/colddrinks"
            className={({ isActive }) =>
              isActive ? "menu-cold design active" : "menu-cold design"
            }
          >
            Cold drinks
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Information;
