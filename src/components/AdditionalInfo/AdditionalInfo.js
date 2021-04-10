import { NavLink, Route, withRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from 'react-loader-spinner';

import PropTypes from 'prop-types';

const Cast = lazy(() =>
	import('../Cast/Cast.js' /* webpackChunkName: "cast-view" */),
);
const Reviews = lazy(() =>
	import('../Reviews/Reviews.js' /* webpackChunkName: "reviews-view" */),
);
const AdditionalInfo = ({ match }) => {
	return (
		<>
			<div>
				<h4>Additional information</h4>
				<ul>
					<li>
						<NavLink to={`${match.url}/cast`}>Cast</NavLink>
					</li>
					<li>
						<NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
					</li>
				</ul>
			</div>
			<Suspense
				fallback={
					<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
				}
			>
				<Route exact path={`${match.path}/cast`} component={Cast} />
				<Route exact path={`${match.path}/reviews`} component={Reviews} />
			</Suspense>
		</>
	);
};

AdditionalInfo.propTypes = {
	match: PropTypes.object.isRequired,
};

export default withRouter(AdditionalInfo);
