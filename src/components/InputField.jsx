import { TextField } from '@mui/material'
import React from 'react'


const InputField = ({props}) => {
  return (
    <div>
      <TextField id={props.id} label={props.label} variant={props.variant} />
    </div>
  )
}

export default InputField
