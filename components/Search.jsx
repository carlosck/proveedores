'use client';
import InitFirebase from '../helpers/initFirebase';
import { collection, getDocs,  } from "firebase/firestore";
import { useEffect, useState } from 'react';

import SearchHeader from '../components/SearchHeader';
import SearchResultContainer from '../components/SearchResultsContainer';
import styles from './search.module.css';
import {query, where } from "firebase/firestore";

export default function Search(){
    const [provedores, setProveedores] = useState([]);
    const [areas, setAreas] = useState([]);
    const [subareas, setSubareas] = useState([]);
    const [areaFilter, setAreaFilter] = useState([]);
    const [subAreaFilter, setSubareaFilter] = useState([]);
    const [searchWords, setSearchWords] = useState('');

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

        const areasRef = collection(db, "areas");        
        const all_areas = await getDocs(areasRef)
        console.log('all_areas ',all_areas.docs)
        setAreas(all_areas.docs)    

        const subareasRef = collection(db, "subareas");        
        const all_subareas = await getDocs(subareasRef)
        console.log('all_subareas ',all_subareas.docs)
        setSubareas(all_subareas.docs)    
        

                
        // const q = query(collection(db, "cities"), where("capital", "==", true));
        // const docRef = db.collection("proveedores").document("titleToCheck").;
        
    
    }
    async function searchQuery(){
        const firebase =await InitFirebase.getInstance()        
        const db= firebase.getDB();
        // const q = query(collection(db, "proveedores"), where("area", "==", searchWords));
        const q = query(collection(db, "proveedores"), and(
            where('area', '==', searchWords),
            or(
              where('subarea', '==', searchWords),
              where('name', '==', searchWords)
            )
          ))
          
        const queryDocuments = await getDocs(q);
        console.log('queryDocuments',queryDocuments.docs)
        setProveedores(queryDocuments.docs);
    }
    
    useEffect(()=>{
        getAppFirestore();
    },[])

    useEffect(()=>{
        if(searchWords!==null){
            console.log('searchWords',searchWords)
            searchQuery();
        }
        
    },[searchWords])

    return(
        <div className={styles.search_container}>
          <SearchHeader areas={areas} subareas={subareas} setAreaFilter={setAreaFilter} setSubareaFilter={setSubareaFilter} searchWords={searchWords} setSearchWords={setSearchWords}/>
          <SearchResultContainer results={provedores}/>
        </div>
    )
}