import React from 'react'
import BlogForm from '../components/BlogForm' 
import { addInfo, updateInfo } from "../helpers/functions"

const initialValues = { title: '', imageUrl: '', content: '' };


const NewBlog = () => {
    const handleNewSubmit =(e)=>{
        e.preventDefault()
        addInfo()
    }
    return (
        <BlogForm handleNewSubmit={handleNewSubmit} />
    )
}

export default NewBlog
