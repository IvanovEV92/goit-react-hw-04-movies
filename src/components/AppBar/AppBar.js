import Navigation from '../Navigation';
import styles from './appBar.module.css';
const AppBar = () => {
	return (
		<header className={styles.appBar}>
			<Navigation />
		</header>
	);
};
export default AppBar;
