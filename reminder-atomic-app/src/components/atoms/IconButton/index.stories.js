import React from 'react'
import IconButton from '.'

import { ThemeProvider } from '@material-ui/core/styles'
import baseTheme from 'themes'

import DeleteIcon from "@material-ui/icons/Delete";

const IconButtonComponent = {
  title: 'IconButton',
  component: IconButton,
  argTypes: { onClick: { actions: "clicked" } }
}

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <IconButton {...args} />
  </ThemeProvider>
)

export const IconButtonActive = Template.bind({})
IconButtonActive.args = {
  icon: <DeleteIcon />
}

export const IconButtonDisabled = Template.bind({})
IconButtonDisabled.args = {
  icon: <DeleteIcon />,
  disabled: true,
}

export default IconButtonComponent