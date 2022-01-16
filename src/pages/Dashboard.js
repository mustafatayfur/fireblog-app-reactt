import React, { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import { BlogContext } from '../contexts/BlogContext';

const Dashboard = () => {

    const { data } = useContext(BlogContext);
    console.log("dashBoard data:",data)

    return (
        <div>
            
          
            {
                data?.map((doc,index)=>{
                    return (
                        <div key={index}>
                        <BlogCard doc={doc} />
                        </div>
                       
                    )
                })
            }
        </div>
    )
}

export default Dashboard

 