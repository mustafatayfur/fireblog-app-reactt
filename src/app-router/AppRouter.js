import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import PrivateRouter from './PrivateRouter'
import About from '../pages/About'
import Details from '../pages/Details'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import UpdateBlog from '../pages/UpdateBlog'


const AppRouter = () => {
    
    return (
       <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                
                <Route path="/about" element={<About/>} />
                <Route path="/details/:id" element={<Details/>} />
                <Route path="/new-blog" element={<NewBlog/>} />
                <Route path="/profile:id" element={<Profile/>} />
                <Route path="/updateBlog/:id" element={<UpdateBlog/>} />
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
            

       </BrowserRouter>
    )
}

export default AppRouter