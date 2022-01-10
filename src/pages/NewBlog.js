import React from 'react'
import BlogForm from '../components/BlogForm' 
import { addInfo, updateInfo } from "../helpers/functions"

const initialValues = { title: '', imageUrl: '', content: '' };


const NewBlog = () => {
   
    return (
        <BlogForm  />
    )
}

export default NewBlog
