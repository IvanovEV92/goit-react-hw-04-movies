import { Link } from 'react-router-dom';

const AppBar = () => {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/movies">Movies</Link>
			</li>
		</ul>
	);
};

export default AppBar;
