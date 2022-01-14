import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Details from '../pages/Details'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import UpdateBlog from '../pages/UpdateBlog'


const PrivateRouter = () => {
    
        return (
            <div>
                 
                (<Routes>
                    
                    <Route path="/register" element={<Register/>} />
                </Routes>
                
                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/details/:id" element={<Details/>} />
                    <Route path="/new-blog" element={<NewBlog/>} />
                    <Route path="/profile7:id" element={<Profile/>} />
                    <Route path="/updateBlog/:id" element={<UpdateBlog/>} />
                    {/*<Route path="*" element={<NotFound/>}/>*/}
                    
            
                </Routes>
                
            
            </div>
         )
    
    
}

export default PrivateRouter