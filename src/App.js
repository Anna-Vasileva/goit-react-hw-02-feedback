import React, { Component } from "react";
import Feedback from "./components/Feedback";

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

  render() {
    const grade = this.state;
    const addGrade = this.addGrade;
    const countTotalFeedback = () => {
      return grade.bad + grade.good + grade.neutral;
    };
    return (
      <Feedback grade={grade} addGrade={addGrade} total={countTotalFeedback} />
    );
  }
}
export default App;
