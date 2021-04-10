import FilmListItem from '../FilmListItem';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmList = ({ filmList, location }) => {
	return (
		<ul>
			{filmList.map(({ id, poster_path, title, name, release_date }) => {
				return (
					<li key={id}>
						<Link
							to={{
								pathname: `/movies/${id}`,
								state: { from: location },
							}}
						>
							<FilmListItem
								img={poster_path}
								title={title ? title : name}
								date={release_date}
							/>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

FilmList.propTypes = {
	filmList: PropTypes.array,
	location: PropTypes.object.isRequired,
};
export default withRouter(FilmList);
