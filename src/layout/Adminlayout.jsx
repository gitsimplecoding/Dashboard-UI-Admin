import React from "react";
import Sidebar from "../components/Sidebar";
import { Route } from "react-router-dom";
import Header from "../components/Header";

const Adminlayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Header />
      <Route render={(props) => <Sidebar {...props} />} />
      <div className="admin-content">
        <div className="admin-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Adminlayout;
