import React from "react";

const Feedback = ({ grade, addGrade, total }) => {
  const { good, neutral, bad } = grade;
  return (
    <>
      <h1>Please leave feedback</h1>
      <button onClick={() => addGrade("good")}>Good</button>
      <button onClick={() => addGrade("neutral")}>Neutral</button>
      <button onClick={() => addGrade("bad")}>Bad</button>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Positive feedback:</p>
    </>
  );
};
export default Feedback;
