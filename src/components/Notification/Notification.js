import React from "react";
import s from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <>
      <h3 className={s.message}>{message}</h3>
    </>
  );
};

export default Notification;
