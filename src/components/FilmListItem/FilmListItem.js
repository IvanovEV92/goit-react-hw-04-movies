import defaultImg from './image_not_found.png';
import PropTypes from 'prop-types';

const FilmListItem = ({ title, img, date }) => {
	const imgUrl = img ? `https://image.tmdb.org/t/p/w500/${img}` : defaultImg;
	return (
		<>
			<img src={imgUrl} alt={title} width="200" />
			<h2>{title}</h2>
			<p>{date}</p>
		</>
	);
};
FilmListItem.defaultProps = {
	img: defaultImg,
	title: 'noname',
	date: 'XXXX-XX-XX',
};

FilmListItem.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	date: PropTypes.string,
};
export default FilmListItem;
