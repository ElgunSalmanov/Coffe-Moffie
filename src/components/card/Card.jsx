import { useState } from "react";
import "../../scss/_reset.scss";
import "./card.scss";
import HotCard from "../hotCard/HotCard.jsx";
import Snacks from "../snacks/Snacks.jsx";
import ColdCard from "../coldCard/ColdCard.jsx";
import { useLocation } from "react-router-dom";

function Card({ hot, snack, cold }) {
  const [status, setStatus] = useState(false);

  const location = useLocation();

  useState(() => {
    setStatus(location.pathname === "/");
  }, []);

  return (
    <div className="all">
      <div className="card">
        <div className="card-info">
          {status && <h1 className="card-info_text">All menu:</h1>}
        </div>
        {hot && (
          <>
            <h3 className="card-info_content">Hot drinks</h3>
            {hot?.map((component) => (
              <HotCard key={component.id} components={component} />
            ))}
          </>
        )}
        {snack && (
          <>
            <h3 className="card-info_content">Snacks</h3>
            {snack?.map((component) => (
              <Snacks key={component.id} components={component} />
            ))}
          </>
        )}
        {cold && (
          <>
            <h3 className="card-info_content">Cold drinks</h3>
            {cold?.map((component) => (
              <ColdCard key={component.id} components={component} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
