import React from 'react'
import InputField from '../components/InputField'
import { Form } from 'react-bootstrap'

const AddPackage = () => {
  return (
    <div>
        <h3>Add New Package</h3>
        <Form>
            <InputField label="Title of the Package" id="packid" variant=""/>
            <InputField/>
            <InputField/>
            <InputField/>
            <InputField/>
        </Form>

    </div>

  )
}

export default AddPackage