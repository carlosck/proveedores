'use client';
import React, {useContext} from "react";
//import UserDsContext from '../user-provider'

// import {UserContext} from './layout'

import validateUser from '../../helpers/validate_user'

export default function main(){
    
    
    const sessionUser= validateUser();
    console.log('sessionUser',sessionUser);
    return ( sessionUser && 
        <>              
            <h1>{sessionUser}</h1>
            
        </>
    )
}
