import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import AdditionalInfo from '../../components/AdditionalInfo';
import defaultImg from './image_not_found.png';
import styles from './filmCard.module.css';
const FilmCard = ({
	title,
	img,
	description,
	date,
	vote_average,
	history,
	location,
}) => {
	const imgUrl = img ? `https://image.tmdb.org/t/p/w500/${img}` : defaultImg;
	const dateFilm = `${date}`.slice(0, 4);
	const rating = vote_average * 10;
	function handleClick() {
		history.push(location?.state?.from || routes.home);
	}
	return (
		<main>
			<div className="backBtn" onClick={handleClick}>
				<span className="line tLine"></span>
				<span className="line mLine"></span>
				<span className="label">Go back</span>
				<span className="line bLine"></span>
			</div>
			<div className={styles.filmCard}>
				<img src={imgUrl} alt={title} className={styles.filmCard__img} />
				<div>
					<h1>
						{title} ({dateFilm})
					</h1>
					<div className={styles.filmCard__rating}>Rating: {rating}%</div>
					<p className={styles.filmCard__description}>
						<span className={styles.filmCard__label}>Description:</span>{' '}
						{description}
					</p>
				</div>
			</div>
			<AdditionalInfo />
		</main>
	);
};
FilmCard.defaultProps = {
	img: defaultImg,
	title: '',
	date: 'XXXX-XX-XX',
	vote_average: 0,
	overview: '',
	genres: [],
};

FilmCard.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	date: PropTypes.string,
	vote_average: PropTypes.number,
	description: PropTypes.string,
	genres: PropTypes.array,
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};
export default withRouter(FilmCard);
