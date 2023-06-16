'use client';
import {useState, useEffect} from 'react';
import styles from './searcheader.module.css';

export default function SearchHeader({areas, subareas, searchWords, setSearchWords}){

    const [searchValue, setSearchValue]= useState('');

    function clickListenner(e){
        setSearchWords(searchValue)
    }
    function clickListennerReset(e){
        
        setSearchWords('');
        setSearchValue('');
    }

    useEffect(()=>{
        setSearchValue(searchWords)
    },[])

    return(
        <div className={styles.search_header}>
            <div className={styles.main_search_top}>
                <h4 className={styles.search_header_title}>Busqueda</h4>
                <div>
                    <input value={searchValue} onChange={(val)=>{setSearchValue(val.currentTarget.value)}} className={styles.main_search} type='text' name='mainsearch' id='mainsearch' placeholder="plasticos, metales, impresiones"></input>
                    <button onClick={(e)=>{clickListenner(e)}}>Search</button>
                    <button onClick={(e)=>{clickListennerReset(e)}}>Reset</button>
                </div>
                <p className={styles.main_search_int}>Realiza la busqueda por nombre de la empresa, area de trabajo o tipo de proyecto</p>
            </div>
            <div className={styles.main_search_bottom}>
                <div>
                    <h5 className={styles.search_header_label}>Area</h5>
                    <div>
                        <select name='area_select' id="area_select">
                            {
                                areas===null || areas.length===0? 
                                (<option value='null'>Selecciona una area</option>)
                                :
                                (
                                    areas.map(area=>{
                                        const areadata= area.data();
                                        return <option value={areadata.name}>{areadata.name}</option>
                                    })
                                )
                            }
                            
                        </select>
                    </div>
                </div>
                <div>
                    <h5 className={styles.search_header_label}>SubArea</h5>
                    <div>
                        <select name='subarea_select' id="subarea_select">
                            
                            {
                                subareas===null || subareas.length===0? 
                                (<option value='null'>Selecciona una subarea</option>)
                                :
                                (
                                    subareas.map(subarea=>{
                                        const subareadata= subarea.data();
                                        return <option value={subareadata.name}>{subareadata.name}</option>
                                    })
                                )
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}