/** @format */

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
// import { auth } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, TextField } from "@mui/material";
import blog from "../assets/blogpost.jpeg";


const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // console.log(firstName, lastName, email,password );

    // try{

    //     let user = await createUserWithEmailAndPassword(auth, email, password)
    //     console.log(user)
    //     await updateProfile(auth.currentUser, {password : password, email: email})
    //     console.log(auth.currentUser)
    //     navigate('/')

    // }catch(err){
    //     alert(err.message)
    // }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("created")
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className='newBlog'>
      <div className='avatar'>
        <Avatar sx={{ height: 200, width: 200 }} alt='blog' src={blog} />
        <h2>Register</h2>
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
      </div>
    </div>
  );
};
export default Register;
