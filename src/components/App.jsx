import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";

class App extends Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = option => {
    this.setState((prev) => ({
      [option]: prev[option] + 1,
    }))
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }
  
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options = {options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} positivePercentage={this.positivePercentage} />
        </Section>
        
      </>
    )
  }
}

export default App;

/**
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

 */


{/* <Section title="Please leave feedback">
          {options.map((name, index) => (
            <FeedbackOptions
              key={index}
              option={name}
              onLeaveFeedback={this.onLeaveFeedback} />
          ))}  
        </Section> */}