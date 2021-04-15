import React from 'react'
import TextField from '.'

import { ThemeProvider } from '@material-ui/core/styles'
import baseTheme from "themes"

const TextFieldComponent = {
  title: 'Text Field',
  component: TextField,
  argTypes: { onChange: { action: "changed" }, onBlur: { action: "blurred" } },
}

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <TextField {...args} />
  </ThemeProvider>
)

export const EmptyTextField = Template.bind({})
EmptyTextField.args = {
  label: 'Empty Text Field',
}

export const FilledTextField = Template.bind({})
FilledTextField.args = {
  label: 'Filled Text Field',
  value: 'Filled Text Field'
}

export const RequiredTextField = Template.bind({})
RequiredTextField.args = {
  label: 'Required Text Field',
  required: true,
}

export const EmptyErrorTextField = Template.bind({})
EmptyErrorTextField.args = {
  label: 'Empty Error Text Field',
  error: true,
}

export const ErrorMessageTextField = Template.bind({})
ErrorMessageTextField.args = {
  label: 'Error Message Text Field',
  error: true,
  errorMessage: 'Mensagem de error'
}

export default TextFieldComponent;