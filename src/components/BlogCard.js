

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

export default function MultiActionAreaCard({docs}) {


  
  const { newUser, isLoading } = useFetch();
  console.log(newUser)

  return (
    <div className='App'>
      <h1>DASHBOARD</h1>
      {
        docs.map((doc)=> {
          const {_document:{
            data:{
              value: {
                mapValue:{
                  fields: {
                    author, 
                    comments:{
                      mapValue:{
                        fields:{
                          commemt_count
                        }
                      }
                  }, 
                  get_like_count, image, published_date, title}
                }
              }
            }}} = doc
          return (
            <Card sx={{ maxWidth: 445 }} className="card" key={author}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={image}
            alt='blog image'
          />
          <CardContent sx={{background:'#EFEEFE'}}> 
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography gutterBottom variant='h6' component='div'>
          <AccountCircleIcon sx={{ mr: '10px', mb:'-5px', ml:'-160px' }} />
          <span>mltm0204@gmail.com</span>
        </Typography>
        <CardActions>
          <Button>
            <FavoriteBorderIcon />
            <span>2</span>
          </Button>
          <Button>
            <ChatBubbleOutlineIcon />
            <span>0</span>
          </Button>
        </CardActions>
      </Card>
          )
        })
      }
    </div>
  );
}
