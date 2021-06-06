import {
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import Layout from "./Layout";
import style from "./Signup.module.css";
import { AccountCircle } from "@material-ui/icons";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const [validation, setValidation] = useState([]);

  const submitHandler = () => {
    var formErrors = [];
    if (emailRef.current.value == "") {
      alert("email");
      formErrors.push("Email is required");
    }
    if (passwordRef.current.value == "") {
      formErrors.push("Password is required");
    }
    if (firstNameRef.current.value == "") {
      formErrors.push("firstName is required");
    }
    if (lastNameRef.current.value == "") {
      formErrors.push("lastName is required");
    }
    console.log(formErrors);
    setValidation(formErrors);
  };

  return (
    <Layout>
      <div>
        {validation.map((error) => {
          return <li>{error}</li>;
        })}
      </div>
      <div className={style.signupbox}>
        <Box m={2}>
          <h3 align="center">Register </h3>
          <FormControl fullWidth m={3}>
            <InputLabel>First name</InputLabel>
            <Input
              ref={firstNameRef}
              id="input-with-icon-adornment"
              type="text"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth m={3}>
            <InputLabel>Last name</InputLabel>
            <Input
              ref={lastNameRef}
              id="input-with-icon-adornment"
              type="text"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth m={3}>
            <InputLabel>Email</InputLabel>
            <Input
              ref={emailRef}
              id="input-with-icon-adornment"
              type="email"
              autocomplete="off"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth m={3}>
            <InputLabel>Password</InputLabel>
            <Input
              ref={passwordRef}
              id="input-with-icon-adornment"
              type="password"
              autocomplete="off"
              startAdornment={
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <Button color="default" onClick={submitHandler}>
              Sign Up
            </Button>
          </FormControl>
          <br />
          <p align="right">
            <Link to="/">Allready have an account</Link>
          </p>
        </Box>
      </div>
    </Layout>
  );
}
