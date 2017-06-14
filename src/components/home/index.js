import React from 'react';
import { Component } from 'react';
import FormElements, {
  InputGroup,
  Label,
  Textfield,
  Textarea,
  CheckboxWrapper,
  CheckboxInput,
  CheckboxControl,
  RadioWrapper,
  RadioInput,
  RadioControl,
} from '../FormElements';


class Home extends Component {
  render() {
    return (
      <div>
        <InputGroup>
          <Label>Textfield</Label>
          <Textfield />
        </InputGroup>
        <InputGroup>
          <Label>Textarea</Label>
          <Textarea />
        </InputGroup>
        <InputGroup>
          <Label>Checkbox</Label>
          <CheckboxWrapper>
            <CheckboxInput />
            <CheckboxControl />
            I am a checkbox
          </CheckboxWrapper>
        </InputGroup>
        <InputGroup>
          <Label>Radio</Label>
          <RadioWrapper>  
            <RadioInput />
            <RadioControl />
            I am a radio
          </RadioWrapper>
        </InputGroup>
      </div>
    );
  }
}

export default Home
