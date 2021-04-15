import React, { useState, useCallback} from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Typography from 'components/atoms/Typography'
import TextField from 'components/atoms/TextField'
import Button from 'components/atoms/Button'

const useStyle = makeStyles((theme) => ({}))

const AddEventBanner = (props) => {
  const validade = { props }
  const style = useStyle()

  const [fieldToValidate, setFieldValidation] = useState({
    title: false,
    date: false,
    type: false,
  })

  const [inputFieldValue, setFieldValue] = useState({
    title: '',
    description: '',
    date: '',
    type: '',
  })

  const validateField = useCallback((field) => {
    const input = inputFieldValue[field]
    const currentValidationState = fieldToValidate
    if(input === null || input === ''){
      currentValidationState[field] = true
    }
    else {
      currentValidationState[field] = false
    }
    setFieldValidation({ ...currentValidationState })
    return !currentValidationState[field]
  },[fieldToValidate, inputFieldValue])

  const isValid = useCallback(() => {
    let validationStatus = true
    Object.keys(fieldToValidate).map((key) => {
      validationStatus = validationStatus && validateField(key)
      console.log(validationStatus);
    })
    return validationStatus
  },[fieldToValidate, validateField])

  const handleFieldChange = useCallback(
    (field, value) => {
      const currentValidationState = fieldToValidate
      currentValidationState[field] = false
      setFieldValidation({ ...currentValidationState })

      const currentFieldValues = inputFieldValue
      currentFieldValues[field] = value
      setFieldValue({ ...currentFieldValues })
    }, 
    [fieldToValidate, inputFieldValue]
  )

  const handleSubmit = useCallback(() => {
    if(!props.validade || (props.validade && isValid())) {
      props.onSubmit(inputFieldValue)
    }
  }, [inputFieldValue, isValid, props])

  return (
    <Box component={Container}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="header">Add New Event</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField 
            required
            label="Title"
            onChange={(event) => handleFieldChange('title', event.target.value)}
            error={fieldToValidate.title}
            onBlur={() => validade && validateField('title')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Description"
            onChange={(event) => handleFieldChange('description', event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField 
            required
            label="Date and Time"
            onChange={(event) => handleFieldChange('date', event.target.value)}
            type="datetime-local"
            error={fieldToValidate.date}
            onBlur={() => validade && validateField('date')}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField 
            required
            label="Event Type"
            onChange={(event) => handleFieldChange('type', event.target.value)}
            error={fieldToValidate.type}
            onBlur={() => validade && validateField('type')}
          />
        </Grid>
        <Grid item container xs={12} justify="center">
          <Button title="Add Event" onClick={handleSubmit} />
        </Grid>
      </Grid>
    </Box>
  )

}

AddEventBanner.propTypes = {
  validate: PropTypes.bool,
  onSubmit: PropTypes.func,
}

AddEventBanner.defaultProps = {
  validate: false,
}

export default AddEventBanner