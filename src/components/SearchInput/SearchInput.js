import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './searchInput.module.css';
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
			<form onSubmit={this.handleSubmit} className={styles.form}>
				<input
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search films"
					value={this.state.query}
					onChange={this.handleChange}
					className={styles.input}
				/>
				<button type="submit" className={styles.btn}>
					<span>Search</span>
				</button>
			</form>
		);
	}
}

export default SearchInput;
