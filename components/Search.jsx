'use client';
import InitFirebase from '../helpers/initFirebase';
import { collection, getDocs,  } from "firebase/firestore";
import { useEffect, useState } from 'react';

import SearchHeader from '../components/SearchHeader';
import SearchResultContainer from '../components/SearchResultsContainer';
import styles from './search.module.css';


export default function Search(){
    const [provedores, setProveedores] = useState([]);
    const [areas, setAreas] = useState([]);
    const [subareas, setSubareas] = useState([]);
    const [areaFilter, setAreaFilter] = useState([]);
    const [subAreaFilter, setSubareaFilter] = useState([]);

    async function getAppFirestore(){
        // TODO: move to oneliner
        console.log('getAppFirestore')
        const firebase =await InitFirebase.getInstance()        
        const db= firebase.getDB();
    
        console.log('db',db);
        const proveedoresRef = collection(db, "proveedores");        
        const alldocuments = await getDocs(proveedoresRef)
        console.log('all documents ',alldocuments.docs)
            
        setProveedores(alldocuments.docs);        
    
    }
    
    useEffect(()=>{
        getAppFirestore();
    },[])

    return(
        <div className={styles.search_container}>
          <SearchHeader areas={areas} subareas={subareas} />
          <SearchResultContainer results={provedores}/>
        </div>
    )
}