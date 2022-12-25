import React from "react";
import SCLOGO from "../assets/img/sc-logo.png";
import sidebar_routes from "../assets/json/sidebar_routes.json";
import { Link } from "react-router-dom";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
    <div className={`admin-sidebar-item ${active}`}>
      <div className="admin-sidebar-icon">
        <i className={props.icon}></i>
      </div>
      <span className="admin-sidebar-name">{props.name}</span>
    </div>
  );
};
const Sidebar = (props) => {
  const activeItem = sidebar_routes.findIndex(
    (item) => item.route === props.location.pathname
  );
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-header">
        <div className="admin-sidebar-logo">
          <img src={SCLOGO} alt="" className="img-logo" />
          <h1 className="logo-name">Simple Coding</h1>
        </div>
      </div>
      <div className="admin-sidebar-menu">
        {sidebar_routes.map((item, idx) => (
          <Link className="admin-sidebar-link" key={idx} to={item.route}>
            <SidebarItem
              name={item.display_name}
              icon={item.icon}
              active={idx === activeItem}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
