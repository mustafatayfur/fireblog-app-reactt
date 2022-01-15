import { Avatar, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { BlogContext } from '../contexts/BlogContext';
import { db, updateInfo } from '../helpers/firebase';
import blog from "../assets/blogpost.jpeg";
import { collection, onSnapshot } from 'firebase/firestore';


const UpdateBlog = () => {
    
    const [info, setInfo] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, title } = useContext(BlogContext);
    console.log("blogContex title:", title)


    console.log("id:",id)
    console.log("data:",data)

    useEffect(
      () => 
        onSnapshot(collection(db, "blogs"), (snapshot)=>
          setInfo(snapshot.docs.map((item) =>({...item.data(), title: item.title})))
        ), []);
      console.log("info",info)

    const handleSubmit = (e) => {
        e.preventDefault();
    
        updateInfo(info);
        navigate("/");
      };
      console.log("info from updateBlog:", info);
      
    
      const handleInfoChange = (e) => {
        console.log("value", e.target.value);
        console.log("name", e.target.name);
        
        
        setInfo({ ...info, [e.target.name]: e.target.value });
      };
    
    return (
    <div className="newBlog">
      <div className="avatar">
        <Avatar sx={{ height: 200, width: 200 }} alt='blog' src={blog} />
        <h2>New Blog</h2>
      </div>
      <div>

        {info.map((doc,index) => {
          console.log(doc)
        if(doc.title === title){
           
            return(
                <Box
                key={index}
                component='form'
                sx={{
                  "& > :not(style)": { m: 2, width: "50ch", display: 'flex' },
                }}
                noValidate
                autoComplete='off'>
                  <TextField
                  
                    id='outlined-basic'
                    label='Title'
                    name={title}
                    variant='outlined'
                    value={doc.title}
                    onChange={handleInfoChange}
                  />
                  <TextField
                  
                    id='outlined-basic'
                    label='Image URL'
                    name='image'
                    variant='outlined'
                    value={info.image}
                    onChange={handleInfoChange}
                  />
                  <TextField
                    
                    id='outlined-multiline-static'
                    label='Multiline'
                    name='content'
                    multiline
                    rows={12}
                    label='Content'
                    value={info.content}
                    // onChange={(e) => setContent(e.target.value)}
                  />
                  <Button onClick={handleSubmit} variant="contained" size="large">UPDATE</Button>
              </Box>
            )}
        })}
      </div>
    </div>
    )
}

export default UpdateBlog
