import styled from 'styled-components'

const AlertContent = styled.div`
  background-color: ${props => props.type === 'primary' ? props.theme.primaryLight : props.theme.neutral.gray90};
  border: 1px solid;
  border-color: ${props => props.type === 'primary' ? props.theme.primaryDark : props.theme.neutral.black};
  border-radius: .25em;
  color: ${props => props.type === 'primary' ? props.theme.primaryDark : props.theme.neutral.black};
  font-size: 1.6rem;
  margin-bottom: 1em;
  padding: .75em 1.25em;
`

const Alert = () => (
  <AlertContent />
)

Alert.displayName = 'Alert'

export {
  Alert as default,
}
