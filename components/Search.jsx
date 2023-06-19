'use client';
import InitFirebase from '../helpers/initFirebase';
import { collection, getDocs,  } from "firebase/firestore";
import { useEffect, useState } from 'react';

import SearchHeader from '../components/SearchHeader';
import SearchResultContainer from '../components/SearchResultsContainer';
import styles from './search.module.css';
import {query, where, and, or } from "firebase/firestore";

export default function Search(){
    const [provedores, setProveedores] = useState([]);
    const [areas, setAreas] = useState([]);
    const [subareas, setSubareas] = useState([]);
    const [areaFilter, setAreaFilter] = useState(null);
    const [subAreaFilter, setSubareaFilter] = useState(null);
    const [searchWords, setSearchWords] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    async function getAppFirestore(){
        // TODO: move to oneliner
        console.log('getAppFirestore')
        const firebase =await InitFirebase.getInstance()        
        const db= firebase.getDB();
    
        console.log('db',db);
        const proveedoresRef = collection(db, "proveedores");        
        const alldocuments = await getDocs(proveedoresRef)
        console.log('all documents ',alldocuments.docs)
        setIsLoading(false);
        setProveedores(alldocuments.docs);

        const areasRef = collection(db, "areas");        
        const all_areas = await getDocs(areasRef)
        console.log('all_areas ',all_areas.docs)
        setAreas(all_areas.docs)    

        const subareasRef = collection(db, "subareas");        
        const all_subareas = await getDocs(subareasRef)
        console.log('all_subareas ',all_subareas.docs)
        setSubareas(all_subareas.docs)
               
        // const docRef = db.collection("proveedores").document("titleToCheck").;        
    
    }
 
    async function searchQuery(searchName, searchArea, searchSubarea){
        const firebase =await InitFirebase.getInstance()        
        const db= firebase.getDB();      
        // ref.collection('usuario').orderBy('nombre').startAt(nombre).endAt(nombre+'\uf8ff')
        
        const q = query(collection(db, "proveedores"),
        or(
            where('subarea', '==', searchSubarea),
            where('area', '==', searchArea),
            where('name', '==', searchName),
        )
         )
          
        const queryDocuments = await getDocs(q);
        console.log('queryDocuments',queryDocuments.docs)
        setProveedores(queryDocuments.docs);
    }
    
    useEffect(()=>{
        getAppFirestore();
    },[])

    useEffect(()=>{
        console.log('------------ search --------------');
        console.log('--   Words :',searchWords)
        console.log('--    Area :',areaFilter)
        console.log('--Sub-Area :',subAreaFilter)

        if(searchWords || areaFilter || subAreaFilter){
            searchQuery(
                searchWords!==null? searchWords: '', 
                areaFilter!==null? areaFilter: searchWords,
                subAreaFilter!==null? subAreaFilter: searchWords,
                );
        }
        else{
            getAppFirestore()
        }
        
        
    },[searchWords, areaFilter, subAreaFilter])
    

    return(
        <div className={styles.search_container}>
          <SearchHeader areas={areas} subareas={subareas} setAreaFilter={setAreaFilter} setSubareaFilter={setSubareaFilter} searchWords={searchWords} setSearchWords={setSearchWords}/>
          <SearchResultContainer results={provedores} isLoading={isLoading}/>
        </div>
    )
}