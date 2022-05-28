import React from "react";
import {Navigate, Routes, Route } from 'react-router-dom'
import AuthPage from "../pages/AuthPage/AuthPage";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import SidebarUser from '../components/SidebarUser/SidebarUser';
import Error404 from "../pages/Error/Error404";

const useRouters = (isLogin) => {
   if(isLogin){
      return (
         <section className='main'>
            <SidebarUser/>
            <Routes>
               <Route path={'/'} element={<Home/>}/>
               <Route path={'/myprofile'} element={<Profile/>}/>
               <Route path="/auth/login" element={<Navigate to={'/'}/>} />
               <Route path="/auth/register" element={<Navigate to={'/'}/>} />
               <Route path={'/error'} element={<Error404/>}/>
               <Route path="*" element={<Navigate to={'error'}/>} />
            </Routes>
         </section>
      )
   }
   return (
      <Routes>
         <Route path={'/auth/*'} element={<AuthPage/>}/>
         <Route path="*" element={<Navigate to={'/auth/login'}/>} />
      </Routes>
   )
};
export default useRouters