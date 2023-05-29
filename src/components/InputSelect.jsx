import React from 'react';
import { Form } from 'react-bootstrap';

const InputSelect = (props) => {
  const { options, title, ...rest } = props;

  return (
    <div>
      <Form.Select {...rest}>
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
