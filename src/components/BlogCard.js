

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import blog2 from "../assets/blogpost.jpg";
import { useFetch } from "../helpers/functions";

export default function MultiActionAreaCard({doc}) {
  console.log(doc)
  const { _document } = doc
  // console.log(_document.data.value.mapValue.fields)
   const items = _document.data.value.mapValue.fields 
   console.log(items)
    const {author, comments, content, get_like_count, image, published_date, title} = items

  return (
    <div className='App'>
     

            <Card sx={{ maxWidth: 445 }} className="card" >
        <CardActionArea>
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
