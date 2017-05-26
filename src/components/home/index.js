import React from 'react';
import { Component } from 'react';
import InputGroup from '../form-elements/InputGroup';
import Label from '../form-elements/Label';
import Textfield from '../form-elements/Textfield';
import Textarea from '../form-elements/Textarea';
import Checkbox from '../form-elements/Checkbox';


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
          <Checkbox />
        </InputGroup>
      </div>
    );
  }
}

export default Home
