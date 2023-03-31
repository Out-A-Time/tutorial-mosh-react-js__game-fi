import React, { useState } from "react";
import handleClose from "../App";

interface Props {
  onClose: () => void;
}

const Notification = ({ onClose }: Props) => {
  const [notification, setNotification] = useState(false);

  const handleCloseNotification = () => {
    setNotification(false);
    handleClose();
    console.log("close notification");
  };
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Notification;
