import React, { useRef } from "react";

const DropdownAction = (MenuRef, ToggleRef) => {
  document.addEventListener("mousedown", (e) => {
    if (ToggleRef.current && ToggleRef.current.contains(e.target)) {
      MenuRef.current.classList.toggle("show");
    } else {
      if (MenuRef.current && !MenuRef.current.contains(e.target)) {
        MenuRef.current.classList.remove("show");
      }
    }
  });
};
const Dropdown = (props) => {
  const toggleRef = useRef();
  const menuRef = useRef();
  DropdownAction(menuRef, toggleRef);
  return (
    <div className="dropdown">
      <button
        className={`dropdown-toggle ${
          props.icon ? "toggle-icon" : "toggle-btn"
        } `}
        ref={toggleRef}
      >
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className="dropdown-toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.avatar ? (
          <div className="dropdown-toggle-avatar">
            <img
              src={props.avatar}
              alt={props.avatar}
              className="dropdown-toggle-avatar-img"
            />
          </div>
        ) : (
          ""
        )}
      </button>
      <div
        className={`dropdown-menu ${props.menuClass ? props.menuClass : ""}`}
        ref={menuRef}
      >
        {props.menu}
      </div>
    </div>
  );
};

export default Dropdown;
