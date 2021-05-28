import {
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
} from "@material-ui/core";
import React from "react";
import Layout from "./Layout";
import style from "./Signup.module.css";
import { AccountCircle } from "@material-ui/icons";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <Layout>
      <div className={style.signupbox}>
        <Box m={2}>
          <h3 align="center">Register </h3>
          <FormControl fullWidth m={3}>
            <InputLabel>First name</InputLabel>
            <Input
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
          <FormControl fullWidth m={3}>
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
            <Button color="default">Sign Up</Button>
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
