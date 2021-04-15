import React from 'react'
import Typography from '.'

import { ThemeProvider } from '@material-ui/core/styles'
import baseTheme from "themes"

const TypographyComponent = {
  title: 'Typography',
  component: Typography,
}

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <Typography {...args} />
  </ThemeProvider>
)

export const Header = Template.bind({})
Header.args = {
  children: 'Header',
  variant: 'header',
}

export const Title = Template.bind({})
Title.args = {
  children: 'Title',
  variant: 'title',
}

export const SubTitle = Template.bind({})
SubTitle.args = {
  children: 'Subtitle',
  variant: 'subtitle',
}

export const Body = Template.bind({})
Body.args = {
  children: 'Body',
  variant: 'body',
}

export default TypographyComponent;