import styles from "./PageTitle.module.scss"
import PropTypes from 'prop-types';
export const PageTitle = ({ text }) => {
    return (
     (<h1 className={styles.title}>{text}</h1>)
    )
}

PageTitle.propTypes = {
    text: PropTypes.string.isRequired
}