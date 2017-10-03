import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';

import Button, { PrimaryButton, SecondaryButton, TertiaryButton, QuaternaryButton } from './index'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.add('Variations', () => <div>
  <PrimaryButton>{
    text('Label', 'React')
  }</PrimaryButton>
  <SecondaryButton>{
    text('Label', 'React')
  }</SecondaryButton>
  <TertiaryButton>{
    text('Label', 'React')
  }</TertiaryButton>
  <QuaternaryButton>{
    text('Label', 'React')
  }</QuaternaryButton>
  <Button>{
    text('Label', 'React')
  }</Button>
</div>)

stories.add('Default',
  withInfo('testing')(() =>
    <Button>{text('Label', 'React')}</Button>
  )
)

stories.add('Primary',
  withInfo('testing')(() =>
    <PrimaryButton
      outline={boolean('Outline', false)}
      size={select('Size', { small: 'Small', regular: 'Regular', large: 'Large' }, 'regular')}>
      {text('Label', 'React')}
    </PrimaryButton>
  )
)

stories.add('Secondary',
  withInfo('testing')(() =>
    <SecondaryButton
      outline={boolean('Outline', false)}
      size={select('Size', { small: 'Small', regular: 'Regular', large: 'Large' }, 'regular')}>
      {text('Label', 'React')}
    </SecondaryButton>
  )
)

stories.add('Tertiary',
  withInfo('testing')(() =>
    <TertiaryButton
      outline={boolean('Outline', false)}
      size={select('Size', { small: 'Small', regular: 'Regular', large: 'Large' }, 'regular')}>
      {text('Label', 'React')}
    </TertiaryButton>
  )
)

stories.add('Quaternary',
  withInfo('testing')(() =>
    <QuaternaryButton
      outline={boolean('Outline', false)}
      size={select('Size', { small: 'Small', regular: 'Regular', large: 'Large' }, 'regular')}>
      {text('Label', 'React')}
    </QuaternaryButton>
  )
)
