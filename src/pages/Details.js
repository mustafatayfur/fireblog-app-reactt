import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import { BlogContext } from '../contexts/BlogContext';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLocation, useParams } from 'react-router-dom';



const Details = () => {

    const { id } = useParams();
    console.log(id)
    const location = useLocation();
    console.log(location)



    const { blogsInfo, data, isLoading } = useContext(BlogContext);
    console.log(data)

    {data.filter((doc)=> doc.id === id && 
        <h1>{content}</h1>
        )}

    useEffect(() => {
        
        return (
        
           
          


    
        


    return (
        <div>
          
          
        </div>
    )
}

export default Details
