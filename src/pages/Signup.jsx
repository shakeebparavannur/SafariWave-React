import React, { useState } from "react";
import { Button, Form,Alert } from "react-bootstrap";
import InputField from "../components/InputField";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputSelect from "../components/InputSelect";
import MyButton from "../components/Button";
import axios from "axios";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phoneNo: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  pincode: Yup.number().required("Postal Code is required"),
  state: Yup.string().required("State is required"),
  password: Yup.string().required("Password is required"),
  confpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const formik=  useFormik({
    initialValues:{
      username: "",
      fullName: "",
      email: "",
      phoneNo: "",
      address: "",
      pincode: "",
      state: "",
      password: "",
      confpassword: "",
    },
    validationSchema:validationSchema,
    
    onSubmit: async(values)=>{
      
      try{
        const {confpassword,...reqData} = values
         const response = await axios.post("https://localhost:7254/api/Users/register",
         reqData);
         console.log(response.data);
      }
      catch(error){
        console.log(error.response);
        if(error.response && error.response.data && error.response.data.errorMessages &&error.response.data.IsSuccess==false ){
          const errorMessages = error.response.data.errorMessages;
          setErrorMessage(errorMessages);
          console.log(errorMessages);
        }
        else{
          setErrorMessage("An error occurred try again");
          console.log("An error occurred try again");
        }
      }
    
    }
  })

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
      <h3>SigUp</h3>
      <InputField
        id="username"
        label="please choose your username"
        variant="outlined"
        type="text"
        name="username"
        {...formik.getFieldProps("username")}
          error={formik.touched.username && formik.errors.username}
      />
      <InputField
        id="fullName"
        label="Enter Your Fullname"
        variant="outlined"
        type="text"
        name="fullName"
        {...formik.getFieldProps("fullName")}
          error={formik.touched.fullName && formik.errors.fullName}
      />
      <InputField
        id="email"
        label="Enter Your Email"
        variant="outlined"
        type="email"
        name="email"
        {...formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.email}
      />
      <InputField
        id="phoneNo"
        label="Enter your Phone number"
        variant="outlined"
        type="tel"
        name="phoneNo"
        {...formik.getFieldProps("phoneNo")}
          error={formik.touched.phoneNo && formik.errors.phoneNo}
      />
      <InputField
        id="address"
        label="Enter your Address"
        variant="outlined"
        as="textarea"
        row={3}
        name="address"
        type="text"
        {...formik.getFieldProps("address")}
          error={formik.touched.address && formik.errors.address}
      />
      <InputField
        id="pincode"
        label="Enter your Postal Code"
        variant="outlined"
        type="number"
        name="pincode"
        {...formik.getFieldProps("pincode")}
          error={formik.touched.pincode && formik.errors.pincode}
      />
      <InputSelect  selectTitle = "Choose the state" label="State" id="state" options={statesInIndia} title="state" name="state"
      {...formik.getFieldProps("state")}
      
      value={formik.values.state}
      error={formik.touched.state && formik.errors.state}
      />
      <InputField
        id="password"
        label="Enter Password"
        variant="outlined"
        type="password"
        name="password"
        {...formik.getFieldProps("password")}
          error={formik.touched.password && formik.errors.password}
      />
       <InputField
        id="confpassword"
        label="Confirm Password"
        variant="outlined"
        type="password"
        {...formik.getFieldProps("confpassword")}
          error={formik.touched.confpassword && formik.errors.confpassword}
      />
      <MyButton type="submit" variant="primary" value="signup"/>

      </Form>
      {errorMessage && (
        <Alert variant="danger">{errorMessage}</Alert>
      )}
    </div>
  );
};

export default Signup;