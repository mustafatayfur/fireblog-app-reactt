import { Button, Card, CardActionArea, CardActions, cardActionsClasses, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { BlogContext} from '../contexts/BlogContext';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';



const Details = () => {
    const  navigate = useNavigate()
    const { id } = useParams();
    // console.log("id:",id)
    const { data, isLoading } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);


    
    
    console.log(data)
   

    return (

        <div>
        
            {
                !currentUser ? 
                (
                    navigate('/login')
                ):
               ( <div>
                    {data.map((doc,index)=>{
                        if(doc.id === id){
                            const { _document } = doc
                            // console.log("doc id:",doc.id)
                          
                            const items = _document.data.value.mapValue.fields 
                            // console.log(items)
                            const {author, comments, content, get_like_count, image, published_date, title} = items
                            const slicedDate = published_date.timestampValue.slice(0,10)
                            return(
                                <Card sx={{ maxWidth: 445 }} className="card" key={index} >
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
                            )
                        }
                    })
                    }
        
                </div>)

            }
        </div>
        
    )
}

export default Details
