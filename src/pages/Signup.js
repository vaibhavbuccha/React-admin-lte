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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [isError, setIsError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/admin/register", {
        name: `${firstName} ${lastName}`,
        email,
        password,
      })
      .then((res) => {
        setResponse(() => "Successfully Registered. ");
        setIsError(false);
      })
      .catch((err) => {
        setResponse(() => err.response.data.message);
        setIsError(true);
      });
  };
  return (
    <Layout>
      <div className={style.signupbox}>
        <div
          align="center"
          style={{
            color: !isError ? "green" : "red",
            border: !isError ? "1px solid green" : "1px solid red",
            padding: "10px",
            borderRadius: "10px",
            display: response != "" ? "block" : "none",
          }}
        >
          {response}
        </div>
        <form onSubmit={submitHandler}>
          <Box m={2}>
            <h3 align="center">Register </h3>
            <FormControl fullWidth m={3}>
              <InputLabel>First name</InputLabel>
              <Input
                onChange={(e) => setFirstName(e.target.value)}
                id="input-with-icon-adornment"
                type="text"
                required
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
                onChange={(e) => setLastName(e.target.value)}
                id="input-with-icon-adornment"
                type="text"
                required
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
                onChange={(e) => setEmail(e.target.value)}
                id="input-with-icon-adornment"
                type="email"
                autocomplete="off"
                required
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
                onChange={(e) => setPassword(e.target.value)}
                id="input-with-icon-adornment"
                type="password"
                autocomplete="off"
                required
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
              <Button color="default" type="submit">
                Sign Up
              </Button>
            </FormControl>
            <br />
            <p align="right">
              <Link to="/">Allready have an account</Link>
            </p>
          </Box>
        </form>
      </div>
    </Layout>
  );
}
