import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import StyledLink from './index'

const stories = storiesOf('StyledLink', module)

stories.addDecorator(withKnobs)

stories.add('Black', () => <StyledLink>{ text('Label', 'React') }</StyledLink>)
