import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { useReducer } from 'react';

const initialState = { good: 0, neutral: 0, bad: 0 };

function calculation(state, action) {
  switch (action.type) {
    case 'icrement':
      return { ...state, [action.option]: state[action.option] + 1 };
    default:
      return state;
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(calculation, initialState);

  const handleFeedback = option => {
    dispatch({ type: 'icrement', option });
  };

  const totalFeedback = Object.values(state).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedbackProcentage =
    totalFeedback === 0 ? 0 : Math.round((state.good / totalFeedback) * 100);

  return (
    <div>
      <Section title="Leave feedback">
        <FeedbackOptions onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistcs">
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={totalFeedback}
          positiveProcentage={positiveFeedbackProcentage}
        />
      </Section>
    </div>
  );
};

export default App;
