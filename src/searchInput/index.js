import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

import { Input, Ul, Li, SuggestContainer } from './style';

export default function SearchInput({
	loading,
	options,
	requests,
	onClickFunction,
	placeholder,
}) {
	const [inputValue, setInputValue] = useState('');

	const debouncedSave = useCallback(
		debounce((newValue) => requests(newValue), 1000),
		[]
	);

	const updateValue = (newValue) => {
		setInputValue(newValue);
		debouncedSave(newValue);
	};

	return (
		<div>
			<Input
				value={inputValue}
				onChange={(input) => updateValue(input.target.value)}
				placeholder={placeholder}
			/>
			<SuggestContainer>
				<Ul>
					{loading && <Li>Loading...</Li>}
					{options?.entries?.length > 0 &&
						!loading &&
						options?.entries?.map((value, index) => (
							<Li
								key={`${value.API}-${index}`}
								onClick={() => onClickFunction(value.Link)}
							>
								{value.API}
							</Li>
						))}
				</Ul>
			</SuggestContainer>
		</div>
	);
}
