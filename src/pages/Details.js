import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import { BlogContext } from '../contexts/BlogContext';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



const Details = () => {
    const { blogsInfo, getBlogs, isLoading } = useContext(BlogContext);
   
    return (
        <div>
        <Card sx={{ maxWidth: 445 }} className="card" >
        <CardActionArea onClick={()=> navigate('/details')}>
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
                {slicedDate}
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
        </div>
    )
}

export default Details
