import styles from './adminMenu.module.css'
export default function AdminMenu(){

    return(
        <div className={styles.admin_menu}>
            <div>
                <a href="/admin/addProveedor">Agregar Proveedor</a>
            </div>
            <div>
                <a href="/admin/addSubscription">Agregar Subscriptor</a>
            </div>
            <div>
                <a href="/admin/reportVisits">Reporte visitas</a>
            </div>
            <div>
                <a href="/admin/reportSubscription">Reporte Subscriptores</a>
            </div>
        </div>
    )
}