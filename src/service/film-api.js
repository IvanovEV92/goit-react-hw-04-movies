import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3d206c808efdc2ddd4ee349756c03afe';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
	api_key: API_KEY,
};
const fetchFilmList = () => {
	return axios.get('trending/all/day').then(({ data: { results } }) => results);
};

const fetchFilmDetails = (id) => {
	return axios.get(`/movie/${id}`).then(({ data }) => data);
};
export { fetchFilmList, fetchFilmDetails };
