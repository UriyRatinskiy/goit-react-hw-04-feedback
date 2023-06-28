import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const Feedback = () => {
  // const [feedbacks, setFeedbacks] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const handleCountFeedbacks = statusFeedback => {
  //   countTotalFeedback(prevState => ({
  //     ...prevState,
  //     [statusFeedback]: prevState[statusFeedback] + 1,
  //   }));
  // };

  // const countTotalFeedback = () => {
  //   const values = Object.values(good + neutral + bad);
  //   let total = 0;
  //   for (const value of values) {
  //     total += value;
  //   }
  //   return total;
  // };
  const handleCountFeedbacks = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return undefined;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const positive = Math.round((good / total) * 100);

    return positive ? positive : 0;
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave your feedback for us">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleCountFeedbacks}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        )}
      </Section>
    </>
  );
};

export default Feedback;

// const Feedback = () => {
//   //   const [feedbacks, setFeedbacks] = {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   // good: 0,
//   // neutral: 0,
//   // bad: 0,
//   const handleCountFeedbacks = e => {
//     // e.preventDefault();
//     const { name } = e.target;

//     switch (name) {
//       case 'good':
//         setGood(state => state + 1);
//         break;
//       case 'neutral':
//         setNeutral(state => state + 1);
//         break;
//       case 'bad':
//         setBad(state => state + 1);
//         break;
//       default:
//         return undefined;
//     }
//   };

//   // statusFeedback => {
//   //   setFeedbacks(prevState => ({
//   //     ...prevState,
//   //     [statusFeedback]: prevState[statusFeedback] + 1,
//   //   }));
//   // };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//     // const values = Object.values(feedbacks);
//     // let total = 0;
//     // for (const value of values) {
//     //   total += value;
//     // }
//     // return total;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const total = good + neutral + bad;
//     const positive = Math.round((good / total) * 100);
//     return positive ? positive : 0;
//     // const positiveFeedbackPercentage = Math.round(
//     //   (feedbacks.good * 100) / countTotalFeedback()
//     // );
//     // return feedbacks.good ? positiveFeedbackPercentage : 0;
//   };
//   // const optionsForFeedback = Object.keys(feedbacks);
//   const total = countTotalFeedback();
//   const positive = countPositiveFeedbackPercentage();

//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           //   options={optionsForFeedback}

//           // />
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={handleCountFeedbacks}
//           // onLeaveFeedback={onButtonClick}
//         ></FeedbackOptions>
//       </Section>

//       <Section title="Statistics">
//         {total > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positive}
//           ></Statistics>
//         ) : (
//           <Notification message="There is no feedback"></Notification>
//         )}
//       </Section>
//     </>
//   );
// };

// export default Feedback;
