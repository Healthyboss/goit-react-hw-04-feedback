import PropTypes from "prop-types";
import css from "./Notification.module.css"

const Notification = ({message}) => {
    return(
        <div className={css.message}>
         <p className={css.notification}>{message}</p>
        </div>
    )
}

Notification.propTypes ={
    message: PropTypes.string,
}
export default Notification;