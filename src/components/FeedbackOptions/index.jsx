const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const transformFirstLetter = (option) => {
        return option.charAt(0).toUpperCase() + option.slice(1);
    };

    return (
        <div>
            {options.map(option => (
                <button
                    key={option}
                    onClick={() => onLeaveFeedback(option)}>
                    {transformFirstLetter(option)}
                </button>
            ))}
        </div>
    )
}

export default FeedbackOptions;


/**
 * import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;

 */



// const transformFirstLetter = (option) => {
//         return option.charAt(0).toUpperCase() + option.slice(1);
//     };
//     return (
//         <button onClick={() => {onLeaveFeedback(option)}}>{transformFirstLetter(option)}</button>
//   )