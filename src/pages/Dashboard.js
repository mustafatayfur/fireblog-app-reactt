import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { BlogContext } from '../contexts/BlogContext';

const Dashboard = () => {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     readData(setData);
    // }, [])
    // // console.log(data)
    const { data, isLoading } = useContext(BlogContext);

    

    return (
        <div className='App' >
            <h1>DASHBOARD</h1>
         
            {data.map((doc)=>(
                <BlogCard doc={doc} key={doc.id}/>
            ))}
            
        </div>
    )
}

export default Dashboard

// _userDataWriter