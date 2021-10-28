import React, { Component } from "react";
// import Feedback from "./components/Feedback";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGrade = (nameGrade) => {
    this.setState((prevState) => {
      return { [nameGrade]: prevState[nameGrade] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total
      ? Math.round((this.state.good * 100) / this.countTotalFeedback())
      : 0;
  };
  render() {
    // const grade = this.state;
    const { good, neutral, bad } = this.state;
    // const addGrade = this.addGrade;
    // const countTotalFeedback = () => {
    //   return this.state.bad + this.state.good + this.state.neutral;
    // };
    // const countPositiveFeedbackPercentage = () => {
    //   return this.state.good * 100 / this.countTotalFeedback();
    // };
    return (
      // <Feedback grade={grade} addGrade={addGrade} total={countTotalFeedback} />
      <>
        {/* <h1>Please leave feedback</h1> */}
        {/* <button onClick={() => addGrade("good")}>Good</button>
        <button onClick={() => addGrade("neutral")}>Neutral</button>
        <button onClick={() => addGrade("bad")}>Bad</button> */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addGrade}
          />
        </Section>
        {/* <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p> */}
        {/* <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p> */}
        <Section title="">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
export default App;
