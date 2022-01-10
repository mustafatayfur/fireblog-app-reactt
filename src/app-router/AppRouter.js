import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Details from '../pages/Details'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import UpdateBlog from '../pages/UpdateBlog'
import PrivateRouter from './PrivateRouter'


const AppRouter = () => {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)
    return (
       <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
            <PrivateRouter isUserSignedIn={isUserSignedIn}/>

       </BrowserRouter>
    )
}

export default AppRouter