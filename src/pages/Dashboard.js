import React, { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import { BlogContext } from '../contexts/BlogContext';

const Dashboard = () => {

    const { data } = useContext(BlogContext);
    console.log("dashBoard data:",data)

    return (
        <div className='App'>
            {data.map((doc)=>
             (
            <BlogCard doc={doc} key={doc.id}/>
            )
            )}
            
        </div>
    )
}

export default Dashboard
