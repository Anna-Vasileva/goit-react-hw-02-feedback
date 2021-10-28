import React from "react";
import Notification from "../Notification";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total() ? (
    <>
      <h2 className={s.title}>Statistics</h2>
      <p className={s.statistics}>Good: {good}</p>
      <p className={s.statistics}>Neutral: {neutral}</p>
      <p className={s.statistics}>Bad: {bad}</p>
      <p className={s.statistics}>Total: {total()}</p>
      <p className={s.statistics}>Positive feedback: {positivePercentage()}%</p>
    </>
  ) : (
    <Notification message="No feedback given"></Notification>
  );
};

export default Statistics;
