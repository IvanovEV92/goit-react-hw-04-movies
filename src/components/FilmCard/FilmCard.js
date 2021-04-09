const FilmCard = ({ title, img, description, genres, date, vote_average }) => {
	return (
		<main>
			<img src={img} alt={title} />
			<h1>{title}</h1>
		</main>
	);
};

export default FilmCard;
