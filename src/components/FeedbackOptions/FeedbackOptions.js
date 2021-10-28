import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //   const { good, neutral, bad } = options;
  return (
    <>
      <button onClick={() => onLeaveFeedback("good")} className={s.btn}>
        Good
      </button>
      <button onClick={() => onLeaveFeedback("neutral")} className={s.btn}>
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback("bad")} className={s.btn}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
