import defaultImg from './image_not_found.png';
import PropTypes from 'prop-types';
import styles from './filmListItem.module.css';
const FilmListItem = ({ title, img, date }) => {
	const imgUrl = img ? `https://image.tmdb.org/t/p/w500/${img}` : defaultImg;
	return (
		<>
			<img src={imgUrl} alt={title} className={styles.img} />
			<h3 className={styles.name}>{title}</h3>
			<p className={styles.info}>{date}</p>
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
