import React, { Component } from 'react';
import { fetchFilmCredits } from '../../service/film-api';
import CastCard from '../CastCard';

class Cast extends Component {
	state = {
		cast: [],
	};
	componentDidMount(prevProps, prevState) {
		const movieId = this.props.match.params.moviesId;
		this.fetchCredits(movieId);
	}

	fetchCredits = id => {
		fetchFilmCredits(id)
			.then(data => {
				console.log(data);
				this.setState({ ...data });
			})
			.catch(error => this.setState({ error }));
	};

	render() {
		return (
			<ul>
				{this.state.cast && (
					<div>
						<ul>
							{this.state.cast.map(({ id, profile_path, name, character }) => (
								<li key={id}>
									<CastCard
										img={profile_path}
										name={name}
										character={character}
									/>
								</li>
							))}
						</ul>
					</div>
				)}
			</ul>
		);
	}
}

export default Cast;
