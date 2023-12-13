import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import SnacksPage from "./components/snacksPage/SnacksPage.jsx";
import ColdDrinks from "./components/coldDrinks/ColdDrinks.jsx";
import HotDrinks from "./components/hotDrinks/HotDrinks.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import NotFound from "./components/notFound/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/hotdrinks" element={<HotDrinks />} />
          <Route path="/colddrinks" element={<ColdDrinks />} />
          <Route path="/snacks" element={<SnacksPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/coffe-moffie-secret-dashboard" element={<Dashboard />}>
          <Route path="snacks" element={<SnacksPage />} />
          <Route path="hotdrinks" element={<HotDrinks />} />
          <Route path="colddrinks" element={<ColdDrinks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
