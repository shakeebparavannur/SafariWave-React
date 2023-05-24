import { TextField } from '@mui/material';
import React from 'react';
// import './InputField.css';

const InputField = (props) => {
  return (
    <div>
      <TextField
        id={props.id}
        label={props.label}
        variant={props.variant}
        type={props.type}
        onChange={props.onChange}
        className={props.className}
        
      />
    </div>
  );
};

export default InputField;
