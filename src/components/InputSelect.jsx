import React from 'react';
import { Form, Alert } from 'react-bootstrap';


const InputSelect = (props) => {
  const { options, title, selectTitle, ...rest } = props;

  return (
    <div>
      <Form.Label>{selectTitle}</Form.Label>
      <Form.Select {...rest}>
        <option disabled value="">
          {title}
        </option>
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </Form.Select>
      {props.error && <Alert variant="danger">{props.error}</Alert>}
    </div>
  );
};

export default InputSelect;
