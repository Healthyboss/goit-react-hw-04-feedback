import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({options, customerFeedback}) => {
return (
<div className={css.feedbackSection}>
    {options.map(option => (
        <button className={css.feedbackButton} key ={option} onClick={() => customerFeedback(option)}>
            {option}
        </button>
    ))}
    
</div>)
}

FeedbackOptions.propTypes ={
    options: PropTypes.array,
    customerFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions