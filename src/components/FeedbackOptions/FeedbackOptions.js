import React from "react";
import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((el) => {
    return (
      <button onClick={() => onLeaveFeedback(el)} className={s.btn} key={el}>
        {el}
      </button>
    );
  });
  // <>
  //   <button onClick={() => onLeaveFeedback("good")} className={s.btn}>
  //     Good
  //   </button>
  //   <button onClick={() => onLeaveFeedback("neutral")} className={s.btn}>
  //     Neutral
  //   </button>
  //   <button onClick={() => onLeaveFeedback("bad")} className={s.btn}>
  //     Bad
  //   </button>
  // </>
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
