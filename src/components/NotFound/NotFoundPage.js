import PropTypes from 'prop-types';
import styles from './notFound.module.css';
const NotFoundPage = () => {
	return <main className={styles.notFound}></main>;
};

NotFoundPage.propTypes = {
	img: PropTypes.string,
};
export default NotFoundPage;
