import FilmListItem from '../FilmListItem';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './filmList.module.css';
const FilmList = ({ title, filmList, location }) => {
	return (
		<>
			{title && <h1 className={styles.filmList__title}>{title}</h1>}

			<ul className={styles.filmList__list}>
				{filmList.map(({ id, poster_path, title, name, release_date }) => {
					return (
						<li key={id} className={styles.filmList__item}>
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
		</>
	);
};

FilmList.propTypes = {
	title: PropTypes.string,
	filmList: PropTypes.array,
	location: PropTypes.object.isRequired,
};
export default withRouter(FilmList);
