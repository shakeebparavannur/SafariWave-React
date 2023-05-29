import { TextField } from '@mui/material';
import React from 'react';
import { Form } from 'react-bootstrap';
// import './InputField.css';

const InputField = (props) => {
  return (
    <div>
      <Form.Label htmlFor = {props.id}>{props.label}</Form.Label>
      <Form.Control
        id={props.id}
        label={props.label}
        name={props.name}
        variant={props.variant}
        type={props.type}
        onChange={props.onChange}
        className={props.className}
        as={props.as}
        rows ={props.row}
        
      />
    </div>
  );
};

export default InputField;
