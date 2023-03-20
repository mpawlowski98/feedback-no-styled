import css from './FeedBeck.module.css';

const { Component } = require('react');

class FeedBeck extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    goodValue: this.props.good,
    neutralValue: this.props.neutral,
    badValue: this.props.bad,
  };

  addGood = event => {
    this.setState((state, props) => {
      return {
        goodValue: state.goodValue + props.step,
      };
    });
  };
  addNeutral = event => {
    this.setState((state, props) => {
      return {
        neutralValue: state.neutralValue + props.step,
      };
    });
  };
  addBad = event => {
    this.setState((state, props) => {
      return {
        badValue: state.badValue + props.step,
      };
    });
  };
  //   countTotalFeedback = event => {
  //     this.setState(state => {
  //       return {
  //         totalValue: state.badValue + state.neutralValue + state.goodValue,
  //       };
  //     });
  //   };

  render() {
    const { good, neutral, bad } = this.props;
    // const totalValue = goodValue + neutralValue + badValue;
    const { goodValue, neutralValue, badValue } = this.state;

    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={() => this.addGood()}>
          Good
        </button>
        <button type="button" onClick={() => this.addNeutral()}>
          Neutral
        </button>
        <button type="button" onClick={() => this.addBad()}>
          Bad
        </button>
        <h2>Statistic</h2>
        <p>Good:{this.state.goodValue}</p>
        <p>Neutral:{this.state.neutralValue}</p>
        <p>Bad:{this.state.badValue}</p>
        <p>Total:{}</p>
        <p>Positive FeedBeck:</p>
      </>
    );
  }
}

export default FeedBeck;
