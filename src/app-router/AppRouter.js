import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import PrivateRouter from './PrivateRouter'


const AppRouter = () => {
    
    return (
       <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
            <PrivateRouter />

       </BrowserRouter>
    )
}

export default AppRouter