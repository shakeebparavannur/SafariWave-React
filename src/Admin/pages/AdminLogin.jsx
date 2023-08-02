import React, { useState,useContext } from "react";
import "./Login.css";
import InputField from "../../components/InputField";
// import { Box } from "@mui/material";
import MyButton from "../../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { Form } from "react-bootstrap";
import { userContext } from "../../App";


const AdminLogin = () => {
  const {setIsUserLoggedIn} = useContext(userContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ password, username });
    try {
      const response = await axios.post(
        'https://localhost:7254/api/Users/Admin',
        { username, password }
      );
      const data = response.data;
      console.log(data);
      if(data.isSuccess == true){
        console.log(data.result.token);
        Cookies.set('jwtToken',data.result.token)
        setIsUserLoggedIn(true);
        navigate('/adminhome');
      }
      else{
        alert(data.errorMessage);
        console.log(data.errorMessage,'+++++');
      }
    } catch (error) {
      console.log(error.response.data,'------');
      alert(error.response.data.errorMessages);
    }
  };

  return (
    <div  className=" border container h-100 d-flex flex-coloum justify-content-center align-items-center mt-3">
    <Form
      // component="form"
      onSubmit={handleSubmit}
      sx={{ "&>:not(style)": { m: 1, width: "25ch" } }}
      autoComplete="off"
    >
      <h2 className="font-weight-bold">Admin Login</h2>
      <InputField
        id="username"
        label="Username"
        variant="outlined"
        type="text"
        
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <MyButton
        color="success"
        type="submit"
        value="login"
        name="login"
        variant="outline-success"
        class="mt-3 align-center"
      />
    </Form>
    </div>
  );
};

export default AdminLogin;
