import styles from './page.module.css'

import InitFirebase from '../../helpers/initFirebase';
import { collection, getDocs,  } from "firebase/firestore";
import { useEffect, useState } from 'react';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { query, where, orderBy, limit } from "firebase/firestore";  


export default function ProveedoresList(){
    
    const [proveedores,setProveedores] = useState([])
    
    async function getAppFirestore(){
        //const db= InitFirebase.getInstance().getDB();
        const firebaseConfig = {
            apiKey: "AIzaSyDzIT_JVqLgsxit71KS2ulYr44UXzAb3OI",
            authDomain: "bingo-5b085.firebaseapp.com",
            databaseURL: "https://bingo-5b085.firebaseio.com",
            projectId: "bingo-5b085",
            storageBucket: "bingo-5b085.appspot.com",
            messagingSenderId: "864945342006",
            appId: "1:864945342006:web:f939ad69a4f5c32e9cba97"
          };
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        
        const proveedoresRef = collection(db, "proveedores");
        const alldocuments = await getDocs(proveedoresRef)
        console.log('alldocuments',alldocuments.data())
        //setProveedores(alldocuments);        
        
        
        
        alldocuments.forEach((doc) => {
            console.log('${doc.id}' , doc.data());
        });
        

    }

    useEffect(()=>{
        getAppFirestore();
    },[])
    return(
        <div className={styles.admin_panel}>
            <div className={styles.admin_panel_header}> 
                <div>Nombre del proveedor</div>
                <div>Visitas</div>
                <div>Editar</div>
                <div>Subscriptor</div>
            </div>
            
            <div className={styles.admin_panel_body}> 
                
                {proveedores && proveedores.map((proovedor)=>{
                    const data=proovedor.data();
                    
                    const active_substription = data.subscription_end > new Date().getTime() ? 'Si' : 'No';
                    
                    <div className={styles.admin_panel_body_row}> 
                        <div className={styles.admin_panel_body_name}>{data.name}</div>
                        <div className={styles.admin_panel_body_visits}>X</div>
                        <div className={styles.admin_panel_body_edit}>
                            <button>Editar</button>
                            </div>
                        <div className={styles.admin_panel_body_subscriptor}>{active_substription}</div>
                    </div>
                })} 
            </div> 
        </div>
    )

}