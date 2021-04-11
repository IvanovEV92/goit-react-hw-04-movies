import { NavLink, Route, withRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from 'react-loader-spinner';
import styles from './additionalInfo.module.css';
import PropTypes from 'prop-types';

const Cast = lazy(() =>
	import('../Cast/Cast.js' /* webpackChunkName: "cast-view" */),
);
const Reviews = lazy(() =>
	import('../Reviews/Reviews.js' /* webpackChunkName: "reviews-view" */),
);
const AdditionalInfo = ({ match }) => {
	return (
		<section className={styles.additional}>
			<h4 className={styles.additional__title}>Additional information</h4>
			<ul className={styles.additional__list}>
				<li className={styles.additional__item}>
					<NavLink
						exact
						className={styles.additional__btn}
						to={`${match.url}/cast`}
					>
						Cast
					</NavLink>
				</li>
				<li className={styles.additional__item}>
					<NavLink
						exact
						className={styles.additional__btn}
						to={`${match.url}/reviews`}
					>
						Reviews
					</NavLink>
				</li>
			</ul>
			<Suspense
				fallback={
					<Loader type="ThreeDots" color="#ff8ba7" height={80} width={80} />
				}
			>
				<Route exact path={`${match.path}/cast`} component={Cast} />
				<Route exact path={`${match.path}/reviews`} component={Reviews} />
			</Suspense>
		</section>
	);
};

AdditionalInfo.propTypes = {
	match: PropTypes.object.isRequired,
};

export default withRouter(AdditionalInfo);
