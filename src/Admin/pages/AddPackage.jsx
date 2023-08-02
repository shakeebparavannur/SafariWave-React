import React from 'react';
import InputField from '../../components/InputField';
import { Form } from 'react-bootstrap';
import InputSelect from '../../components/InputSelect';
import InputCheck from '../../components/InputCheck';
import axios from 'axios';
import Cookies from 'js-cookie';
import './AddPackage.css'; // Import the CSS file

import MyButton from '../../components/Button'; // Import the custom button component

const AddPackage = () => {
  const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const facilities = ['Accommodation', 'Meals', 'Transportation', 'Guided Sightseeing Tours', 'Wildlife Safaris', 'Trekking', 'Special Events', 'Swimming Pool'];
  const type = ['Cultural', 'Adventure', 'Honeymoon', 'Wildlife', 'Luxury', 'Historical', 'Beach', 'Family'];
  const countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'UAE', 'India', 'Australia', 'Japan', 'China'];
  const token = Cookies.get('jwtToken');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const selectedFacilities = Array.from(formData.getAll('Facilities')).join(', ');
    formData.set('Facilities', selectedFacilities);
    try {
      await axios.post(`${import.meta.env.VITE_APP_URL}/api/Packages/AddPackage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log('successfully added');
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-package-container">
      <h3 className="add-package-heading">Add New Package</h3>
      <Form onSubmit={handleSubmit} className="add-package-form">
        <InputField label="Title of the Package" id="packid" variant="" type="text" name="PackageName" />
        <InputField label="Add description of packages" name="Describtion" id="packDesc" as="textarea" row={3} />
        <div className="row">
          <div className="col-md-6">
            <InputSelect selectTitle = "Choose the no of days" name="Duration" label="Duration in no of days" id="packDuration" options={duration} title="Duration in no of days" />
          </div>
          <div className="col-md-6">
            <InputField name="Location" label="Please Enter the location" id="packLocation" type="text" />
          </div>
        </div>
     

<Form.Label>Please select the facilities:</Form.Label>
<div className="row">
  <div className="col-md-6">
    {facilities.slice(0, Math.ceil(facilities.length / 2)).map((facility) => (
      <InputCheck key={facility} type="checkbox" label={facility} value={facility} name="Facilities" />
    ))}
  </div>
  <div className="col-md-6">
    {facilities.slice(Math.ceil(facilities.length / 2)).map((facility) => (
      <InputCheck key={facility} type="checkbox" label={facility} value={facility} name="Facilities" />
    ))}
  </div>
</div>



        <div className="row">
          <div className="col-md-4">
            <InputField type="number" label="Price/Head" id="pricePerHead" name="PricePerHead" />
          </div>
          <div className="col-md-4">
            <InputField type="number" label="OfferPricePrice/Head" id="pricePerHead" name="OfferPrice" />
          </div>
          <div className="col-md-4">
            <InputField type="number" label="Minimum no of Person" id="minPerson" name="MinNoOfPerson" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputSelect selectTitle = "Type of package" label="Type of Package" id="typeOfPackage" options={type} title="Type of Package" name="Type" />
          </div>
          <div className="col-md-6">
            <InputSelect selectTitle = "Choose the country" label="Country" id="packCoutry" options={countries} title="Country" name="Country" />
          </div>
        </div>
        <InputField type="file" label="Cover Image" id="coverimage" name="CoverImage" />
        <InputField type="file" label="Image 1" id="image1" name="Image1" />
        <InputField type="file" label="Image 2" id="image2" name="Image2" />
        <InputField type="file" label="Image 3" id="image3" name="Image3" />
        <InputField type="file" label="Image 4" id="image4" name="Image4" />
        <MyButton type="submit" variant="primary" className="add-package-submit-button" name="submit" value="Submit">
          Submit
        </MyButton>
      </Form>
    </div>
  );
};

export default AddPackage;
