import { PropTypes } from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <FeedbackButton
            type="button"
            key={option}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </FeedbackButton>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
