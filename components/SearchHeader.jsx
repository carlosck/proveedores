import styles from './searcheader.module.css';

export default function SearchHeader(){
    return(
        <div className={styles.search_header}>
            <div className={styles.main_search_top}>
                <h4 className={styles.search_header_title}>Busqueda</h4>
                <div>
                    <input className={styles.main_search} type='text' name='mainsearch' id='mainsearch' placeholder="plasticos, metales, impresiones"></input>
                </div>
                <p className={styles.main_search_int}>Realiza la busqueda por nombre de la empresa, area de trabajo o tipo de proyecto</p>
            </div>
            <div className={styles.main_search_bottom}>
                <div>
                    <h5 className={styles.search_header_label}>Area</h5>
                    <div>
                        <select name='area_select' id="area_select">
                            <option value='null'>Selecciona una area</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h5 className={styles.search_header_label}>SubArea</h5>
                    <div>
                        <select name='subarea_select' id="subarea_select">
                            <option value='null'>Selecciona una subarea</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}