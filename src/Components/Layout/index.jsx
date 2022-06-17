import React from "react";
import Header from "../Header";
import "./styles.css";

export const Layout = ({ children }) => (
  <div className="layout-content">
    <Header />
    {children}
  </div>
);
