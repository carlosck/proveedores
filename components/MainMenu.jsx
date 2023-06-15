import styles from '../app/page.module.css'
export default function MainMenu(){
    return(
        <menu className={styles.mainmenu}>
            <a href="./">Home</a>
            <a href="./About">Acerca de nosotros</a>
            <a href="./Contact">Contacto</a>
        </menu>
    )
}