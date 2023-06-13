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
        // TODO: move to oneliner
        console.log('getAppFirestore')
        const firebase =await InitFirebase.getInstance()        
        const db= firebase.getDB();

        console.log('db',db);
        const proveedoresRef = collection(db, "proveedores");        
        const alldocuments = await getDocs(proveedoresRef)
        console.log('alldocuments',alldocuments.docs)
            
        setProveedores(alldocuments.docs);        

    }
    const ProveedorItem=({proveedor})=>{           
        const active_subscription = proveedor.subscription_end > new Date().getTime() ? 'Si' : 'No';

        return(
            <div className={styles.admin_panel_body_row}> 
                <div className={styles.admin_panel_body_name}>{proveedor.name}</div>
                <div className={styles.admin_panel_body_visits}>X</div>
                <div className={styles.admin_panel_body_edit}>
                    <a href={`/admin/editarProveedor/${34}`}>Editar</a>
                    </div>
                <div className={styles.admin_panel_body_subscriptor}>{active_subscription}</div>
            </div>
        )
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
                
                {proveedores && proveedores.map((proveedor,index)=>{
                                        
                    return <ProveedorItem key={index} proveedor={proveedor.data()} />
                })} 
            </div> 
        </div>
    )

}