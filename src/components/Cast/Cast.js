import React, { Component } from 'react';
import { fetchFilmCredits } from '../../service/film-api';
import CastCard from '../CastCard';
import styles from './cast.module.css';
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
			<>
				{this.state.cast && (
					<ul className={styles.cast}>
						{this.state.cast.map(({ id, profile_path, name, character }) => (
							<li key={id} className={styles.cast__item}>
								<CastCard
									img={profile_path}
									name={name}
									character={character}
								/>
							</li>
						))}
					</ul>
				)}
			</>
		);
	}
}

export default Cast;
