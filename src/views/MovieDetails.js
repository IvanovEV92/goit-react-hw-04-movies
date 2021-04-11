import React, { Component } from 'react';
import FilmCard from '../components/FilmCard';
import { fetchFilmDetails } from '../service/film-api';

class MovieDetails extends Component {
	state = {
		title: null,
		poster_path: null,
		overview: null,
		genres: null,
		release_date: null,
		vote_average: null,
	};
	componentDidMount(prevProps, prevState) {
		const movieId = this.props.match.params.moviesId;
		this.fetchFilmDetails(movieId);
	}

	fetchFilmDetails = id => {
		fetchFilmDetails(id)
			.then(data => {
				this.setState({ ...data });
			})
			.catch(error => this.setState({ error }));
	};

	render() {
		const {
			title,
			poster_path,
			overview,
			release_date,
			vote_average,
		} = this.state;

		return (
			<>
				<FilmCard
					title={title}
					img={poster_path}
					description={overview}
					date={release_date}
					vote_average={vote_average}
				/>
			</>
		);
	}
}

export default MovieDetails;
