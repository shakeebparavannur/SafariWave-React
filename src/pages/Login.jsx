import React, { useState,useContext } from "react";
import "./Login.css";
import InputField from "../components/InputField";
// import { Box } from "@mui/material";
import MyButton from "../components/Button";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { Form } from "react-bootstrap";
import { userContext } from "../App";
import jwtDecode from "jwt-decode";


const Login = () => {
  const {setIsUserLoggedIn} = useContext(userContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const location = useLocation();
  const prevPath = location?.state?.originalPath || "/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ password, username });
    try {
      const response = await axios.post(
        'https://localhost:7254/api/Users/login',
        { username, password }
      );
      const data = response.data;
      console.log(data);
      if(data.isSuccess == true){
        console.log(data.result.token);
        Cookies.set('jwtToken',data.result.token)
        const decodToken = jwtDecode(data.result.token)
        const role = decodToken.role;
        console.log(decodToken, role);
        setIsUserLoggedIn(true);
        navigate(prevPath);
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
    <Form
      // component="form"
      onSubmit={handleSubmit}
      sx={{ "&>:not(style)": { m: 1, width: "25ch" } }}
      autoComplete="off"
    >
      <h3>Login</h3>
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
      />
    </Form>
  );
};

export default Login;
