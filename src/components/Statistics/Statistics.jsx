import PropTypes from 'prop-types';

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveProcentage: PropTypes.number.isRequired,
};

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveProcentage,
}) {
  if (total === 0) {
    return <p>There is no feedback</p>;
  }
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveProcentage}</p>
    </div>
  );
}
