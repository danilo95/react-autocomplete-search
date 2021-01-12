import axios from 'axios';

const url = axios.create({
	baseURL: 'https://api.publicapis.org/',
});

export const getApiSuggestions = (word) => {
	let result = url
		.get(`/entries?title=${word}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});

	return result;
};
