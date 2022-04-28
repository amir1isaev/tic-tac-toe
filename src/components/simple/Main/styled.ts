import styled from 'styled-components'

const Main = styled.main<IMainProps>`
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12.5px 0;
`

interface IMainProps {}
export { Main }
