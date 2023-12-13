import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import DashboardSnacks from "./DashboardSnacks.jsx";
import DashboardColdDrinks from "./DashboardColddrinks.jsx";
import DashboardHotDrinks from "./DashboardHotdrinks.jsx";
import "./Dashboard.css";

const Dashboard = () => {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case "/coffe-moffie-secret-dashboard/snacks":
        return <DashboardSnacks />;
      case "/coffe-moffie-secret-dashboard/hotdrinks":
        return <DashboardHotDrinks />;
      case "/coffe-moffie-secret-dashboard/colddrinks":
        return <DashboardColdDrinks />;
    }
  };

  return (
    <div className="dashboard__nav">
      <nav>
        <ul>
          <li>
            <NavLink to="/coffe-moffie-secret-dashboard/snacks">Snacks</NavLink>
          </li>
          <li>
            <NavLink to="/coffe-moffie-secret-dashboard/hotdrinks">
              Hot Drinks
            </NavLink>
          </li>
          <li>
            <NavLink to="/coffe-moffie-secret-dashboard/colddrinks">
              Cold Drinks
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
