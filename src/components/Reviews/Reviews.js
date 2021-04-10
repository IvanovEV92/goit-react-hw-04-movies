import React, { Component } from 'react';
import { fetchFilmReviews } from '../../service/film-api';
import ReviewsItem from '../ReviewsItem';

class Reviews extends Component {
	state = {
		reviews: [],
	};
	componentDidMount(prevProps, prevState) {
		const movieId = this.props.match.params.moviesId;
		this.fetchReviews(movieId);
	}

	fetchReviews = id => {
		fetchFilmReviews(id)
			.then(data => {
				this.setState({ reviews: data });
			})
			.catch(error => this.setState({ error }));
	};

	render() {
		return (
			<ul>
				{this.state.reviews && (
					<ul>
						{this.state.reviews.map(
							({
								id,
								content,
								created_at,
								author_details: { username, avatar_path },
							}) => (
								<li key={id}>
									<ReviewsItem
										author={username}
										text={content}
										date={created_at}
										img={avatar_path}
									/>
								</li>
							),
						)}
					</ul>
				)}
			</ul>
		);
	}
}

export default Reviews;
