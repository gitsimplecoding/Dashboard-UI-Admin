import React from "react";

const Authlayout = ({ children }) => {
  return (
    <div className="auth-multi-layout">
      <div className="auth-box">{children}</div>
    </div>
  );
};

export default Authlayout;
