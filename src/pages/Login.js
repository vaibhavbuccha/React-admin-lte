import React, { useRef, useState } from "react";
import Layout from "./Layout";
import {
  TextField,
  Grid,
  Box,
  InputLabel,
  Input,
  InputAdornment,
  FormControl,
  Button,
} from "@material-ui/core";
import style from "./Login.module.css";
import { AccountCircle } from "@material-ui/icons";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link, Redirect, Switch } from "react-router-dom";
import axios from "axios";
import { isAuthenticated } from "../util";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const [response, setResponse] = useState("");
  const [isError, setIsError] = useState(false);
  if (isAuthenticated()) {
    return <Redirect to="/dashboard" />;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    // alert(password.current.value);
    await axios
      .post("admin/login", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        setResponse(() => res.data.message);
        setIsError(false);
        return <Redirect to="/dashboard" />;
      })
      .catch((err) => {
        setResponse(() => err.response.data.message);
        setIsError(true);
      });
  };

  return (
    <Layout>
      <div className={style.loginBox}>
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
        <Box color="text.primary" m={2}>
          <h3 align="center">Login </h3>
          <form onSubmit={submitHandler}>
            <FormControl fullWidth m={3}>
              <InputLabel>Email Address</InputLabel>
              <Input
                id="input-with-icon-adornment"
                type="email"
                required
                inputRef={email}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel>Password</InputLabel>
              <Input
                id="input-with-icon-adornment"
                type="password"
                required
                inputRef={password}
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
              <Button type="submit" color="default">
                Login
              </Button>
            </FormControl>
            <br />
            <p align="right">
              <Link to="/signup">Create a new account</Link>
            </p>
          </form>
        </Box>
      </div>
    </Layout>
  );
}
