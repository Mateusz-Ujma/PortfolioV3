import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;
	margin: 0;
`;
export const SecondWrapper = styled.div`
	@media (width>=992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 50px;
		grid-row-gap: 0px;
		width: 100%;
	}
`;
export const MainWrapper = styled.div`
	@media (width>=992px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
		padding: 0px 30px 0px 95px;
	}
`;
