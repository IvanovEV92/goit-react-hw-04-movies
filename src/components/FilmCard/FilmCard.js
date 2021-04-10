import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import AdditionalInfo from '../../components/AdditionalInfo';
import defaultImg from './image_not_found.png';

const FilmCard = ({
	title,
	img,
	description,
	genres,
	date,
	vote_average,
	history,
	location,
}) => {
	const imgUrl = img ? `https://image.tmdb.org/t/p/w500/${img}` : defaultImg;
	const dateFilm = `${date}`.slice(0, 4);
	function handleClick() {
		history.push(location?.state?.from || '/');
	}
	return (
		<main>
			<button type="button" onClick={handleClick}>
				Go back
			</button>
			<img src={imgUrl} alt={title} width="200" />
			<div>{vote_average}</div>
			<h1>
				{title} ({dateFilm})
			</h1>
			<p>{description}</p>
			<span>{date}</span>
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
