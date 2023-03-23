import React from 'react';
import './Modal.css';
import { Modal } from "react-bootstrap";

export default function ({ show, size, icon, title, handleClose, children, className, dialogAs, backdropClass }) {
  return (
    <Modal
      size={size}
      show={show}
      onHide={handleClose}
      backdrop="static"
      backdropClassName={backdropClass}
      className={className}
      dialogAs={dialogAs}
    >
      <Modal.Header closeButton >
        <Modal.Title className="d-flex">
          <img src={icon} alt="" />
          <h5 className="title fontsize-15">{title}</h5>
        </Modal.Title>
      </Modal.Header>
      {children}
    </Modal>
  )
}