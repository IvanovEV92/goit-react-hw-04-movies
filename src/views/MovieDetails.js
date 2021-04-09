import React, { Component } from 'react';
import FilmCard from '../components/FilmCard';
import { fetchFilmDetails } from '../service/film-api';

class MovieDetails extends Component {
	state = {
		film: [],
	};
	componentDidMount(prevProps, prevState) {
		const movieId = this.props.match.params.moviesId;
		console.log(movieId);
		this.fetchFilmDetails(movieId);
	}

	fetchFilmDetails = id => {
		fetchFilmDetails(id)
			.then(data => this.setState({ film: data }))
			.catch(error => this.setState({ error }));
	};

	render() {
		console.log(this.state.film);
		const {
			title,
			poster_path,
			overview,
			genres,
			release_date,
			vote_average,
		} = this.state.film;
		return (
			<>
				<FilmCard
					title={title}
					img={poster_path}
					description={overview}
					date={release_date}
					genres={genres}
					vote_average={vote_average}
				/>
			</>
		);
	}
}

export default MovieDetails;
