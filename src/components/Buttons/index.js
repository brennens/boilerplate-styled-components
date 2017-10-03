import styled from 'styled-components'

const Button = styled.button`
  border: solid .125em transparent;
  border-radius: .125em;
  cursor: pointer;
  display: inline-block;
  font-size: ${props => (props.size === 'large') ? '2rem' : (props.size === 'small') ? '1.4rem' : '1.6rem'};
  padding: .5em .75em;
  transition: all .15s ease-in-out;
  user-select: none;
`

const PrimaryButton = Button.extend`
  background: ${props => props.outline ? 'transparent' : props.theme.primary};
  border-color: ${props => props.theme.primary};
  color: ${props => props.outline ? props.theme.primary : props.theme.neutral.white};
  &:hover {
    background: ${props => props.theme.primaryDark};
    border-color: ${props => props.theme.primaryDark};
    color: ${props => props.theme.neutral.white};
  }
`

const SecondaryButton = Button.extend`
  background: ${props => props.outline ? 'transparent' : props.theme.secondary};
  border-color: ${props => props.theme.secondary};
  color: ${props => props.outline ? props.theme.secondary : props.theme.neutral.white};
  &:hover {
    background: ${props => props.theme.secondaryDark};
    border-color: ${props => props.theme.secondaryDark};
    color: ${props => props.theme.neutral.white};
  }
`

const TertiaryButton = Button.extend`
  background: ${props => props.outline ? 'transparent' : props.theme.tertiary};
  border-color: ${props => props.theme.tertiary};
  color: ${props => props.outline ? props.theme.tertiary : props.theme.neutral.white};
  &:hover {
    background: ${props => props.theme.tertiaryDark};
    border-color: ${props => props.theme.tertiaryDark};
    color: ${props => props.theme.neutral.white};
  }
`

const QuaternaryButton = Button.extend`
  background: ${props => props.outline ? 'transparent' : props.theme.quaternary};
  border-color: ${props => props.theme.quaternary};
  color: ${props => props.outline ? props.theme.quaternary : props.theme.neutral.white};
  &:hover {
    background: ${props => props.theme.quaternaryDark};
    border-color: ${props => props.theme.quaternaryDark};
    color: ${props => props.theme.neutral.white};
  }
`

Button.displayName = 'Button'
PrimaryButton.displayName = 'PrimaryButton'
SecondaryButton.displayName = 'SecondaryButton'
TertiaryButton.displayName = 'TertiaryButton'
QuaternaryButton.displayName = 'QuaternaryButton'

export {
  Button as default,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  QuaternaryButton,
}
