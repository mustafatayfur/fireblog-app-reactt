/** @format */

import { useState, useContext } from "react";
import { continueWithGoogle, createUser } from './../helpers/firebase';
import { AuthContext } from "../contexts/AuthContext"
import { useHistory, useNavigate } from "react-router-dom";
import { Avatar, Box, Button, TextField } from "@mui/material";
import blog from "../assets/blogpost.jpeg";
import { linkWithRedirect } from "firebase/auth";


const Register = () => {
    const history = useHistory()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);

  const handleSubmit = async () => {

    const user = { email, password };
    createUser(user.email, user.password);
    history.push('/');
  };
  const handleProviderRegister = () => {
    continueWithGoogle();
    history.push('/');
  }
  if (currentUser) {
     navigate('/')
  }

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
            REGISTER
          </Button>
        </Box>
        <Button onClick={handleProviderRegister}></Button>
      </div>
    </div>
  );
};
export default Register;
