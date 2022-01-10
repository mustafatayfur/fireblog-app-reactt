/** @format */

import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Avatar, Button } from "@mui/material";
import blog from "../assets/blogpost.jpeg";
import { auth, provider } from "../helpers/firebase";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginFirebase = () => {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const SignInWithFirebase = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setEmail("");
    console.log(password)
    console.log(email)
  };
  return (
    <div className='newBlog'>
      <div className='avatar'>
        <Avatar sx={{ height: 200, width: 200 }} alt='blog' src={blog} />
        <h2>Login</h2>
      </div>
      <div>
        <Box
          onSubmit={handleSubmit}
          component='form'
          sx={{
            "& > :not(style)": { m: 2, width: "50ch", display: "flex" },
          }}
          noValidate
          autoComplete='off'>
          <TextField
            required
            id='outlined-password-input'
            label='Password'
            type='password'
            value={password}
            autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            required
            id='outlined-email-input'
            label='Email'
            type='email'
            value={email}
            autoComplete='current-email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type='submit' variant='contained' size='large'>
            SUBMIT
          </Button>
        </Box>
        <Button size='large' onClick={() => SignInWithFirebase(auth, provider)}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};
export default LoginFirebase;
