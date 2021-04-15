import React from 'react'
import AddEventBanner from '.'

import { ThemeProvider } from '@material-ui/core/styles'
import baseTheme from "themes"

const AddEventBannerComponent = {
  title: 'AddEvent',
  component: AddEventBanner,
  argTypes: { onSubmit: { action: 'subimitted' } }
}

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <AddEventBanner {...args} />
  </ThemeProvider>
)

export const SimpleAddEvent = Template.bind({})
SimpleAddEvent.args = {}

export const ValidateAddEvent = Template.bind({})
SimpleAddEvent.args = {
  validate: true,
}

export default AddEventBannerComponent;