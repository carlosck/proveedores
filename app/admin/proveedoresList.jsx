import styles from './page.module.css'

export default function ProveedoresList(){

    return(
        <div className={styles.admin_panel}>
            <div className={styles.admin_panel_header}> 
                <div>Nombre del proveedor</div>
                <div>Visitas</div>
                <div>Editar</div>
                <div>Subscriptor</div>
            </div> 
            <div className={styles.admin_panel_body}> 
                <div className={styles.admin_panel_body_row}> 
                    <div className={styles.admin_panel_body_name}>Plasticos de Saltillo</div>
                    <div className={styles.admin_panel_body_visits}>16</div>
                    <div className={styles.admin_panel_body_edit}><button>Editar</button></div>
                    <div className={styles.admin_panel_body_subscriptor}>si</div>
                </div>
                <div className={styles.admin_panel_body_row}> 
                    <div className={styles.admin_panel_body_name}>Plasticos de Saltillo</div>
                    <div className={styles.admin_panel_body_visits}>16</div>
                    <div className={styles.admin_panel_body_edit}><button>Editar</button></div>
                    <div className={styles.admin_panel_body_subscriptor}>si</div>
                </div>
                <div className={styles.admin_panel_body_row}> 
                    <div className={styles.admin_panel_body_name}>Plasticos de Saltillo</div>
                    <div className={styles.admin_panel_body_visits}>16</div>
                    <div className={styles.admin_panel_body_edit}><button>Editar</button></div>
                    <div className={styles.admin_panel_body_subscriptor}>si</div>
                </div>
                <div className={styles.admin_panel_body_row}> 
                    <div className={styles.admin_panel_body_name}>Plasticos de Saltillo</div>
                    <div className={styles.admin_panel_body_visits}>16</div>
                    <div className={styles.admin_panel_body_edit}><button>Editar</button></div>
                    <div className={styles.admin_panel_body_subscriptor}>si</div>
                </div>
                <div className={styles.admin_panel_body_row}> 
                    <div className={styles.admin_panel_body_name}>Plasticos de Saltillo</div>
                    <div className={styles.admin_panel_body_visits}>16</div>
                    <div className={styles.admin_panel_body_edit}><button>Editar</button></div>
                    <div className={styles.admin_panel_body_subscriptor}>si</div>
                </div>
                <div className={styles.admin_panel_body_row}> 
                    <div className={styles.admin_panel_body_name}>Plasticos de Saltillo</div>
                    <div className={styles.admin_panel_body_visits}>16</div>
                    <div className={styles.admin_panel_body_edit}><button>Editar</button></div>
                    <div className={styles.admin_panel_body_subscriptor}>si</div>
                </div>
            </div> 
        </div>
    )

}