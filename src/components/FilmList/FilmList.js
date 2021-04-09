import FilmListItem from '../FilmListItem';
import { Link } from 'react-router-dom';

const FilmList = ({ filmList }) => {
	console.log(filmList);
	return (
		<ul>
			{filmList.map(({ id, poster_path, title, release_date }) => {
				return (
					<li key={id}>
						<Link to={`/movies/${id}`}>
							<FilmListItem img={poster_path} title={title} date={release_date} />
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default FilmList;
