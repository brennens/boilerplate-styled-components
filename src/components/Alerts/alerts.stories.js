import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info';

import Alert from './index'

const stories = storiesOf('Alerts', module)

stories.addDecorator(withKnobs)

stories.add('Alerts',
  withInfo('testing')(() =>
    <Alert type='primary'>{text('Label', 'This is a test')}</Alert>
  )
)
