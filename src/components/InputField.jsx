import { TextField } from '@mui/material';
import React from 'react';
import { Form,Alert } from 'react-bootstrap';
// import './InputField.css';

const InputField = (props) => {
  return (
    <div>
      <Form.Group htmlFor={props.id}>
      <Form.Label htmlFor = {props.id}>{props.label}</Form.Label>
      <Form.Control
        // id={props.id}
        // label={props.label}
        name={props.name}
        variant={props.variant}
        type={props.type}
        onChange={props.onChange}
        className={props.className}
        as={props.as}
        rows ={props.row}
      />
      {props.error && <Alert variant="danger">{props.error}</Alert>}
      </Form.Group>
    </div>
  );
};

export default InputField;
