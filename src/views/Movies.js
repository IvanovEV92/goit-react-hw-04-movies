import React, { Component } from 'react';
import SearchInput from '../components/SearchInput';
import FilmList from '../components/FilmList';

import { fetchFilmSearch } from '../service/film-api';
class Movies extends Component {
	state = {
		films: [],
		currentPage: 1,
		searchQuery: '',
		isLoading: false,
		error: null,
	};
	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchQuery !== this.state.searchQuery) {
			this.fetchFilms();
		}
	}
	onChangeQuery = query => {
		this.setState({
			searchQuery: query,
			currentPage: 1,
			films: [],
			error: null,
		});
	};
	fetchFilms = () => {
		const { currentPage, searchQuery } = this.state;
		const option = {
			searchQuery,
			currentPage,
		};
		fetchFilmSearch(option)
			.then(data => {
				this.setState({ films: data });
			})
			.catch(error => this.setState({ error }));
	};

	render() {
		return (
			<main>
				<SearchInput onSubmit={this.onChangeQuery} />
				<FilmList filmList={this.state.films} />
			</main>
		);
	}
}

export default Movies;
