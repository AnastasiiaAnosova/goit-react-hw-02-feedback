import { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (option) => {
    console.log("before >> ", this.state);
    this.setState(
      (prev) => ({
      [option]: prev[option] + 1,
      }),
      () => {
      console.log("after >> ", this.state);
    });
    // console.log("after >> ", this.state); // тут ми ще не побачимо змін.
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state; 
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total ? Math.round((good / total) * 100) : 0;
  }
  
  render() {
    const { good, neutral, bad } = this.state; 
    return (
      <>
        <div>
          <h3>Please leave feedback</h3>
          <button onClick={() => this.onLeaveFeedback('good')}>Good</button>
          <button onClick={() => this.onLeaveFeedback('neutral')}>Neutral</button>
          <button onClick={() => this.onLeaveFeedback('bad')}>Bad</button>
        </div>
        <div>
          <h3>Statistics</h3>
          <p>Good { good }</p>
          <p>Neutral { neutral }</p>
          <p>Bad {bad}</p>
          <p>Total {this.countTotalFeedback()}</p>
          <p>Positive feedback {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </>
    );
  }
}

export default App;