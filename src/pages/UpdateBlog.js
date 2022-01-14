import { Avatar, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { BlogContext } from '../contexts/BlogContext';
import blog from "../assets/blogpost.jpeg";


const UpdateBlog = () => {
    
    const [info, setInfo] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = useContext(BlogContext);

    console.log("id:",id)
    console.log("data:",data)

    // useEffect(() => {
    // setInfo(data?.find((doc) => doc.id === id) ? doc);
    // }, [data]);
    
    return (
    <div className="newBlog">
      <div className="avatar">
        <Avatar sx={{ height: 200, width: 200 }} alt='blog' src={blog} />
        <h2>New Blog</h2>
      </div>
      <div>

        {data.map((doc,index) => {
        if(doc.id === id){
            const { _document } = doc
            // console.log("doc",doc)
          
            const items = _document.data.value.mapValue.fields 
            // console.log(items)
            const { content, get_like_count, image, published_date, title} = items
        
            const slicedDate = published_date.timestampValue.slice(0,10)
            return(
                <Box
          
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
                    value={image}
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
                  <Button onClick={handleClick} variant="contained" size="large">UPDATE</Button>
              </Box>
            )}
        })}
      </div>
    </div>
    )
}

export default UpdateBlog
