import React from "react";
import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

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
FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
