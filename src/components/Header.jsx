import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="admin-header">
      <Dropdown
        icon={"bx bx-bell"}
        menuClass="dropdown-menu-notifications"
        menu={
          <>
            <li className="dropdown-list">
              <Link
                to="/admin/dashboard"
                className="dropdown-link dropdown-link-notification"
              >
                <div className="notification-icon">
                  <i className="bx bxs-megaphone"></i>
                </div>
                <div className="notification-details">
                  <h1 className="notification-title">Notification Title</h1>
                  <p className="notification-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat illo dolores, quo possimus incidunt dolor.
                  </p>
                </div>
              </Link>
            </li>

            <li className="dropdown-list">
              <Link
                to="/admin/dashboard"
                className="dropdown-link dropdown-link-notification"
              >
                <div className="notification-icon">
                  <i className="bx bxs-megaphone"></i>
                </div>
                <div className="notification-details">
                  <h1 className="notification-title">
                    Notification Title Title Title Title Title
                  </h1>
                  <p className="notification-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat illo dolores, quo possimus incidunt dolor.
                  </p>
                </div>
              </Link>
            </li>
          </>
        }
      />

      <Dropdown
        avatar={"http://placeimg.com/100/100/people"}
        menu={
          <>
            <li className="dropdown-list">
              <Link to="/admin/dashboard" className="dropdown-link">
                <i className="bx bx-user dropdown-link-icon"></i>
                Profile
              </Link>
            </li>
            <li className="dropdown-list">
              <Link to="/admin/dashboard" className="dropdown-link">
                <i className="bx bx-power-off dropdown-link-icon"></i>
                Logout
              </Link>
            </li>
          </>
        }
      />
    </div>
  );
};

export default Header;
