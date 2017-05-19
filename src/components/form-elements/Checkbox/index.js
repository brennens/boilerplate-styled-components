import styled from 'styled-components';

const Checkbox = styled.input`
  border: solid 1px ${props => props.theme.primary};
  display: block;
  font-size: 1.6rem;
  height: 40px;
  padding: 0 5px;
  width: 100%;
`;

export default Checkbox;
