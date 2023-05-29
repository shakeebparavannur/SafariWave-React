import React from 'react'
import { Form } from 'react-bootstrap'

const InputCheck = (props) => {
  return (
    <div>
        <Form.Label>{props.title}</Form.Label>
        <Form.Check name={props.name} type={props.type} label={props.label} id={props.id} value={props.value}/>
    </div>
  )
}

export default InputCheck