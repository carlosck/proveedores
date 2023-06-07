'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function validateUser(){
   /*  const { replace } = useRouter();
    var user=undefined;
    useEffect(() =>{
        user = window.sessionStorage.getItem("user");
        console.log('session_user',user);
        
        if(user===null){
            replace('/admin/login');
        }
        
    },[])

    return user; */

    let userFromSession

    if (typeof window !== 'undefined') {
        userFromSession = window.sessionStorage.getItem('user')
        if(userFromSession===null){
            replace('/admin/login');
        }
        console.log('userFromSession->',userFromSession)
    }
    return userFromSession
    
}