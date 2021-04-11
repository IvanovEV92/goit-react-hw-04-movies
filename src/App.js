import Loader from 'react-loader-spinner';
import { Suspense, lazy } from 'react';
import routes from './routes';
import AppBar from './components/AppBar';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() =>
	import('./views/Home' /* webpackChunkName: "home-view" */),
);
const Movies = lazy(() =>
	import('./views/Movies' /* webpackChunkName: "movies-view" */),
);
const MovieDetails = lazy(() =>
	import('./views/MovieDetails' /* webpackChunkName: "movieDetails-view" */),
);
const NotFound = lazy(() =>
	import('./views/NotFound' /* webpackChunkName: "notFound-view" */),
);

const App = () => (
	<>
		<AppBar />
		<Suspense
			fallback={
				<Loader type="ThreeDots" color="#ff8ba7" height={80} width={80} />
			}
		>
			<Switch>
				<Route exact path={routes.home} component={Home} />
				<Route path={routes.movieDetails} component={MovieDetails} />
				<Route path={routes.movies} component={Movies} />
				<Route component={NotFound} />
			</Switch>
		</Suspense>
	</>
);

export default App;
