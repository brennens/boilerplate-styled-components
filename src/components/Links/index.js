import styled from 'styled-components'

const StyledLink = styled.a`
  color: ${props => props.theme.neutral.gray90};
  cursor: pointer;
  text-decoration: none;
  &:link,
  &:visited {
      color: ${props => props.theme.primary};
  }
  &:hover,
  &:active {
      text-decoration: underline;
  }
`

export default StyledLink
