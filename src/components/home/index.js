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
import StyledLink from '../Links';
import Button, {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  QuaternaryButton
} from '../Buttons';
import Content from '../Content';
import Flexbox from '../Flexbox';


class Home extends Component {
  render() {
    return (
      <Content>
        <StyledLink>I am a link</StyledLink>
        <Flexbox>
          <PrimaryButton>Button</PrimaryButton>
          <SecondaryButton>Button</SecondaryButton>
          <TertiaryButton>Button</TertiaryButton>
          <QuaternaryButton>Button</QuaternaryButton>
          <PrimaryButton hollow>Button</PrimaryButton>
          <SecondaryButton hollow>Button</SecondaryButton>
          <TertiaryButton hollow>Button</TertiaryButton>
          <QuaternaryButton hollow>Button</QuaternaryButton>
        </Flexbox>
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
      </Content>
    );
  }
}

export default Home
