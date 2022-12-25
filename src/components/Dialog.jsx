import React from "react";
import InboxCleanUpVector from "../assets/img/vector/inbox-cleanup-amico.svg";

const Dialog = ({ message, name, onDialog }) => {
  return (
    <div className={`dialog ${onDialog ? "show" : "hide"}`}>
      <div className="dialog-content">
        <div className="dialog-header">
          <h2 className="dialog-title">Delete Item</h2>
          <button className="btn-dialog-close" onClick={() => onDialog(false)}>
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="dialog-body">
          <div className="dialog-img-body">
            <img src={InboxCleanUpVector} alt="" />
          </div>
          <p className="dialog-message" style={{ fontSize: "14px" }}>
            {message}
          </p>
          <p className="dialog-message">{name}</p>
        </div>
        <div className="dialog-footer">
          <button
            className="btn-dialog btn-dialog-cancel"
            onClick={() => onDialog(false)}
          >
            Cancel
          </button>
          <button
            className="btn-dialog btn-dialog-delete"
            onClick={() => onDialog(true)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
