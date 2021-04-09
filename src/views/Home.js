import React, { Component } from 'react';
import FilmList from '../components/FilmList';
import { fetchFilmList } from '../service/film-api';

class Home extends Component {
	state = {
		films: [],
	};

	componentDidMount(prevProps, prevState) {
		this.filmApi();
	}

	filmApi = () => {
		fetchFilmList()
			.then((data) => {
				this.setState({ films: data });
			})
			.catch((error) => this.setState({ error }))
			.finally(() => this.setState());
	};

	render() {
		return (
			<>
				<h1>Популярные фильмы</h1>
				<FilmList filmList={this.state.films} />
			</>
		);
	}
}

export default Home;
