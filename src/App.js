import React, { useState, useEffect } from 'react';
import { getApiSuggestions } from './requests';
import SearchInput from './searchInput';
import { MainWrapper } from './style';

function App() {
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = useState(false);

	const getSuggestions = async (word) => {
		if (word) {
			setLoading(true);
			let response = await getApiSuggestions(word);
			setOptions(response);
			setLoading(false);
		} else {
			setOptions([]);
		}
	};

	const getApiUrl = (url) => {
		window.open(url, '_blank');
	};

	return (
		<MainWrapper>
			<SearchInput
				loading={loading}
				options={options}
				requests={getSuggestions}
				onClickFunction={getApiUrl}
				placeholder="find a public api"
			/>
		</MainWrapper>
	);
}

export default App;
