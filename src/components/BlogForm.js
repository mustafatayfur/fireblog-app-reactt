/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Avatar, Button } from "@mui/material";
import blog from "../assets/blogpost.jpeg";
import { addDoc } from "firebase/firestore";

const BlogForm=()=>{

  const [title, setTitle] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [content, setContent] = React.useState("");

  const createPost = async ()=> {

  }

  return (
    <div className="newBlog">
      <div className="avatar">
        <Avatar sx={{ height: 200, width: 200 }} alt='blog' src={blog} />
        <h2>New Blog</h2>
      </div>
      <div>
        <Box
          onSubmit={handleNewSubmit}
          component='form'
          sx={{
            "& > :not(style)": { m: 2, width: "50ch", display: 'flex' },
          }}
          noValidate
          autoComplete='off'>
            <TextField
            required
              id='outlined-basic'
              label='Title'
              variant='outlined'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
            required
              id='outlined-basic'
              label='Image URL'
              variant='outlined'
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <TextField
                required
              id='outlined-multiline-static'
              label='Multiline'
              multiline
              rows={12}
              label='Content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button variant="contained" size="large">SUBMIT</Button>
        </Box>
      </div>
    </div>
  );
}
export default BlogForm
