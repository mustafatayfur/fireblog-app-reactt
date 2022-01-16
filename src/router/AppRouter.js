import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {Login, Register }from '../pages/LoginRegister'
import Dashboard from '../pages/Dashboard'
import PrivateRouter from './PrivateRouter'
import About from '../pages/About'


const AppRouter = () => {
    
    return (
       <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/about" element={<About/>} />
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
            <PrivateRouter/>
            

       </BrowserRouter>
    )
}

export default AppRouter