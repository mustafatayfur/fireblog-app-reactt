import { Button, Card, CardActionArea, CardActions, cardActionsClasses, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { BlogContext, useBlog } from '../contexts/BlogContext';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate, useLocation, useParams } from 'react-router-dom';



const Details = () => {
    const [currentBlogs, setCurrentBlogs] = useState();
    const  navigate = useNavigate()
    const { id } = useParams();
    // console.log(id)
    const { getOneBlog, deleteOneBlog } = useBlog();
    

   

    return (
        
        <div>
        
        
        {doc.id === id && 
            <Card sx={{ maxWidth: 445 }} className="card" >
            <CardActionArea
            style={{ cursor: 'pointer' }}
            onClick={()=> navigate(`/details/${doc.id}`,{ state: { doc}})}>
              <CardMedia
                component='img'
                height='140'
                image={image.stringValue}
                alt='blog image'
              />
              <CardContent sx={{background:'#EFEEFE'}}> 
                <Typography gutterBottom variant='h5' component='div'>
                  {title.stringValue}
                </Typography>
                <Typography>
                    {published_date}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {content.stringValue}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Typography gutterBottom variant='h6' component='div'>
              <AccountCircleIcon sx={{ mr: '10px', mb:'-5px', ml:'-160px' }} />
              <span>{author.stringValue}</span>
            </Typography>
            <CardActions>
              <Button>
                <FavoriteBorderIcon />
                <span>{get_like_count.integerValue}</span>
              </Button>
              <Button>
                <ChatBubbleOutlineIcon />
                <span>{comments.mapValue.fields.commemt_count.integerValue}</span>
              </Button>
            </CardActions>
          </Card>
        }          
          
        </div>
    )
}

export default Details
