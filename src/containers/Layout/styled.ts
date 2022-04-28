import styled from 'styled-components'

const Layout = styled.div<ILayoutProps>`
	min-height: 100%;
	display: flex;
	flex-direction: column;
`

interface ILayoutProps {}
export { Layout }
