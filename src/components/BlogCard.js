

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useNavigate, useParams } from "react-router-dom";


export default function BlogCard({doc}) {

  const navigate = useNavigate()
  // const {blogId} = useParams()
// console.log(blogId)

  
  const { _document } = doc
  // console.log(_document.data.value.mapValue.fields)
   const items = _document.data.value.mapValue.fields 
  //  console.log(items)
    const {author, comments, content, get_like_count, image, published_date, title} = items
    const slicedDate = published_date.timestampValue.slice(0,10)

  

  return (
    <div className='App'>
     

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
  );
}
