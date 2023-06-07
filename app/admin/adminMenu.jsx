import styles from './adminMenu.module.css'
export default function AdminMenu(){

    return(
        <div className={styles.admin_menu}>
            <div>
                <a href="/admin/add_proveedor">Agregar Proveedor</a>
            </div>
            <div>
                <a href="/admin/add_subscription">Agregar Subscriptor</a>
            </div>
            <div>
                <a href="/admin/report_visits">Reporte visitas</a>
            </div>
            <div>
                <a href="/admin/report_visits">Reporte Subscriptores</a>
            </div>
        </div>
    )
}