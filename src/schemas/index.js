import * as Yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    fullName: Yup.string().required("Fullname is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phonenumber: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    pincode: Yup.number().required("Postal Code is required"),
    typeOfPackage: Yup.string().required("State is required"),
    password: Yup.string().matches(passwordRules,{message:"please create a stronger password"}).required("Password is required"),
    confpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });