import styled from 'styled-components';

const Textarea = styled.textarea`
  border: solid 1px ${props => props.theme.primary};
  display: block;
  font-size: 1rem;
  height: 150px;
  max-height: 150px;
  max-width: 100%;
  padding: 5px;
  width: 100%;
`;

export default Textarea;
