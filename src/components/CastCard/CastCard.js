const CastCard = ({ img, name, character }) => {
	const imgUrl = img ? `https://image.tmdb.org/t/p/w500/${img}` : null;
	return (
		<>
			<img src={imgUrl} alt={name} width="100" />
			<h2>{name}</h2>
			<p>{character}</p>
		</>
	);
};

export default CastCard;
