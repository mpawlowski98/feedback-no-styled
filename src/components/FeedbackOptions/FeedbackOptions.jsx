import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default function FeedbackOptions({ onLeaveFeedback }) {
  const handleFeedback = useCallback(
    option => {
      onLeaveFeedback(option);
    },
    [onLeaveFeedback]
  );

  return (
    <div>
      <button className={css.buttons} onClick={() => handleFeedback('good')}>
        Good
      </button>
      <button className={css.buttons} onClick={() => handleFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.buttons} onClick={() => handleFeedback('bad')}>
        Bad
      </button>
    </div>
  );
}
