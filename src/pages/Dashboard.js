import React, { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import { BlogContext } from '../contexts/BlogContext';

const Dashboard = () => {

    const { data } = useContext(BlogContext);
    console.log("dasboard data:", data)

    return (
        <div className='App' >
            <h1>DASHBOARD</h1>
           
           
            
        </div>
    )
}

export default Dashboard
