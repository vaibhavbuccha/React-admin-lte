import React from "react";
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
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Layout>
      <div className={style.loginBox}>
        <Box color="text.primary" m={2}>
          <h3 align="center">Login </h3>
          <FormControl fullWidth m={3}>
            <InputLabel>Email Address</InputLabel>
            <Input
              id="input-with-icon-adornment"
              type="email"
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
            <Button color="default">Login</Button>
          </FormControl>
          <br />
          <p align="right">
            <Link to="/signup">Create a new account</Link>
          </p>
        </Box>
      </div>
    </Layout>
  );
}
