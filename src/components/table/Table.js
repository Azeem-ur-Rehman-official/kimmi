import React from 'react';
import './Table.css';
const TableComponent = ({ children }) => {

  return (
    <div className="row d-flex justify-content-center mt-3 ms-0 me-0">
      <div className="col-12 p-0">
        <table className="table">
          {children}
        </table>
      </div>
    </div>
  )

}

export default TableComponent;