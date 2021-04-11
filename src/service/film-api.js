import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3d206c808efdc2ddd4ee349756c03afe';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
	api_key: API_KEY,
};
const fetchFilmList = async () => {
	return await axios
		.get('trending/all/day')
		.then(({ data: { results } }) => results);
};

const fetchFilmDetails = async id => {
	return await axios.get(`/movie/${id}`).then(({ data }) => data);
};

const fetchFilmSearch = async ({ searchQuery = '', currentPage = 1 }) => {
	return await axios
		.get('search/movie', { params: { query: searchQuery, page: currentPage } })
		.then(({ data: { results } }) => results);
};

const fetchFilmCredits = id => {
	return axios.get(`/movie/${id}/credits`).then(({ data }) => data);
};
const fetchFilmReviews = async id => {
	return await axios
		.get(`/movie/${id}/reviews`)
		.then(({ data: { results } }) => results);
};
export {
	fetchFilmList,
	fetchFilmDetails,
	fetchFilmSearch,
	fetchFilmCredits,
	fetchFilmReviews,
};
