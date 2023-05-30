import React from 'react';
import { Form } from 'react-bootstrap';

const InputSelect = (props) => {
  const { options, title,selectTitle, ...rest } = props;

  return (
    <div>
      <Form.Label >{selectTitle}</Form.Label>
      <Form.Select {...rest} defaultValue={title}>
        <option disabled>{title}</option>
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default InputSelect;
