import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;
	background-color: black;
	margin: 0;
	width: 90%;
`;
export const SecondWrapper = styled.div`
	@media (width>=992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 50px;
		grid-row-gap: 0px;
	}
`;
