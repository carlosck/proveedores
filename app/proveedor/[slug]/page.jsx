'use client';
import { useEffect, useState } from "react";
import MainHeader from "../../../components/MainHeader";
import MainMenu from "../../../components/MainMenu";
import styles from '../../page.module.css'
import InitFirebase from '../../../helpers/initFirebase';
import { doc, getDoc } from "firebase/firestore";
import Detail from './Detail';

export default function Page({ params }) {
    const [proveedorData,setProveedorData] = useState(null)
    async function getProveedorData(slug){
        const firebase =await InitFirebase.getInstance()        
        const db= firebase.getDB();
        // const q = query(collection(db, "proveedores"), where("area", "==", searchWords));
        // ref.collection('usuario').orderBy('nombre').startAt(nombre).endAt(nombre+'\uf8ff')
        console.log('slug',slug)
        const docRef = doc(db, "proveedores", slug);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data()
        console.log('data',data)
        setProveedorData(data);
    }
    useEffect(()=>{
        getProveedorData(params.slug)
    },{})
    return(
        <main className={styles.main}>
            <MainMenu />
            <MainHeader />
            {proveedorData && <Detail data={proveedorData} />}
        </main>

    )
}