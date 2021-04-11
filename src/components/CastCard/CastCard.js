import styles from './castCard.module.css';
import PropTypes from 'prop-types';

import defaultImg from './not_avatar.jpg';

const CastCard = ({ img, name, character }) => {
	const imgUrl = img ? `https://image.tmdb.org/t/p/w500/${img}` : defaultImg;
	return (
		<>
			<img src={imgUrl} alt={name} className={styles.img} />
			<h2 className={styles.name}>{name}</h2>
			<p className={styles.info}>{character}</p>
		</>
	);
};
CastCard.defaultProps = {
	img: defaultImg,
};

CastCard.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	character: PropTypes.string,
};
export default CastCard;
