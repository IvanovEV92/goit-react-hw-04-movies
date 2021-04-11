import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
const Navigation = () => {
	return (
		<ul className={styles.navigation}>
			<li className={styles.navigation__button}>
				<NavLink
					exact
					className={styles.navigation__link}
					activeClassName={styles.btnActive}
					to="/"
				>
					Home
				</NavLink>
			</li>
			<li className={styles.navigation__button}>
				<NavLink
					exact
					className={styles.navigation__link}
					activeClassName={styles.btnActive}
					to="/movies"
				>
					Movies
				</NavLink>
			</li>
		</ul>
	);
};

export default Navigation;
