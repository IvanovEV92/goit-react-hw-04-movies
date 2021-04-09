const FilmListItem = ({ title, img, date }) => {
	const imgUrl = img ? `https://image.tmdb.org/t/p/w500/${img}` : null;
	return (
		<>
			<img src={imgUrl} alt={title} width="200" />
			<h2>{title}</h2>
			<p>{date}</p>
		</>
	);
};

export default FilmListItem;
