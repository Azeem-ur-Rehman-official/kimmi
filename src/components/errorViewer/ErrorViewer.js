import React from "react";
import './ErrorViewer.css'

const ErrorViewer = ({ message, className }) => {
  return (
    <div className={`d-flex warning-msg mt-2 error ${className}`} id="invalid_email">

      <p className={`error mb-0 ${className}`}>{message}</p>
    </div>
  );
};

export default ErrorViewer;