'use client';
import React, {useState, useEffect} from "react";
//import UserDsContext from '../user-provider'

// import {UserContext} from './layout'
import AdminMenu from "./adminMenu";
import ProveedoresList from "./proveedoresList"
import validateUser from '../../helpers/validate_user'

export default function Main(){
    const [user,setUser] = useState();

    useEffect(()=>{
        const sessionUser= validateUser();
        console.log('sessionUser',sessionUser);
        setUser(sessionUser);

    },[])
    
    
    
    return ( user && 
        <>              
            <h1>Home</h1>
            <AdminMenu/>
            <ProveedoresList />
        </>
    )
}
