'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function validateUser(){
    const { replace } = useRouter();
    var user=undefined;
    useEffect(() =>{
        user = window.sessionStorage.getItem("user");
        console.log('session_user',user);
        
        if(user===null){
            replace('/admin/login');
        }
        
    },[])

    return window.sessionStorage.getItem("user");;
}