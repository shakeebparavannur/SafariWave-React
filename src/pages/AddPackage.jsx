import React from 'react'
import InputField from '../components/InputField'
import { Form } from 'react-bootstrap'
import InputSelect from '../components/InputSelect'
import InputCheck from '../components/InputCheck'
import MyButton from '../components/Button'
import axios from 'axios'
import Cookies from 'js-cookie'

const AddPackage = () => {
  const duration = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const facilities =['Accommodation','Meals','Transportation','Guided Sightseeing Tours','Wildlife Safaris','Trekking','Special Events','Swimming Pool']
  const type = ['Cultural', 'Adventure', 'Honeymoon', 'Wildlife', 'Luxury', 'Historical', 'Beach', 'Family']
  const countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'UAE', 'India', 'Australia', 'Japan', 'China'];
  const token = Cookies.get('jwtToken');

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const selectedFacilities = Array.from(formData.getAll('Facilities')).join(', ');
  formData.set('Facilities', selectedFacilities);
    try{
      await axios.post('https://localhost:7254/api/Packages/AddPackage',formData,{
        headers:{
          'Content-Type':'multipart/form-data',
          'Authorization':`Bearer ${token}`
        }
      });
      console.log("sucessfully added");
      
      }
      catch(error){
        console.log(error);
    }
  }
  return (
    <div>
        <h3>Add New Package</h3>
        <Form onSubmit={handleSubmit}>
            <InputField label="Title of the Package" id="packid" variant="" type="text" name="PackageName"/>
            <InputField label="Add description of packages" name ="Describtion" id="packDesc" as="textarea" row={3}/>
            {/* <Form.label></Form.label> */}
            <InputSelect name="Duration" label = "Duration in no of days" id="packDuration" options={duration} title="Duration in no of days" />
            <InputField name="Location" label="Please Enter the location" id="packLocation" type="text"/>
            <Form.Label>Please select the facilities:</Form.Label>
            {facilities.map(facility =>{
              return(
                <InputCheck key={facility} type="checkbox" label={facility} value={facility} name="Facilities"/>
              )
            })}
            
            <InputField type="number" label="Price/ Head" id="pricePerHead" name="PricePerHead"/>
            <InputField type="number" label="Minimum no of Person" id="minPerson" name="MinNoOfPerson"/>
            <InputSelect label = "Country" id="typeOfPackage" options={type} title="Type of Package" name="Type"/>
            <InputSelect label = "Country" id="packCoutry" options={countries}  title="Country" name="Country"/>
            <InputField type="file" label="CoverImage" id="coverimage" name="CoverImage"/>
            <InputField type="file" label="Image 1" id="image1" name="Image1"/>
            <InputField type="file" label="Image 2" id="image2" name="Image2"/>
            <InputField type="file" label="Image 3" id="image3" name="Image3"/>
            <InputField type="file" label="Image 4" id="image4" name="Image4"/>
            <MyButton type="sumbit" variant="primary" name="sumbit" value="submit"/>


        </Form>

    </div>

  )
}

export default AddPackage