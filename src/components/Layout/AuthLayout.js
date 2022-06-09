import React from "react";

export default function AuthLayout({ children, type }) {
  return (
    <div className="row">
      <div className="col-md-3">{type}</div>
      <div className="col-md-9">{children}</div>
    </div>
  );
}
