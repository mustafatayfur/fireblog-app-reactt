import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { readData } from '../helpers/firebase'

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        readData(setData);
    }, [])
    console.log(data)

    return (
        <div>
            <BlogCard docs={data}/>
        </div>
    )
}

export default Dashboard
