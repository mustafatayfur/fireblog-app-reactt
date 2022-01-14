import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import { BlogContext } from '../contexts/BlogContext';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



const Details = () => {
    const { blogsInfo, data, isLoading } = useContext(BlogContext);
    console.log(data)
    return (
        <div>
           <h1>DETAILS</h1>
          
        </div>
    )
}

export default Details
