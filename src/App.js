import './App.css';
import Home from './views/Home';
import Movies from './views/Movies';
import MovieDetails from './views/MovieDetails';
import NotFound from './views/NotFound';
import { Route, Switch, Link } from 'react-router-dom';

const App = () => (
	<>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/movies">Movies</Link>
			</li>
		</ul>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/movies/:moviesId" component={MovieDetails} />
			<Route path="/movies" component={Movies} />
			<Route component={NotFound} />
		</Switch>
	</>
);

export default App;
