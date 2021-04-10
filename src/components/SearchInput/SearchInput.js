import React, { Component } from 'react';
import PropTypes from 'prop-types';
class SearchInput extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};
	state = { query: '' };
	handleChange = e => {
		this.setState({ query: e.currentTarget.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.query);
		this.setState({ query: '' });
	};

	render() {
		return (
			<header>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search films"
						value={this.state.query}
						onChange={this.handleChange}
					/>
					<button type="submit">
						<span>Search</span>
					</button>
				</form>
			</header>
		);
	}
}

export default SearchInput;
