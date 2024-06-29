import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   return( 
   <div className={css.statistics}>
        <p className={css.statisticsList}>Good : {good}</p>
        <p className={css.statisticsList}>Neutral : {neutral}</p>
        <p className={css.statisticsList}>Bad : {bad}</p>
        <p className={css.statisticsList}>Total : {total}</p>
        <p className={css.statisticsList}>Positive Feedback : {positivePercentage}%</p>
    </div>
   );
};

Statistics.propTypes = {
   good:PropTypes.number,
   neutral:PropTypes.number,
   bad:PropTypes.number,
   total:PropTypes.number,
   positivePercentage:PropTypes.number,
}
export default Statistics;